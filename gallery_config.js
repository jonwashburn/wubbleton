// Gallery Image Server Configuration
// Change IMAGE_SERVER_URL when deploying to production

const GALLERY_CONFIG = {
    // For local development with image_server.py
    IMAGE_SERVER_URL: 'http://localhost:8004',
    
    // For production (update this when you have a CDN or cloud storage)
    // IMAGE_SERVER_URL: 'https://cdn.wubbleton.com/galleries',
    
    // Gallery paths
    galleries: {
        crisis: {
            name: 'The Crisis',
            path: 'crisis',
            thumbs: 'thumbs',
            full: 'full'
        },
        zombies: {
            name: 'Modern Zombies', 
            path: 'zombies',
            thumbs: 'thumbs',
            full: 'full'
        },
        rapture: {
            name: 'The Rapture',
            path: 'rapture',
            thumbs: 'thumbs',
            full: 'full'
        }
    }
};

// Helper function to get image URL
function getImageUrl(gallery, type, filename) {
    return `${GALLERY_CONFIG.IMAGE_SERVER_URL}/${gallery}/${type}/${filename}`;
} 