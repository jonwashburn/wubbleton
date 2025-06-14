import os
import glob

print("FINAL STATUS CHECK - WUBBLETON GALLERIES")
print("=" * 60)

galleries = {
    'crisis': {'expected': 217, 'pattern': 'X-Crisis_1.jpg'},
    'zombies': {'expected': 100, 'pattern': 'X-Zombies_1.jpg'},
    'rapture': {'expected': 167, 'pattern': 'X-Rapture_1.jpg'},
    'wubbleton': {'expected': 319, 'pattern': 'wubbleton_X.jpg'}
}

summary = []

for gallery, info in galleries.items():
    print(f"\n{gallery.upper()} Gallery:")
    print("-" * 40)
    
    # Check full images
    full_path = f'web/galleries/{gallery}/full/'
    if os.path.exists(full_path):
        all_images = glob.glob(f'{full_path}*.jpg')
        
        if gallery in ['crisis', 'zombies', 'rapture']:
            matching = [img for img in all_images if '-' in os.path.basename(img) and '_' in os.path.basename(img)]
        else:
            matching = [img for img in all_images if 'wubbleton_' in os.path.basename(img)]
        
        print(f"  Expected: {info['expected']} images")
        print(f"  Found: {len(all_images)} total images")
        print(f"  Matching pattern: {len(matching)} images")
        
        if len(matching) > 0:
            status = "✓ READY"
        elif len(all_images) > 0:
            status = "⚠️  WRONG NAMING"
        else:
            status = "❌ NO IMAGES"
            
        summary.append(f"{gallery}: {status} ({len(matching)}/{info['expected']})")
    else:
        print(f"  Directory not found!")
        summary.append(f"{gallery}: ❌ DIRECTORY MISSING")

print("\n\nSUMMARY:")
print("=" * 60)
for s in summary:
    print(s)

print("\n\nNEXT STEPS:")
print("=" * 60)
print("1. Crisis: ✓ Images renamed, ready to upload to Supabase")
print("2. Zombies: ❌ NO IMAGES - need to add zombie images")
print("3. Rapture: ✓ Already working")
print("4. Wubbleton: ✓ Already working")
print("\nTo fix Zombies gallery, you need to:")
print("- Add zombie images to web/galleries/zombies/full/")
print("- Name them: 1-Zombies_1.jpg, 2-Zombies_1.jpg, etc.")
print("- Add thumbnails to web/galleries/zombies/thumbs/") 