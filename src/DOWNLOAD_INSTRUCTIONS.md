# 📥 How to Download Your Bill Splitter Project

## Option 1: Copy Files Manually (Recommended)

Since Figma Make doesn't have a direct export button, you'll need to copy each file manually.

### Step-by-Step Instructions:

#### 1️⃣ Create a New Folder on Your Computer
Create a folder called `bill-splitter` anywhere on your computer (e.g., Desktop, Documents)

#### 2️⃣ Copy All Files from Figma Make

**In Figma Make:**
- Click on each file in the left sidebar
- Select all the code (Ctrl+A or Cmd+A)
- Copy it (Ctrl+C or Cmd+C)

**On Your Computer:**
- Create the same file in your folder (same name and location)
- Paste the code (Ctrl+V or Cmd+V)
- Save the file

### 📁 Files to Copy (in this order):

#### Root Files:
1. ✅ `/package.json` - Already created!
2. ✅ `/index.html` - Already created!
3. ✅ `/main.tsx` - Already created!
4. ✅ `/vite.config.ts` - Already created!
5. `/App.tsx` - Copy this file
6. `/tsconfig.json` - Copy if it exists

#### Components Files:
7. `/components/BillSplitter.tsx`
8. `/components/BillHistory.tsx`

#### UI Components (create `/components/ui/` folder):
9. `/components/ui/button.tsx`
10. `/components/ui/card.tsx`
11. `/components/ui/input.tsx`
12. `/components/ui/label.tsx`
13. `/components/ui/separator.tsx`
14. `/components/ui/badge.tsx`
15. `/components/ui/switch.tsx`
16. `/components/ui/checkbox.tsx`
17. `/components/ui/select.tsx`
18. `/components/ui/alert-dialog.tsx`

#### Figma Components (if exists):
19. `/components/figma/ImageWithFallback.tsx`

#### Utils:
20. `/utils/supabase/info.tsx`

#### Supabase Server:
21. `/supabase/functions/server/index.tsx`
22. `/supabase/functions/server/kv_store.tsx`
23. `/supabase/functions/server/kv_helpers.tsx`

#### Styles:
24. `/styles/globals.css`

---

## Option 2: Use a Script to Download (Advanced)

If you're comfortable with browser console:

1. Open your Figma Make app in browser
2. Press F12 to open Developer Tools
3. Go to "Console" tab
4. Paste this script (I can provide if needed)
5. It will download all files as a ZIP

---

## After Downloading Files

### Step 1: Install Node.js
Download from: **https://nodejs.org/**
- Choose the LTS version (Long Term Support)
- Run the installer
- Restart your computer

### Step 2: Open Terminal/Command Prompt
**Windows:**
- Press `Win + R`
- Type `cmd` and press Enter
- Navigate to your folder: `cd C:\path\to\bill-splitter`

**Mac/Linux:**
- Open Terminal
- Navigate to your folder: `cd /path/to/bill-splitter`

### Step 3: Install Dependencies
```bash
npm install
```

This will download all required packages (React, Vite, Tailwind, etc.)

### Step 4: Create Environment File
Create a file called `.env` in the root folder:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

**Where to find these values:**
- Go back to Figma Make
- Open `/utils/supabase/info.tsx`
- Copy the `projectId` and `publicAnonKey` values
- The URL is: `https://{projectId}.supabase.co`

### Step 5: Run the App
```bash
npm run dev
```

### Step 6: Open in Browser
- Open your browser
- Go to: **http://localhost:5173**
- Your app should be running! 🎉

---

## Build for Production

To create production files you can host online:

```bash
npm run build
```

This creates a `dist` folder with optimized files ready to deploy.

---

## Quick Checklist ✅

- [ ] Created `bill-splitter` folder on computer
- [ ] Copied all 24 files (maintaining folder structure)
- [ ] Installed Node.js
- [ ] Ran `npm install` successfully
- [ ] Created `.env` file with Supabase credentials
- [ ] Ran `npm run dev`
- [ ] Opened http://localhost:5173 in browser
- [ ] App is working!

---

## Need Help?

### Common Issues:

**"npm is not recognized"**
- Solution: Install Node.js and restart terminal

**"Failed to fetch" errors**
- Solution: Check your `.env` file has correct Supabase credentials

**"Cannot find module"**
- Solution: Run `npm install` again

**Port 5173 already in use**
- Solution: The port is being used by another app. Change port in `vite.config.ts` or close other apps

---

## Alternative: Use Figma Make's Export

Some versions of Figma Make have an export button:
- Look in the top-right corner
- Click "Export" or "Download"
- Choose "Download ZIP"
- Extract the ZIP file

If you don't see this option, use the manual method above.
