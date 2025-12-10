# Bill Splitter - Deployment Guide

## Running the App on Your Computer

### Prerequisites
1. **Node.js** (v18 or higher) - Download from [nodejs.org](https://nodejs.org/)
2. **Git** (optional) - For version control

### Step 1: Download the Project Files
You'll need to copy all the project files from Figma Make to your local computer:

```
bill-splitter/
├── components/
│   ├── BillSplitter.tsx
│   ├── BillHistory.tsx
│   └── ui/ (all UI components)
├── utils/
│   └── supabase/
│       └── info.tsx
├── supabase/
│   └── functions/
│       └── server/
│           ├── index.tsx
│           ├── kv_store.tsx
│           └── kv_helpers.tsx
├── styles/
│   └── globals.css
├── App.tsx
├── package.json
└── index.html
```

### Step 2: Install Dependencies
Open a terminal/command prompt in your project folder and run:

```bash
npm install
```

This will install:
- React
- Vite (development server)
- Tailwind CSS
- Supabase client
- Lucide React (icons)
- Other dependencies

### Step 3: Set Up Environment Variables
Create a `.env` file in your project root:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Get these values from your Supabase dashboard.

### Step 4: Run the Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Step 5: Build for Production
To create an optimized build:

```bash
npm run build
```

This creates a `dist` folder with production-ready files.

---

## Deploying to the Web (Free Options)

### Option A: Deploy to Vercel (Recommended - Very Easy)

1. **Sign up** at [vercel.com](https://vercel.com) (free account)
2. **Connect your GitHub** repository or upload files
3. **Add environment variables** in Vercel dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. **Deploy** - Vercel automatically builds and deploys
5. You'll get a free URL like: `your-app.vercel.app`

### Option B: Deploy to Netlify

1. **Sign up** at [netlify.com](https://netlify.com) (free account)
2. **Drag and drop** your `dist` folder (after running `npm run build`)
3. **Add environment variables** in Netlify dashboard
4. You'll get a free URL like: `your-app.netlify.app`

### Option C: Deploy to GitHub Pages

1. **Push code** to GitHub repository
2. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```
3. **Add to package.json**:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. **Deploy**:
   ```bash
   npm run deploy
   ```

---

## Mobile App (Optional - Advanced)

To turn this into a mobile app:

### Option 1: Use as Progressive Web App (PWA)
- Add a `manifest.json` file
- Users can "Add to Home Screen" on their phones
- Works offline with service workers

### Option 2: Wrap with Capacitor/Cordova
- Convert to native iOS/Android app
- Requires more setup but gives native app experience

---

## Important Notes

### Supabase Backend
- The backend server runs on **Supabase Edge Functions**
- You're already using the free tier (included with your Figma Make setup)
- The database is already configured and working

### Environment Variables
Make sure these are set correctly:
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your public anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Server-side only (keep secret!)

### Sharing with Friends
Once deployed, just share the URL! Friends can:
- Access the app from any device
- Split bills together
- View bill history
- No login required (unless you add authentication)

---

## Need Help?

- Check the console for errors (F12 in browser)
- Make sure all environment variables are set
- Verify Supabase connection is working
- Check network tab for API call failures
