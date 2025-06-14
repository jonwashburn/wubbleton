from supabase import create_client
import os

# Supabase configuration
SUPABASE_URL = "https://ozxhahlykxeeiuvmzrbb.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96eGhhaGx5a3hlZWl1dm16cmJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5MzA0NjAsImV4cCI6MjA0ODUwNjQ2MH0.Vc-bnFlZAR7LSUP4rB0qHINWTlZpfBaVlXqiH4c9pqI"

# Create Supabase client
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

print("Listing all files in Supabase gallery-images bucket...")
print("=" * 60)

galleries = ['crisis', 'zombies', 'rapture', 'wubbleton']

for gallery in galleries:
    print(f"\n{gallery.upper()} Gallery:")
    print("-" * 40)
    
    # List files in full directory
    try:
        full_files = supabase.storage.from_('gallery-images').list(f'{gallery}/full')
        print(f"  Full images: {len(full_files)} files")
        if full_files:
            print(f"    First 5: {[f['name'] for f in full_files[:5]]}")
    except Exception as e:
        print(f"  Error listing full images: {e}")
    
    # List files in thumbs directory
    try:
        thumb_files = supabase.storage.from_('gallery-images').list(f'{gallery}/thumbs')
        print(f"  Thumb images: {len(thumb_files)} files")
        if thumb_files:
            print(f"    First 5: {[f['name'] for f in thumb_files[:5]]}")
    except Exception as e:
        print(f"  Error listing thumb images: {e}") 