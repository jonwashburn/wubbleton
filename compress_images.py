#!/usr/bin/env python3
"""
Compress images for web use
Requires: pip install Pillow
"""

from PIL import Image
import os
import sys

def compress_image(input_path, output_path, max_width=1200, quality=85):
    """Compress and resize an image for web use"""
    try:
        img = Image.open(input_path)
        
        # Convert RGBA to RGB if necessary
        if img.mode == 'RGBA':
            rgb_img = Image.new('RGB', img.size, (255, 255, 255))
            rgb_img.paste(img, mask=img.split()[3])
            img = rgb_img
        
        # Calculate new size maintaining aspect ratio
        width, height = img.size
        if width > max_width:
            ratio = max_width / width
            new_size = (int(width * ratio), int(height * ratio))
            img = img.resize(new_size, Image.Resampling.LANCZOS)
        
        # Save compressed
        img.save(output_path, 'JPEG', quality=quality, optimize=True)
        
        # Show size reduction
        original_size = os.path.getsize(input_path) / 1024 / 1024  # MB
        new_size = os.path.getsize(output_path) / 1024 / 1024  # MB
        print(f"✅ {os.path.basename(input_path)}: {original_size:.1f}MB → {new_size:.1f}MB")
        
    except Exception as e:
        print(f"❌ Error processing {input_path}: {e}")

def main():
    # Create web-images directory
    os.makedirs('web-images', exist_ok=True)
    os.makedirs('web-images/crisis', exist_ok=True)
    os.makedirs('web-images/zombies', exist_ok=True)
    os.makedirs('web-images/rapture', exist_ok=True)
    
    # Compress select images from each collection
    images_to_compress = [
        ('The Crisis/4.png', 'web-images/crisis/4.jpg'),
        ('The Crisis/21.png', 'web-images/crisis/21.jpg'),
        ('The Crisis/64d.png', 'web-images/crisis/64d.jpg'),
        ('The Crisis/100d.png', 'web-images/crisis/100d.jpg'),
        ('The Crisis/5.png', 'web-images/crisis/5.jpg'),
        ('The Crisis/7.png', 'web-images/crisis/7.jpg'),
        ('The Crisis/15.png', 'web-images/crisis/15.jpg'),
        ('The Crisis/18.png', 'web-images/crisis/18.jpg'),
        ('The Crisis/28.png', 'web-images/crisis/28.jpg'),
        
        ('Modern Zombies/1.png', 'web-images/zombies/1.jpg'),
        ('Modern Zombies/9.png', 'web-images/zombies/9.jpg'),
        ('Modern Zombies/144.png', 'web-images/zombies/144.jpg'),
        ('Modern Zombies/8.jpeg', 'web-images/zombies/8.jpg'),
        ('Modern Zombies/2.png', 'web-images/zombies/2.jpg'),
        ('Modern Zombies/3.png', 'web-images/zombies/3.jpg'),
        ('Modern Zombies/200.png', 'web-images/zombies/200.jpg'),
        ('Modern Zombies/193.png', 'web-images/zombies/193.jpg'),
        ('Modern Zombies/194.png', 'web-images/zombies/194.jpg'),
        
        ('The Rapture/9-Rapture_1.jpg', 'web-images/rapture/9.jpg'),
        ('The Rapture/33-Rapture_1.jpg', 'web-images/rapture/33.jpg'),
        ('The Rapture/144-Rapture_1.jpg', 'web-images/rapture/144.jpg'),
        ('The Rapture/89-Rapture_1.jpg', 'web-images/rapture/89.jpg'),
        ('The Rapture/4-Rapture_1.jpg', 'web-images/rapture/4.jpg'),
        ('The Rapture/5-Rapture_1.jpg', 'web-images/rapture/5.jpg'),
        ('The Rapture/8-Rapture_1.jpg', 'web-images/rapture/8.jpg'),
        ('The Rapture/21-Rapture_1.jpg', 'web-images/rapture/21.jpg'),
        ('The Rapture/42-Rapture_1.jpg', 'web-images/rapture/42.jpg'),
    ]
    
    print("🌈 Compressing images for web use...")
    print("=" * 50)
    
    for input_path, output_path in images_to_compress:
        if os.path.exists(input_path):
            compress_image(input_path, output_path)
    
    print("=" * 50)
    print("✨ Done! Compressed images are in web-images/")

if __name__ == "__main__":
    main() 