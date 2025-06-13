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
    // Since we're serving locally from the same server, use relative paths
    return `${type}/${filename}`;
} 