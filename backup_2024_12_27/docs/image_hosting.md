# Wubbleton Image Hosting & Delivery

_Last updated: 2025-06-13_

This document captures the decisions and workflow for serving images in the Wubbleton site. It should be kept in **sync** with code changes so future development remains painless.

---

## 1. Directory Layout (Local-only mode)

```
web/
  galleries/
    <gallery-name>/          # e.g. crisis, zombies, rapture, wubbleton
      thumbs/               # 300 px (longest side) JPGs for masonry preview
      full/                 # 1500 px (longest side) JPGs for light-box view
```

* All files are **JPEG** (lowercase `.jpg`) for maximum browser support and consistent MIME type.
* Filenames are unique within a gallery but need not be globally unique.

Example:
```
web/galleries/crisis/thumbs/114c.jpg
web/galleries/crisis/full/114c.jpg
```

## 2. `gallery_config.js`

Key excerpt:
```js
console.log('gallery_config.js loaded successfully');

const GALLERY_CONFIG = {
  USE_SUPABASE: false,          // switch between local & remote hosting
  IMAGE_SERVER_URL: '',         // populated when remote hosting is active
  galleries: {
    crisis:    'The Crisis',
    zombies:   'Modern Zombies',
    rapture:   'The Rapture',
    wubbleton: 'Daily Visions'
  }
};

function getImageUrl(gallery, type, filename) {
  // Local mode: use relative paths from each gallery page
  if (!GALLERY_CONFIG.USE_SUPABASE) {
    return `${type}/${filename}`;          // thumbs/114c.jpg
  }

  // Remote (Supabase) mode
  return `${GALLERY_CONFIG.IMAGE_SERVER_URL}/${gallery}/${type}/${filename}`;
}
```

* **Local mode** (default): pages reside in `web/galleries/<gallery>/index.html`; relative paths keep URLs short and avoid CORS issues when running via Python's `http.server`.
* **Remote mode**: toggled by setting `USE_SUPABASE = true` and filling `IMAGE_SERVER_URL` (e.g. `https://xyz.supabase.co/storage/v1/object/public/wubbleton`).

## 3. Page Generation Pattern

Each HTML gallery page includes:
```html
<script src="../../../gallery_config.js"></script>
```
which resolves to the repo-root copy of `gallery_config.js` no matter how deeply nested the page lives.

JS then populates the masonry grid:
```js
const thumbUrl = getImageUrl('crisis', 'thumbs', img);
const fullUrl  = getImageUrl('crisis', 'full',  img);
```
If `USE_SUPABASE` is switched later the pages require **no edits**.

## 4. Preparing Images (CLI workflow)

1. Place source PNG/JPG files in `images/<gallery-name>/raw/` (convention).
2. Run the helper script (previously `process_wubbleton_gallery.py`).  The script:
   * Converts PNG → JPG (quality 85).
   * Creates two resized versions via Pillow.
   * Writes them to `web/galleries/<gallery-name>/thumbs|full`.
   * Optionally uploads to Supabase when `--upload` flag supplied.
3. Commit results.  Static images live in the repo so GitHub Pages / servers can serve them directly.

_Note_: image helper scripts were deleted after initial import.  If regeneration is required, recover them from Git history or re-implement.

## 5. Running Locally

```
python3 -m http.server 8003 -d web
```
Browse `http://localhost:8003/`.

The server treats the `web/` directory as doc-root, so `/galleries/crisis/thumbs/114c.jpg` resolves.

## 6. Switching to Supabase (future-proof)

1. Create a public bucket `wubbleton` in Supabase Storage.
2. Mirror the directory structure:
   `wubbleton/<gallery>/<type>/<filename>.jpg`.
3. Copy images with `supabase storage cp ...` or the Python helper.
4. Update `gallery_config.js`:
   ```js
   GALLERY_CONFIG.USE_SUPABASE = true;
   GALLERY_CONFIG.IMAGE_SERVER_URL =
     'https://<project-id>.supabase.co/storage/v1/object/public/wubbleton';
   ```
5. Test: thumbnails should now load over the CDN.

The dynamic `getImageUrl` call abstracts away the host.

## 7. Git & Deployment

* Images and HTML live in the repo – commit as usual.
* Push to GitHub (`origin/main`).  GitHub Actions or Pages (if configured) serve the static site.
* For remote hosting the code still works on GitHub Pages because the images come from Supabase's public endpoint.

---

### Troubleshooting Checklist

1. **404s** → Verify directory structure & file names, case-sensitive.
2. **CORS errors** in remote mode → ensure Supabase bucket is `public` & anon read policy exists.
3. **Broken images but 200 in network log** → browser caching an old failed version; hard-refresh (Shift-Reload).
4. **Slow loads** → consider enabling object caching or a CDN rule on Supabase.

---

This doc should accompany every future PR that changes asset hosting logic.  Happy myth-building! 