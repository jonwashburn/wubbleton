// Gallery Configuration for Wubbleton
const GALLERY_CONFIG = {
    // Local serving configuration
    USE_SUPABASE: false,
    IMAGE_SERVER_URL: '',
    
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
    // Local hosting: the HTTP server is started with doc-root = web/
    // Therefore URLs should begin with /galleries/...
    if (!GALLERY_CONFIG.USE_SUPABASE) {
        return `/galleries/${gallery}/${type}/${filename}`;
    }
    
    // Remote (Supabase) mode
    return `${GALLERY_CONFIG.IMAGE_SERVER_URL}/${gallery}/${type}/${filename}`;
} 