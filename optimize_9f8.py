from PIL import Image
import os

# Optimize the 9f8 image
input_path = 'images/9f8988f2-a0bf-11ef-8ddc-0242c0a80010.jpeg'
output_path = 'images/9f8988f2-optimized.jpg'

with Image.open(input_path) as img:
    print(f"Original size: {img.width}x{img.height}")
    
    # Resize to reasonable size for web
    if img.width > 1920:
        ratio = 1920 / img.width
        new_height = int(img.height * ratio)
        img = img.resize((1920, new_height), Image.Resampling.LANCZOS)
        print(f"Resized to: {img.width}x{img.height}")
    
    # Save optimized
    img.save(output_path, 'JPEG', quality=85, optimize=True)
    
    original_size = os.path.getsize(input_path) / (1024 * 1024)
    new_size = os.path.getsize(output_path) / (1024 * 1024)
    print(f'✅ Optimized 9f8 image: {original_size:.1f}MB -> {new_size:.1f}MB') 