#!/usr/bin/env node
/**
 * Supabase Storage Setup for Wubbleton Galleries
 * 
 * This script helps you:
 * 1. Set up Supabase storage buckets
 * 2. Upload all gallery images
 * 3. Manage images programmatically
 */

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs').promises;
const path = require('path');
const glob = require('glob-promise');

// You'll get these from https://app.supabase.com/project/YOUR_PROJECT/settings/api
const SUPABASE_URL = process.env.SUPABASE_URL || 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'YOUR_ANON_KEY';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Create the storage bucket if it doesn't exist
 */
async function setupBucket() {
    const bucketName = 'wubbleton-galleries';
    
    // Check if bucket exists
    const { data: buckets } = await supabase.storage.listBuckets();
    const exists = buckets?.some(b => b.name === bucketName);
    
    if (!exists) {
        console.log('📦 Creating storage bucket...');
        const { error } = await supabase.storage.createBucket(bucketName, {
            public: true,
            fileSizeLimit: 10485760, // 10MB per file
        });
        
        if (error) {
            console.error('❌ Error creating bucket:', error);
            return false;
        }
        console.log('✅ Bucket created successfully!');
    } else {
        console.log('✅ Bucket already exists');
    }
    
    return true;
}

/**
 * Upload a single image to Supabase
 */
async function uploadImage(localPath, remotePath) {
    try {
        const fileBuffer = await fs.readFile(localPath);
        const { data, error } = await supabase.storage
            .from('wubbleton-galleries')
            .upload(remotePath, fileBuffer, {
                contentType: 'image/jpeg',
                upsert: true
            });
            
        if (error) throw error;
        return data;
    } catch (error) {
        console.error(`❌ Failed to upload ${localPath}:`, error.message);
        return null;
    }
}

/**
 * Upload all gallery images
 */
async function uploadAllGalleries() {
    console.log('🎨 Starting gallery upload...\n');
    
    const galleries = ['crisis', 'zombies', 'rapture'];
    const types = ['thumbs', 'full'];
    
    for (const gallery of galleries) {
        console.log(`\n📁 Uploading ${gallery} gallery...`);
        
        for (const type of types) {
            const pattern = `web/galleries/${gallery}/${type}/*`;
            const files = await glob(pattern);
            
            console.log(`  📸 Found ${files.length} ${type} images`);
            
            for (const file of files) {
                const filename = path.basename(file);
                const remotePath = `${gallery}/${type}/${filename}`;
                
                process.stdout.write(`  ⬆️  ${filename}... `);
                const result = await uploadImage(file, remotePath);
                
                if (result) {
                    process.stdout.write('✅\n');
                } else {
                    process.stdout.write('❌\n');
                }
            }
        }
    }
    
    console.log('\n🎉 Upload complete!');
}

/**
 * Get public URL for an image
 */
function getPublicUrl(path) {
    const { data } = supabase.storage
        .from('wubbleton-galleries')
        .getPublicUrl(path);
    
    return data.publicUrl;
}

/**
 * List all images in a gallery
 */
async function listGalleryImages(gallery, type = 'thumbs') {
    const { data, error } = await supabase.storage
        .from('wubbleton-galleries')
        .list(`${gallery}/${type}`, {
            limit: 100,
            offset: 0,
        });
    
    if (error) {
        console.error('❌ Error listing images:', error);
        return [];
    }
    
    return data.map(file => ({
        name: file.name,
        url: getPublicUrl(`${gallery}/${type}/${file.name}`),
        size: file.metadata?.size || 0,
        updated: file.updated_at
    }));
}

/**
 * Add a new image to a gallery
 */
async function addImageToGallery(gallery, imagePath, type = 'full') {
    const filename = path.basename(imagePath);
    const remotePath = `${gallery}/${type}/${filename}`;
    
    console.log(`📤 Adding ${filename} to ${gallery} gallery...`);
    const result = await uploadImage(imagePath, remotePath);
    
    if (result) {
        console.log('✅ Image added successfully!');
        console.log('🔗 Public URL:', getPublicUrl(remotePath));
        return true;
    }
    
    return false;
}

/**
 * Main setup function
 */
async function main() {
    if (SUPABASE_URL === 'YOUR_SUPABASE_URL') {
        console.log('⚠️  Please set your Supabase credentials first!');
        console.log('\n1. Go to https://app.supabase.com and create a free project');
        console.log('2. Go to Settings → API');
        console.log('3. Copy your project URL and anon key');
        console.log('4. Set them as environment variables or update this file\n');
        return;
    }
    
    console.log('🚀 Wubbleton Gallery Uploader\n');
    
    // Setup bucket
    const bucketReady = await setupBucket();
    if (!bucketReady) return;
    
    // Check command line args
    const command = process.argv[2];
    
    switch (command) {
        case 'upload':
            await uploadAllGalleries();
            break;
            
        case 'list':
            const gallery = process.argv[3] || 'crisis';
            const images = await listGalleryImages(gallery);
            console.log(`\n📋 Images in ${gallery} gallery:`);
            images.forEach(img => {
                console.log(`  - ${img.name} (${(img.size / 1024).toFixed(1)} KB)`);
            });
            break;
            
        case 'add':
            const targetGallery = process.argv[3];
            const imagePath = process.argv[4];
            if (targetGallery && imagePath) {
                await addImageToGallery(targetGallery, imagePath);
            } else {
                console.log('Usage: node setup_supabase.js add <gallery> <image-path>');
            }
            break;
            
        default:
            console.log('Available commands:');
            console.log('  node setup_supabase.js upload     - Upload all galleries');
            console.log('  node setup_supabase.js list [gallery] - List images');
            console.log('  node setup_supabase.js add <gallery> <image> - Add new image');
    }
    
    // Show the CDN URL to use
    if (bucketReady) {
        console.log('\n📌 Update gallery_config.js to:');
        console.log(`IMAGE_SERVER_URL: '${SUPABASE_URL}/storage/v1/object/public/wubbleton-galleries'`);
    }
}

// Export functions for use in other scripts
module.exports = {
    uploadImage,
    listGalleryImages,
    addImageToGallery,
    getPublicUrl
};

// Run if called directly
if (require.main === module) {
    main().catch(console.error);
} 