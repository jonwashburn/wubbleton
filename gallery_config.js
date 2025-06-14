// Gallery Configuration for Wubbleton
const GALLERY_CONFIG = {
    // Local serving configuration
    USE_SUPABASE: true,
    IMAGE_SERVER_URL: 'https://ozxhahlykxeeiuvmzrbb.supabase.co/storage/v1/object/public/wubbleton-galleries',
    
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
    // Local hosting: the HTTP server is started from project root
    // Therefore URLs need to include /web/galleries/...
    if (!GALLERY_CONFIG.USE_SUPABASE) {
        return `/web/galleries/${gallery}/${type}/${filename}`;
    }
    
    // Remote (Supabase) mode
    return `${GALLERY_CONFIG.IMAGE_SERVER_URL}/${gallery}/${type}/${filename}`;
} 