// Supabase credentials
const SUPABASE_URL = 'https://ozxhahlykxeeiuvmzrbb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96eGhhaGx5a3hlZWl1dm16cmJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3OTE1NDgsImV4cCI6MjA2NTM2NzU0OH0.SP-nxe_faZurceOYkXTTZlMDHw3bDFkLQxgMbQKTxZU';

// Gallery configurations
const galleries = {
    crisis: {
        name: 'The Crisis',
        bucketPath: 'crisis'
    },
    zombies: {
        name: 'Modern Zombies',
        bucketPath: 'zombies'
    },
    rapture: {
        name: 'The Rapture',
        bucketPath: 'rapture'
    },
    wubbleton: {
        name: 'Daily Visions',
        bucketPath: 'wubbleton'
    }
};

// Initialize Supabase client
let supabase = null;
if (typeof window !== 'undefined' && window.supabase) {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Function to get image URL from Supabase
function getSupabaseImageUrl(bucketPath, filename) {
    if (!supabase) return `/galleries/${bucketPath}/${filename}`;
    const fullPath = `${bucketPath}/${filename}`;
    return `${SUPABASE_URL}/storage/v1/object/public/gallery-images/${fullPath}`;
}

// Function to get thumbnail URL
function getSupabaseThumbnailUrl(bucketPath, filename) {
    const fullPath = `${bucketPath}/thumbs/${filename}`;
    return `${SUPABASE_URL}/storage/v1/object/public/gallery-images/${fullPath}`;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { galleries, getSupabaseImageUrl, getSupabaseThumbnailUrl };
} 