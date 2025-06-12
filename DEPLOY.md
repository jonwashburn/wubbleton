# Deploying Wubbleton to wubbleton.com

## Quick Deploy Options

### Option 1: GitHub Pages (Recommended - Free)

1. **Create a GitHub repository:**
   - Go to https://github.com/new
   - Name it `wubbleton`
   - Make it public
   - Don't initialize with README

2. **Push your code:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/wubbleton.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to Settings → Pages in your repo
   - Source: Deploy from branch
   - Branch: main
   - Folder: / (root)
   - Click Save

4. **In GoDaddy DNS:**
   - Go to Domain Settings → DNS
   - Add these records:
   ```
   Type: A      Name: @    Value: 185.199.108.153
   Type: A      Name: @    Value: 185.199.109.153
   Type: A      Name: @    Value: 185.199.110.153
   Type: A      Name: @    Value: 185.199.111.153
   Type: CNAME  Name: www  Value: YOUR_USERNAME.github.io
   ```

5. **Add custom domain in GitHub:**
   - In repo Settings → Pages
   - Custom domain: wubbleton.com
   - Check "Enforce HTTPS"

### Option 2: Netlify (Also Free, Instant)

1. **Quick Deploy:**
   - Go to https://app.netlify.com/drop
   - Drag your entire `wubbleton-website` folder onto the page
   - It deploys instantly!

2. **Connect Domain:**
   - Click "Domain settings"
   - Add custom domain: wubbleton.com
   - Follow their DNS instructions for GoDaddy

### Option 3: GoDaddy Hosting

If you have GoDaddy hosting:

1. **Access File Manager:**
   - GoDaddy admin → Web Hosting → Manage → File Manager

2. **Upload to public_html:**
   - Delete any existing files in public_html
   - Upload all files from wubbleton-website
   - Make sure index.html is in the root

3. **Wait:**
   - Changes can take 5-30 minutes to appear

## Important Notes

- The `images/` folder is large (40+ files) - be patient during upload
- GitHub Pages and Netlify handle HTTPS automatically
- DNS changes can take up to 48 hours to propagate (usually faster)

## Quick Test

Once deployed, visit:
- http://wubbleton.com
- http://www.wubbleton.com

Both should show your beautiful Recognition Science art collection! 