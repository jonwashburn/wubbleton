import os
import glob

print("Checking local image structure...")
print("=" * 60)

galleries = ['crisis', 'zombies', 'rapture', 'wubbleton']

all_issues = []

for gallery in galleries:
    print(f"\n{gallery.upper()} Gallery:")
    print("-" * 40)
    
    # Check full images
    full_path = f'web/galleries/{gallery}/full/'
    if os.path.exists(full_path):
        images = glob.glob(f'{full_path}*.jpg')
        print(f"  Full images: {len(images)} files found")
        
        # Check naming pattern
        sample_names = [os.path.basename(img) for img in images[:5]]
        print(f"  Sample names: {sample_names}")
        
        # Check for expected pattern
        if gallery == 'crisis':
            expected_pattern = "X-Crisis_1.jpg"
        elif gallery == 'zombies':
            expected_pattern = "X-Zombies_1.jpg"
        elif gallery == 'rapture':
            expected_pattern = "X-Rapture_1.jpg"
        else:
            expected_pattern = "wubbleton_X.jpg"
            
        # Check if any match the expected pattern
        matching = [img for img in images if '-' in os.path.basename(img) and '_' in os.path.basename(img)]
        print(f"  Files matching expected pattern: {len(matching)}")
        
        if len(matching) == 0:
            all_issues.append(f"{gallery}: No files match expected pattern {expected_pattern}")
    else:
        print(f"  Directory not found: {full_path}")
        all_issues.append(f"{gallery}: Directory not found")
    
    # Check thumbs
    thumb_path = f'web/galleries/{gallery}/thumbs/'
    if os.path.exists(thumb_path):
        thumbs = glob.glob(f'{thumb_path}*.jpg')
        print(f"  Thumb images: {len(thumbs)} files found")
    else:
        print(f"  Thumbs directory not found")

print("\n\nSUMMARY OF ISSUES:")
print("=" * 60)
for issue in all_issues:
    print(f"❌ {issue}")

print("\n\nRECOMMENDATION:")
print("=" * 60)
print("The local files don't match the naming pattern expected by the galleries.")
print("We need to either:")
print("1. Rename all local files to match the expected pattern")
print("2. Update the gallery HTML files to use the actual filenames")
print("3. Re-download/reorganize all images with correct naming")
print("\nThe galleries expect:")
print("  - Crisis: 1-Crisis_1.jpg, 2-Crisis_1.jpg, etc.")
print("  - Zombies: 1-Zombies_1.jpg, 2-Zombies_1.jpg, etc.")
print("  - Rapture: 1-Rapture_1.jpg, 2-Rapture_1.jpg, etc.")
print("  - Wubbleton: wubbleton_1.jpg, wubbleton_2.jpg, etc.") 