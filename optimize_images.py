#!/usr/bin/env python3
import os
from PIL import Image
import shutil

def optimize_image(input_path, output_path, max_width=1920, quality=85):
    """Convert and optimize an image for web use"""
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if necessary (for PNG with transparency)
            if img.mode in ('RGBA', 'LA', 'P'):
                # Create white background
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Resize if too wide
            if img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
            # Save as JPEG
            img.save(output_path, 'JPEG', quality=quality, optimize=True)
            print(f"✅ Optimized: {os.path.basename(input_path)} -> {os.path.basename(output_path)}")
            
            # Print file sizes
            original_size = os.path.getsize(input_path) / (1024 * 1024)  # MB
            new_size = os.path.getsize(output_path) / (1024 * 1024)  # MB
            print(f"   Size: {original_size:.1f}MB -> {new_size:.1f}MB ({new_size/original_size*100:.1f}%)")
            
    except Exception as e:
        print(f"❌ Error processing {input_path}: {e}")

def process_directory(input_dir, output_dir, max_images=20):
    """Process all images in a directory"""
    if not os.path.exists(input_dir):
        print(f"❌ Directory not found: {input_dir}")
        return []
    
    os.makedirs(output_dir, exist_ok=True)
    
    # Get all image files
    image_files = []
    for ext in ['.jpg', '.jpeg', '.png', '.webp']:
        image_files.extend([f for f in os.listdir(input_dir) if f.lower().endswith(ext)])
    
    # Sort and limit
    image_files.sort()
    image_files = image_files[:max_images]
    
    processed = []
    for filename in image_files:
        input_path = os.path.join(input_dir, filename)
        # Convert to .jpg
        base_name = os.path.splitext(filename)[0]
        output_filename = f"{base_name}.jpg"
        output_path = os.path.join(output_dir, output_filename)
        
        optimize_image(input_path, output_path, max_width=800, quality=80)
        processed.append(output_filename)
    
    return processed

# Main processing
print("🌈 Optimizing images for Wubbleton...")

# 1. Convert the specific PNG files to JPG
png_files = [
    "images/743c90cc-50c9-11ef-a528-0242ac16000e.png",
    "images/255f13b8-7c56-11ef-8198-0242c0a8500c.png", 
    "images/787ac2cc-7ae9-11ef-8198-0242c0a8500c.png",
    "images/cfe6a040-509f-11ef-a528-0242ac16000e.png",
    "images/d7652f3c-75fa-11ef-944a-0242c0a8500d.png"
]

print("\n📸 Converting PNG files to optimized JPG...")
for png_file in png_files:
    if os.path.exists(png_file):
        base_name = os.path.splitext(os.path.basename(png_file))[0]
        jpg_file = f"images/{base_name}.jpg"
        optimize_image(png_file, jpg_file, max_width=1920, quality=85)

# 2. Process collection directories
collections = [
    ("Modern Zombies", "images/gallery/zombies"),
    ("The Crisis", "images/gallery/crisis"), 
    ("The Rapture", "images/gallery/rapture")
]

print("\n🎨 Processing collection galleries...")
for collection_name, output_dir in collections:
    print(f"\n📁 Processing {collection_name}...")
    processed = process_directory(collection_name, output_dir, max_images=20)
    print(f"   Processed {len(processed)} images")

print("\n✨ Image optimization complete!") 