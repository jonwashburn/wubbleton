# Wubbleton Server Setup 🌈

## 🌟 NEW: Supabase Storage (Recommended)

Instead of running a local image server, you can now use Supabase Storage for free hosting:

### Quick Setup

1. **Create a Supabase account** (free)
   - Go to https://app.supabase.com
   - Create a new project
   - Go to Settings → API
   - Copy your project URL and anon key

2. **Set up credentials**
   Create a `.env` file:
   ```
   SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
   SUPABASE_ANON_KEY=YOUR_ANON_KEY_HERE
   ```

3. **Choose your method:**

   **Python** (if you prefer Python):
   ```bash
   pip install -r requirements.txt
   python gallery_manager.py upload
   ```

   **Node.js** (if you prefer JavaScript):
   ```bash
   npm install
   npm run upload-galleries
   ```

4. **Update gallery_config.js**
   The script will show you the exact URL to use

### Gallery Management Commands

**Python:**
```bash
# List images in a gallery
python gallery_manager.py list crisis

# Add a new image
python gallery_manager.py add crisis /path/to/new-image.jpg

# Remove an image
python gallery_manager.py remove crisis old-image.jpg
```

**Node.js:**
```bash
# List images
node setup_supabase.js list crisis

# Add a new image
node setup_supabase.js add crisis /path/to/new-image.jpg
```

---

## Local Development (Alternative)

If you prefer to run servers locally:

### 1. Main Website Server (Port 8003)
```bash
python3 -m http.server 8003
```
- Serves the main website
- Access at: http://localhost:8003

### 2. Gallery Image Server (Port 8004)
```bash
python3 image_server.py
```
- Serves the gallery images with CORS support
- Access at: http://localhost:8004
- Images are located in `web/galleries/`

## Quick Start

Open two terminal windows:

**Terminal 1:**
```bash
cd /Users/jonathanwashburn/Desktop/Art/Wubbleton
python3 -m http.server 8003
```

**Terminal 2:**
```bash
cd /Users/jonathanwashburn/Desktop/Art/Wubbleton
python3 image_server.py
```

Then visit: http://localhost:8003

## Gallery Structure

```
web/galleries/
├── crisis/
│   ├── thumbs/    # Thumbnail images
│   └── full/      # Full resolution images
├── zombies/
│   ├── thumbs/
│   └── full/
└── rapture/
    ├── thumbs/
    └── full/
```

## Production Deployment

To deploy to production:

1. Upload gallery images to a CDN or cloud storage (e.g., AWS S3, Cloudflare)
2. Update `gallery_config.js`:
   ```javascript
   IMAGE_SERVER_URL: 'https://cdn.wubbleton.com/galleries'
   ```
3. Deploy the main website to your hosting service

## Troubleshooting

- **Images not loading**: Make sure the image server is running on port 8004
- **CORS errors**: The image server includes CORS headers, but check browser console
- **Large file issues**: Gallery images total ~133MB and are not stored in Git

## Notes

- Gallery images are excluded from Git due to size (see `.gitignore`)
- The image server supports directory listing for dynamic gallery loading
- All gallery pages use `gallery_config.js` for centralized URL management 