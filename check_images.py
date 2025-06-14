import requests
import os
import glob

# Test Supabase URLs
base_url = 'https://ozxhahlykxeeiuvmzrbb.supabase.co/storage/v1/object/public/gallery-images'

# Test images that should exist
test_images = [
    'crisis/full/1-Crisis_1.jpg',
    'zombies/full/1-Zombies_1.jpg', 
    'rapture/full/1-Rapture_1.jpg',
    'wubbleton/full/wubbleton_50.jpg',
    'wubbleton/full/wubbleton_100.jpg',
    'wubbleton/full/wubbleton_150.jpg',
    'wubbleton/full/wubbleton_200.jpg',
    'crisis/full/10-Crisis_1.jpg',
    'crisis/full/20-Crisis_1.jpg',
    'crisis/full/30-Crisis_1.jpg',
    'crisis/full/40-Crisis_1.jpg',
    'crisis/full/50-Crisis_1.jpg',
    'crisis/full/60-Crisis_1.jpg'
]

print('Testing Supabase image URLs:')
print('-' * 50)

working = 0
broken = 0

for img in test_images:
    url = f'{base_url}/{img}'
    try:
        response = requests.head(url, timeout=5)
        if response.status_code == 200:
            print(f'✓ {img}')
            working += 1
        else:
            print(f'✗ {img} - Status: {response.status_code}')
            broken += 1
    except Exception as e:
        print(f'✗ {img} - Error: {str(e)}')
        broken += 1

print(f'\nSummary: {working} working, {broken} broken')

# Also check what's actually in the local directories
print('\n\nChecking local image directories:')
print('-' * 50)

galleries = ['crisis', 'zombies', 'rapture', 'wubbleton']
for gallery in galleries:
    full_path = f'web/galleries/{gallery}/full/'
    if os.path.exists(full_path):
        images = glob.glob(f'{full_path}*.jpg')
        print(f'{gallery}: {len(images)} images found locally')
        if len(images) > 0:
            print(f'  First few: {[os.path.basename(img) for img in images[:3]]}')
    else:
        print(f'{gallery}: Directory not found locally') 