// Gallery Configuration for Wubbleton
const GALLERY_CONFIG = {
    // Supabase configuration
    USE_SUPABASE: false,
    SUPABASE_URL: 'https://ozxhahlykxeeiuvmzrbb.supabase.co',
    BUCKET_NAME: 'gallery-images',
    
    // Fallback to local server if needed
    IMAGE_SERVER_URL: 'http://localhost:8003/web/galleries',
    
    // Gallery names
    galleries: {
        crisis: 'The Crisis',
        zombies: 'Modern Zombies', 
        rapture: 'The Rapture',
        wubbleton: 'Daily Visions'
    }
};

// Helper function to get image URL
function getImageUrl(gallery, type, filename) {
    if (GALLERY_CONFIG.USE_SUPABASE) {
        const path = `${gallery}/${type}/${filename}`;
        return `${GALLERY_CONFIG.SUPABASE_URL}/storage/v1/object/public/${GALLERY_CONFIG.BUCKET_NAME}/${path}`;
    } else {
        return `${GALLERY_CONFIG.IMAGE_SERVER_URL}/${gallery}/${type}/${filename}`;
    }
} 