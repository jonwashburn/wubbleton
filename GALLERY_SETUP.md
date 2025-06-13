# 🎨 Gallery Setup - Super Simple Guide

## 5-Minute Setup with Supabase (Free!)

### Step 1: Create Your Supabase Account
1. Go to https://app.supabase.com
2. Sign up with GitHub or email (free)
3. Create a new project (name it "wubbleton" or whatever)
4. Wait ~2 minutes for it to spin up

### Step 2: Get Your Keys
1. In your project, click **Settings** (gear icon)
2. Click **API** in the sidebar
3. You'll see two things we need:
   - **Project URL**: `https://YOUR_PROJECT_ID.supabase.co`
   - **anon public key**: A long string starting with `eyJ...`

### Step 3: Set Up Your Computer

Create a file called `.env` in the Wubbleton folder:
```
SUPABASE_URL=paste_your_project_url_here
SUPABASE_ANON_KEY=paste_your_anon_key_here
```

### Step 4: Upload Your Galleries

**If you like Python:**
```bash
pip install supabase python-dotenv
python gallery_manager.py upload
```

**If you like JavaScript:**
```bash
npm install
npm run upload-galleries
```

This will upload all 133MB of images! ☁️

### Step 5: Update the Website

The script will tell you exactly what to change, but it's just one line in `gallery_config.js`:

```javascript
// Change this:
IMAGE_SERVER_URL: 'http://localhost:8004',

// To this (use YOUR project URL):
IMAGE_SERVER_URL: 'https://YOUR_PROJECT_ID.supabase.co/storage/v1/object/public/wubbleton-galleries',
```

### That's it! 🎉

Your galleries now load from the cloud. No more local image server needed!

---

## Managing Your Galleries

### Add a New Image to a Gallery

**Python:**
```bash
python gallery_manager.py add crisis /path/to/cool-new-image.jpg
```

**JavaScript:**
```bash
node setup_supabase.js add crisis /path/to/cool-new-image.jpg
```

### List What's in a Gallery
```bash
python gallery_manager.py list zombies
# or
node setup_supabase.js list zombies
```

### Remove an Image
```bash
python gallery_manager.py remove rapture old-image.jpg
```

---

## What I Can Do For You

Once this is set up, I can:
- ✅ Add new images to any gallery
- ✅ Remove images you don't want
- ✅ Create new galleries
- ✅ List and organize images
- ✅ Generate thumbnails (coming soon!)

Just tell me what you want to do with your galleries and I'll handle it!

---

## Troubleshooting

**"Module not found" error?**
- Python: Run `pip install supabase python-dotenv`
- Node: Run `npm install`

**"Invalid API key" error?**
- Check your `.env` file has the right keys
- Make sure you copied the `anon` key, not the `service_role` key

**Images not showing on website?**
- Make sure you updated `gallery_config.js` with your Supabase URL
- Check browser console for errors

**Need help?**
Just ask! I can walk you through any issues. 🌈 