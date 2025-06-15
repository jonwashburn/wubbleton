#!/usr/bin/env python3
"""
Upload gallery images to Supabase Storage
Run this once to populate your Supabase bucket with all gallery images.
"""

import os
import requests
import json
from pathlib import Path

# Supabase configuration
SUPABASE_URL = "https://ozxhahlykxeeiuvmzrbb.supabase.co"
SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96eGhhaGx5a3hlZWl1dm16cmJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3OTE1NDgsImV4cCI6MjA2NTM2NzU0OH0.SP-nxe_faZurceOYkXTTZlMDHw3bDFkLQxgMbQKTxZU"
BUCKET_NAME = "gallery-images"

def upload_file(file_path, storage_path):
    """Upload a single file to Supabase storage"""
    url = f"{SUPABASE_URL}/storage/v1/object/{BUCKET_NAME}/{storage_path}"
    
    headers = {
        "Authorization": f"Bearer {SUPABASE_ANON_KEY}",
        "Content-Type": "image/jpeg"
    }
    
    try:
        with open(file_path, 'rb') as f:
            response = requests.post(url, headers=headers, data=f)
        
        if response.status_code in [200, 201]:
            print(f"✅ {storage_path}")
            return True
        else:
            print(f"❌ {storage_path} - {response.status_code}: {response.text}")
            return False
    except Exception as e:
        print(f"❌ {storage_path} - Error: {e}")
        return False

def main():
    """Upload all gallery images"""
    print("🚀 Uploading gallery images to Supabase...")
    
    galleries = ['crisis', 'zombies', 'rapture', 'wubbleton']
    # Include newly added gallery
    if Path('web/galleries/new-collection').exists():
        galleries.append('new-collection')
    types = ['thumbs', 'full']
    
    total_uploaded = 0
    total_failed = 0
    
    for gallery in galleries:
        print(f"\n📁 Uploading {gallery} gallery...")
        
        for img_type in types:
            local_dir = Path(f"web/galleries/{gallery}/{img_type}")
            
            if not local_dir.exists():
                print(f"⚠️  Directory not found: {local_dir}")
                continue
            
            jpg_files = list(local_dir.glob("*.jpg"))
            print(f"  📸 Found {len(jpg_files)} {img_type} images")
            
            for jpg_file in jpg_files:
                storage_path = f"{gallery}/{img_type}/{jpg_file.name}"
                
                if upload_file(jpg_file, storage_path):
                    total_uploaded += 1
                else:
                    total_failed += 1
    
    print(f"\n🎉 Upload complete!")
    print(f"✅ Uploaded: {total_uploaded}")
    print(f"❌ Failed: {total_failed}")
    
    if total_uploaded > 0:
        print(f"\n🌐 Images now available at:")
        print(f"   {SUPABASE_URL}/storage/v1/object/public/{BUCKET_NAME}/")

if __name__ == "__main__":
    main() 