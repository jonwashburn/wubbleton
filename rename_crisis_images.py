import os
import shutil

# Rename Crisis images to match expected pattern
crisis_full_path = 'web/galleries/crisis/full/'
crisis_thumb_path = 'web/galleries/crisis/thumbs/'

print("Renaming Crisis gallery images...")
print("=" * 60)

# Process full images
if os.path.exists(crisis_full_path):
    files = [f for f in os.listdir(crisis_full_path) if f.endswith('.jpg')]
    
    # Sort files to handle numeric names properly
    numeric_files = []
    other_files = []
    
    for f in files:
        name_without_ext = f[:-4]
        if name_without_ext.isdigit():
            numeric_files.append((int(name_without_ext), f))
        else:
            other_files.append(f)
    
    # Sort numeric files
    numeric_files.sort(key=lambda x: x[0])
    
    print(f"Found {len(numeric_files)} numeric files and {len(other_files)} other files")
    
    # Rename numeric files
    for num, old_name in numeric_files:
        new_name = f"{num}-Crisis_1.jpg"
        old_path = os.path.join(crisis_full_path, old_name)
        new_path = os.path.join(crisis_full_path, new_name)
        
        if not os.path.exists(new_path):
            os.rename(old_path, new_path)
            print(f"✓ Renamed {old_name} -> {new_name}")
        else:
            print(f"⚠️  {new_name} already exists, skipping {old_name}")

# Process thumb images
if os.path.exists(crisis_thumb_path):
    files = [f for f in os.listdir(crisis_thumb_path) if f.endswith('.jpg')]
    
    # Sort files to handle numeric names properly
    numeric_files = []
    other_files = []
    
    for f in files:
        name_without_ext = f[:-4]
        if name_without_ext.isdigit():
            numeric_files.append((int(name_without_ext), f))
        else:
            other_files.append(f)
    
    # Sort numeric files
    numeric_files.sort(key=lambda x: x[0])
    
    print(f"\nThumbs: Found {len(numeric_files)} numeric files")
    
    # Rename numeric files
    for num, old_name in numeric_files:
        new_name = f"{num}-Crisis_1.jpg"
        old_path = os.path.join(crisis_thumb_path, old_name)
        new_path = os.path.join(crisis_thumb_path, new_name)
        
        if not os.path.exists(new_path):
            os.rename(old_path, new_path)
            print(f"✓ Renamed thumb {old_name} -> {new_name}")

print("\nDone! Crisis images renamed to match expected pattern.") 