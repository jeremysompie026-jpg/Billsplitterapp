# 💰 Bill Splitter App

A modern web application for splitting bills with friends, built with React, TypeScript, and Tailwind CSS. Features Indonesian Rupiah (IDR) currency formatting with optional tax, tip, discount, and delivery fee calculations.

## ✨ Features

- **Easy Bill Splitting** - Add participants and split bills equally or by item
- **Itemized Lists** - Track individual items and assign them to specific people
- **Flexible Adjustments** - Toggle tax, tip, discount, and delivery fee on/off
- **Bill History** - Save and load previous bills from Supabase database
- **Settlement Calculator** - Automatic calculation of who owes what
- **Mobile Responsive** - Optimized for both desktop and mobile devices
- **IDR Currency** - Indonesian Rupiah formatting with proper separators

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ ([Download here](https://nodejs.org/))
- A Supabase account (free tier works!)

### Installation

1. **Download/Clone the project**
   - See `DOWNLOAD_INSTRUCTIONS.md` for detailed steps

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Add your Supabase credentials:
     ```
     VITE_SUPABASE_URL=https://your-project.supabase.co
     VITE_SUPABASE_ANON_KEY=your-anon-key
     ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

Production files will be in the `dist` folder.

## 🌐 Deployment

This app can be deployed to:
- **Vercel** (Recommended) - [vercel.com](https://vercel.com)
- **Netlify** - [netlify.com](https://netlify.com)
- **GitHub Pages**
- Any static hosting service

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

## 📱 Mobile Friendly

The app is fully responsive and optimized for mobile devices:
- Stacked layouts on small screens
- Touch-friendly buttons and inputs
- Compact spacing for better mobile UX

## 🗂️ Project Structure

```
bill-splitter/
├── components/
│   ├── BillSplitter.tsx      # Main bill splitting component
│   ├── BillHistory.tsx        # Bill history view
│   └── ui/                    # Reusable UI components
├── supabase/
│   └── functions/server/      # Backend API (Edge Functions)
├── utils/
│   └── supabase/              # Supabase client config
├── styles/
│   └── globals.css            # Global styles & Tailwind
├── App.tsx                    # Main app component
└── main.tsx                   # App entry point
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Vite** - Build tool
- **Supabase** - Backend & database
- **Lucide React** - Icons

## 💾 Database

The app uses Supabase's key-value store for:
- Saving bill history
- Storing participant data
- Managing bill calculations

All data is automatically synced to your Supabase project.

## 🎯 Usage

1. **Add Participants** - Click "Add Person" to add people to split with
2. **Enter Bill Amount** - Input total or use itemized list
3. **Add Adjustments** - Toggle tax, tip, discount, or delivery fee
4. **Track Payments** - Enter how much each person paid
5. **View Settlement** - See who owes money to whom
6. **Save Bill** - Store bill for future reference
7. **Load History** - Access previously saved bills

## 📄 Documentation

- `DOWNLOAD_INSTRUCTIONS.md` - How to download the project
- `DEPLOYMENT_GUIDE.md` - Deployment options and steps
- `FILE_LIST.md` - Complete list of files

## 🤝 Contributing

This is a personal project, but feel free to:
- Fork it
- Customize it for your needs
- Share improvements

## 📝 License

Free to use and modify for personal or commercial projects.

## 🐛 Troubleshooting

**App won't start:**
- Make sure Node.js is installed: `node --version`
- Delete `node_modules` and run `npm install` again

**Database errors:**
- Check your `.env` file has correct Supabase credentials
- Verify your Supabase project is active

**Build fails:**
- Clear cache: `npm run clean` (if available)
- Update dependencies: `npm update`

## 📞 Support

For issues or questions:
1. Check the documentation files
2. Review error messages in browser console (F12)
3. Verify all files are correctly copied/downloaded

---

Made with ❤️ for easy bill splitting with friends
