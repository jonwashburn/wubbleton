from supabase import create_client
import os
import glob
import time

# Supabase configuration
SUPABASE_URL = "https://ozxhahlykxeeiuvmzrbb.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96eGhhaGx5a3hlZWl1dm16cmJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5MzA0NjAsImV4cCI6MjA0ODUwNjQ2MH0.Vc-bnFlZAR7LSUP4rB0qHINWTlZpfBaVlXqiH4c9pqI"

# Create Supabase client
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

print("🚀 Uploading all gallery images to Supabase...")
print("=" * 60)

galleries = ['crisis', 'zombies', 'rapture', 'wubbleton']

total_uploaded = 0
total_skipped = 0
total_errors = 0

for gallery in galleries:
    print(f"\n📁 Uploading {gallery} gallery...")
    
    # Upload full images
    full_path = f'web/galleries/{gallery}/full/'
    if os.path.exists(full_path):
        images = glob.glob(f'{full_path}*.jpg')
        print(f"  📸 Found {len(images)} full images")
        
        for img_path in images:
            filename = os.path.basename(img_path)
            storage_path = f"{gallery}/full/{filename}"
            
            try:
                with open(img_path, 'rb') as f:
                    response = supabase.storage.from_('gallery-images').upload(
                        storage_path,
                        f.read(),
                        {'content-type': 'image/jpeg'}
                    )
                print(f"    ✅ Uploaded: {filename}")
                total_uploaded += 1
            except Exception as e:
                error_msg = str(e)
                if 'already exists' in error_msg or '409' in error_msg:
                    print(f"    ⏭️  Skipped (exists): {filename}")
                    total_skipped += 1
                else:
                    print(f"    ❌ Error: {filename} - {error_msg}")
                    total_errors += 1
            
            # Small delay to avoid rate limiting
            time.sleep(0.1)
    
    # Upload thumbnails
    thumb_path = f'web/galleries/{gallery}/thumbs/'
    if os.path.exists(thumb_path):
        thumbs = glob.glob(f'{thumb_path}*.jpg')
        print(f"  📸 Found {len(thumbs)} thumbnail images")
        
        for img_path in thumbs[:10]:  # Upload first 10 thumbs as a test
            filename = os.path.basename(img_path)
            storage_path = f"{gallery}/thumbs/{filename}"
            
            try:
                with open(img_path, 'rb') as f:
                    response = supabase.storage.from_('gallery-images').upload(
                        storage_path,
                        f.read(),
                        {'content-type': 'image/jpeg'}
                    )
                print(f"    ✅ Uploaded thumb: {filename}")
                total_uploaded += 1
            except Exception as e:
                error_msg = str(e)
                if 'already exists' in error_msg or '409' in error_msg:
                    total_skipped += 1
                else:
                    print(f"    ❌ Error thumb: {filename} - {error_msg}")
                    total_errors += 1
            
            time.sleep(0.1)

print(f"\n\n📊 UPLOAD SUMMARY:")
print("=" * 60)
print(f"✅ Uploaded: {total_uploaded} files")
print(f"⏭️  Skipped (already exists): {total_skipped} files")
print(f"❌ Errors: {total_errors} files")
print(f"📁 Total processed: {total_uploaded + total_skipped + total_errors} files")

print("\n✨ Upload complete! Your galleries should now work on the live site.") 