import os
import shutil
import glob

print("ORGANIZING ALL GALLERY IMAGES")
print("=" * 60)

# Define source and destination paths
galleries = {
    'crisis': {
        'source': 'web-images/crisis',
        'dest_full': 'web/galleries/crisis/full',
        'dest_thumb': 'web/galleries/crisis/thumbs',
        'pattern': '{}-Crisis_1.jpg'
    },
    'zombies': {
        'source': 'web-images/zombies', 
        'dest_full': 'web/galleries/zombies/full',
        'dest_thumb': 'web/galleries/zombies/thumbs',
        'pattern': '{}-Zombies_1.jpg'
    },
    'rapture': {
        'source': 'web-images/rapture',
        'dest_full': 'web/galleries/rapture/full', 
        'dest_thumb': 'web/galleries/rapture/thumbs',
        'pattern': '{}-Rapture_1.jpg'
    }
}

for gallery_name, paths in galleries.items():
    print(f"\n{gallery_name.upper()} Gallery:")
    print("-" * 40)
    
    # Get source images
    source_images = glob.glob(f"{paths['source']}/*.jpg")
    print(f"Found {len(source_images)} source images")
    
    # Create destination directories if they don't exist
    os.makedirs(paths['dest_full'], exist_ok=True)
    os.makedirs(paths['dest_thumb'], exist_ok=True)
    
    # Sort images by numeric name if possible
    def get_number(filename):
        base = os.path.basename(filename)
        name = base.replace('.jpg', '')
        try:
            return int(name)
        except:
            return 999999
    
    source_images.sort(key=get_number)
    
    # Copy and rename images
    copied = 0
    for i, source_path in enumerate(source_images, 1):
        new_name = paths['pattern'].format(i)
        dest_path = os.path.join(paths['dest_full'], new_name)
        
        # Copy to full directory
        if not os.path.exists(dest_path):
            shutil.copy2(source_path, dest_path)
            print(f"  ✓ Copied {os.path.basename(source_path)} -> {new_name}")
            copied += 1
        
        # For thumbnails, just copy with same name (we'll resize later if needed)
        thumb_dest = os.path.join(paths['dest_thumb'], new_name)
        if not os.path.exists(thumb_dest):
            shutil.copy2(source_path, thumb_dest)
    
    print(f"  Copied {copied} new images")

# Check final counts
print("\n\nFINAL IMAGE COUNTS:")
print("=" * 60)
for gallery_name, paths in galleries.items():
    full_count = len(glob.glob(f"{paths['dest_full']}/*.jpg"))
    thumb_count = len(glob.glob(f"{paths['dest_thumb']}/*.jpg"))
    print(f"{gallery_name}: {full_count} full images, {thumb_count} thumbnails")

print("\n\nNOTE: Zombies gallery only has 29 images available.")
print("The gallery HTML expects 100, so you'll need to either:")
print("1. Update the HTML to only show 29 images")
print("2. Add more zombie images to reach 100") 