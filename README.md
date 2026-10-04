# Ibrahem's AI Engineer Portfolio

A premium, modern portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Setup Instructions

Since `npm` was not available in this environment, I've generated all the necessary project files for you. Follow these steps to install dependencies and run the site:

1. **Install Node.js** (if you haven't already): Download from [nodejs.org](https://nodejs.org/).
2. Open a terminal in this `portfolio` folder (`d:\المخروبه\كورسات\Instant\Projects\portfolio`).
3. Run the following command to install all required packages:
   ```bash
   npm install
   ```
   *(This will read `package.json` and install React, Tailwind CSS, Framer Motion, and React Icons).*
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the local link (usually `http://localhost:5173`) in your browser to see the site.

## 🖼️ How to add your Photo & Resume
- **Photo**: Place your profile picture as `me.jpg` inside the `public/` folder. (Replace any existing placeholder). 
- **Resume/CV**: Place your CV PDF as `CV.pdf` inside the `public/` folder.

## ✏️ How to Edit Content
- All text, links, skills, and projects are centralized in `src/data/portfolio.js`.
- Open `src/data/portfolio.js` to replace any `#` placeholder links with your actual URLs (like Kaggle or specific project links).

## 🌍 Deployment Steps (Vercel / Netlify)
Deploying this Vite app is incredibly easy and free.

### Vercel (Recommended)
1. Push this entire `portfolio` folder to a new GitHub repository.
2. Go to [Vercel](https://vercel.com/) and sign in with GitHub.
3. Click **Add New Project** and select your portfolio repository.
4. Vercel will automatically detect that it's a Vite project. Keep the default settings (Framework Preset: Vite, Build Command: `npm run build`, Output Directory: `dist`).
5. Click **Deploy**.

### Netlify
1. Push this folder to a GitHub repository.
2. Go to [Netlify](https://www.netlify.com/) and log in.
3. Click **Add new site** > **Import an existing project**.
4. Choose GitHub, authorize, and select your repo.
5. Build settings: 
   - Base directory: `(leave blank)`
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **Deploy site**.
