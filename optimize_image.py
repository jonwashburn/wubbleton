from PIL import Image
import os

# Optimize the image
input_path = 'images/2312476a-ad66-11ef-aae9-0242ac13000e.jpeg'
output_path = 'images/2312476a-ad66-11ef-aae9-0242ac13000e-temp.jpeg'

with Image.open(input_path) as img:
    print(f"Original size: {img.width}x{img.height}")
    original_file_size = os.path.getsize(input_path) / (1024 * 1024)
    print(f"Original file size: {original_file_size:.1f}MB")
    
    # Resize to reasonable size for web
    max_width = 1920
    if img.width > max_width:
        ratio = max_width / img.width
        new_height = int(img.height * ratio)
        img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
        print(f"Resized to: {img.width}x{img.height}")
    
    # Save optimized with good quality
    img.save(output_path, 'JPEG', quality=85, optimize=True)
    
    new_file_size = os.path.getsize(output_path) / (1024 * 1024)
    print(f"New file size: {new_file_size:.1f}MB")
    print(f"Size reduction: {(1 - new_file_size/original_file_size) * 100:.1f}%")

# Replace the original with the optimized version
os.replace(output_path, input_path)
print("✅ Image optimized successfully!") 