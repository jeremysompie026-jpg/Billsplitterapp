# Complete File List to Download

## Essential Files (Copy these in order)

### 1. Root Files
- `/App.tsx` - Main application file
- `/index.html` - HTML entry point
- `/package.json` - Dependencies configuration
- `/vite.config.ts` - Build configuration (if exists)
- `/tsconfig.json` - TypeScript configuration (if exists)

### 2. Components Folder (`/components/`)
- `/components/BillSplitter.tsx`
- `/components/BillHistory.tsx`

### 3. UI Components Folder (`/components/ui/`)
- `/components/ui/button.tsx`
- `/components/ui/card.tsx`
- `/components/ui/input.tsx`
- `/components/ui/label.tsx`
- `/components/ui/separator.tsx`
- `/components/ui/badge.tsx`
- `/components/ui/switch.tsx`
- `/components/ui/checkbox.tsx`
- `/components/ui/select.tsx`
- `/components/ui/alert-dialog.tsx`

### 4. Figma Components (if they exist)
- `/components/figma/ImageWithFallback.tsx`

### 5. Utils Folder (`/utils/`)
- `/utils/supabase/info.tsx`

### 6. Supabase Server Files (`/supabase/functions/server/`)
- `/supabase/functions/server/index.tsx`
- `/supabase/functions/server/kv_store.tsx`
- `/supabase/functions/server/kv_helpers.tsx`

### 7. Styles (`/styles/`)
- `/styles/globals.css`

---

## File Structure for Your Computer

Create this folder structure:

```
bill-splitter/
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── separator.tsx
│   │   ├── badge.tsx
│   │   ├── switch.tsx
│   │   ├── checkbox.tsx
│   │   ├── select.tsx
│   │   └── alert-dialog.tsx
│   ├── figma/
│   │   └── ImageWithFallback.tsx
│   ├── BillSplitter.tsx
│   └── BillHistory.tsx
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
├── index.html
└── package.json
```

---

## After Downloading

1. **Install Node.js** (if you haven't already)
   - Download from: https://nodejs.org/
   - Get the LTS version (recommended)

2. **Open Terminal/Command Prompt**
   - Windows: Press `Win + R`, type `cmd`, press Enter
   - Mac: Press `Cmd + Space`, type "Terminal", press Enter

3. **Navigate to your project folder**
   ```bash
   cd path/to/bill-splitter
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Create `.env` file** (in the root folder)
   ```
   VITE_SUPABASE_URL=your_supabase_url_here
   VITE_SUPABASE_ANON_KEY=your_anon_key_here
   ```

6. **Run the app**
   ```bash
   npm run dev
   ```

7. **Open in browser**
   - Go to: http://localhost:5173
