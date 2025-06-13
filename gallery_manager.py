#!/usr/bin/env python3
"""
Wubbleton Gallery Manager - Python Version
Easy image management with Supabase Storage
"""

import os
import sys
import glob
from pathlib import Path
from typing import List, Dict, Optional

try:
    # Install with: pip install supabase
    from supabase import create_client, Client
except ImportError:
    print("❌ Supabase module not found!")
    print("\nTo install, run:")
    print("  pip install supabase python-dotenv")
    print("\nOr if you prefer Node.js, use the JavaScript version instead:")
    print("  npm install")
    print("  node setup_supabase.js")
    sys.exit(1)

class GalleryManager:
    def __init__(self):
        # Get credentials from environment or .env file
        self.url = os.getenv('SUPABASE_URL', 'https://ozxhahlykxeeiuvmzrbb.supabase.co')
        self.key = os.getenv('SUPABASE_ANON_KEY', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96eGhhaGx5a3hlZWl1dm16cmJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3OTE1NDgsImV4cCI6MjA2NTM2NzU0OH0.SP-nxe_faZurceOYkXTTZlMDHw3bDFkLQxgMbQKTxZU')
        
        if self.url == 'YOUR_SUPABASE_URL':
            print("⚠️  Please set your Supabase credentials!")
            print("\n1. Go to https://app.supabase.com and create a free project")
            print("2. Go to Settings → API")
            print("3. Copy your project URL and anon key")
            print("4. Create a .env file with:")
            print("   SUPABASE_URL=your_url_here")
            print("   SUPABASE_ANON_KEY=your_key_here\n")
            sys.exit(1)
        
        self.supabase: Client = create_client(self.url, self.key)
        self.bucket_name = 'gallery-images'
    
    def setup_bucket(self) -> bool:
        """Create the storage bucket if it doesn't exist"""
        try:
            # List existing buckets
            buckets = self.supabase.storage.list_buckets()
            exists = any(b['name'] == self.bucket_name for b in buckets)
            
            if not exists:
                print("📦 Creating storage bucket...")
                self.supabase.storage.create_bucket(
                    self.bucket_name,
                    options={'public': True}
                )
                print("✅ Bucket created successfully!")
            else:
                print("✅ Bucket already exists")
            
            return True
        except Exception as e:
            # If the error is about RLS or permissions, but bucket exists, that's OK
            if "policy" in str(e).lower() or "unauthorized" in str(e).lower():
                print("✅ Bucket exists (access check failed but that's OK)")
                return True
            print(f"❌ Error setting up bucket: {e}")
            return False
    
    def upload_image(self, local_path: str, remote_path: str) -> bool:
        """Upload a single image"""
        try:
            with open(local_path, 'rb') as f:
                self.supabase.storage.from_(self.bucket_name).upload(
                    remote_path,
                    f,
                    {'content-type': 'image/jpeg'}
                )
            return True
        except Exception as e:
            if 'already exists' in str(e):
                # Update existing file
                with open(local_path, 'rb') as f:
                    self.supabase.storage.from_(self.bucket_name).update(
                        remote_path,
                        f,
                        {'content-type': 'image/jpeg'}
                    )
                return True
            print(f"❌ Failed to upload {local_path}: {e}")
            return False
    
    def upload_all_galleries(self):
        """Upload all gallery images"""
        print("🎨 Starting gallery upload...\n")
        
        galleries = ['crisis', 'zombies', 'rapture']
        types = ['thumbs', 'full']
        
        for gallery in galleries:
            print(f"\n📁 Uploading {gallery} gallery...")
            
            for img_type in types:
                pattern = f"web/galleries/{gallery}/{img_type}/*"
                files = glob.glob(pattern)
                
                print(f"  📸 Found {len(files)} {img_type} images")
                
                for file_path in files:
                    filename = os.path.basename(file_path)
                    remote_path = f"{gallery}/{img_type}/{filename}"
                    
                    print(f"  ⬆️  {filename}... ", end='', flush=True)
                    if self.upload_image(file_path, remote_path):
                        print("✅")
                    else:
                        print("❌")
        
        print("\n🎉 Upload complete!")
        print(f"\n📌 Update gallery_config.js to:")
        print(f"IMAGE_SERVER_URL: '{self.url}/storage/v1/object/public/{self.bucket_name}'")
    
    def list_gallery_images(self, gallery: str, img_type: str = 'thumbs') -> List[Dict]:
        """List all images in a gallery"""
        try:
            files = self.supabase.storage.from_(self.bucket_name).list(
                f"{gallery}/{img_type}"
            )
            
            images = []
            for file in files:
                if file['name'] != '.emptyFolderPlaceholder':
                    images.append({
                        'name': file['name'],
                        'size': file.get('metadata', {}).get('size', 0),
                        'url': self.get_public_url(f"{gallery}/{img_type}/{file['name']}")
                    })
            
            return images
        except Exception as e:
            print(f"❌ Error listing images: {e}")
            return []
    
    def get_public_url(self, path: str) -> str:
        """Get the public URL for an image"""
        return f"{self.url}/storage/v1/object/public/{self.bucket_name}/{path}"
    
    def add_image_to_gallery(self, gallery: str, image_path: str, img_type: str = 'full') -> bool:
        """Add a new image to a gallery"""
        if not os.path.exists(image_path):
            print(f"❌ Image not found: {image_path}")
            return False
        
        filename = os.path.basename(image_path)
        remote_path = f"{gallery}/{img_type}/{filename}"
        
        print(f"📤 Adding {filename} to {gallery} gallery...")
        if self.upload_image(image_path, remote_path):
            print("✅ Image added successfully!")
            print(f"🔗 Public URL: {self.get_public_url(remote_path)}")
            return True
        
        return False
    
    def remove_image(self, gallery: str, filename: str, img_type: str = 'full') -> bool:
        """Remove an image from a gallery"""
        try:
            path = f"{gallery}/{img_type}/{filename}"
            self.supabase.storage.from_(self.bucket_name).remove([path])
            print(f"✅ Removed {filename} from {gallery}")
            return True
        except Exception as e:
            print(f"❌ Error removing image: {e}")
            return False

def main():
    """Main CLI interface"""
    manager = GalleryManager()
    
    if len(sys.argv) < 2:
        print("🌈 Wubbleton Gallery Manager\n")
        print("Commands:")
        print("  python gallery_manager.py upload              - Upload all galleries")
        print("  python gallery_manager.py list <gallery>      - List images in gallery")
        print("  python gallery_manager.py add <gallery> <image> - Add image to gallery")
        print("  python gallery_manager.py remove <gallery> <filename> - Remove image")
        return
    
    command = sys.argv[1]
    
    # Ensure bucket exists
    if not manager.setup_bucket():
        return
    
    if command == 'upload':
        # Handle both "upload" and "upload all"
        manager.upload_all_galleries()
    
    elif command == 'list':
        gallery = sys.argv[2] if len(sys.argv) > 2 else 'crisis'
        images = manager.list_gallery_images(gallery)
        print(f"\n📋 Images in {gallery} gallery:")
        for img in images:
            size_kb = img['size'] / 1024
            print(f"  - {img['name']} ({size_kb:.1f} KB)")
    
    elif command == 'add':
        if len(sys.argv) < 4:
            print("Usage: python gallery_manager.py add <gallery> <image-path>")
            return
        gallery = sys.argv[2]
        image_path = sys.argv[3]
        manager.add_image_to_gallery(gallery, image_path)
    
    elif command == 'remove':
        if len(sys.argv) < 4:
            print("Usage: python gallery_manager.py remove <gallery> <filename>")
            return
        gallery = sys.argv[2]
        filename = sys.argv[3]
        manager.remove_image(gallery, filename)

if __name__ == "__main__":
    main() 