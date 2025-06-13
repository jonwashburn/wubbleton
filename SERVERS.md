# Wubbleton Server Setup 🌈

## Running the Servers

The Wubbleton website requires two servers:

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