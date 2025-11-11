# GitHub Pages Deployment Guide

## ✅ Setup Complete!

Your repository is now configured for automatic deployment to GitHub Pages via GitHub Actions.

## 🚀 How to Deploy

### Automatic Deployment (Recommended)
Simply push your changes to the `main` branch:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

The GitHub Actions workflow will automatically:
1. Install dependencies
2. Run typechecking
3. Build the production site
4. Deploy to GitHub Pages

### Manual Deployment
If you prefer manual control, run:

```bash
pnpm run deploy
```

This uses the `gh-pages` package to push directly to the `gh-pages` branch.

## 🌐 Your Site URL

Once deployed, your site will be available at:
**https://manuelbiermann.github.io/troops-website**

## 📋 What Was Configured

### 1. React Router Config (`react-router.config.ts`)
- ✅ Enabled SPA mode (`ssr: false`) for static hosting
- ✅ Set `basename: "/troops-website"` for GitHub Pages subdirectory

### 2. Package.json
- ✅ Updated homepage URL to `https://manuelbiermann.github.io/troops-website`
- ✅ Fixed deploy script to use correct build directory (`build/client`)

### 3. GitHub Actions (`.github/workflows/deploy.yml`)
- ✅ Automatic deployment on push to `main` branch
- ✅ Manual deployment trigger via GitHub UI (workflow_dispatch)
- ✅ Runs typecheck before building
- ✅ Uploads build artifacts to GitHub Pages

### 4. SPA Routing Support
- ✅ Created `public/.nojekyll` to disable Jekyll processing
- ✅ Created `public/404.html` to handle client-side routing
- ✅ Added redirect handler in `app/root.tsx` Layout component

## 🔍 Monitoring Deployments

1. Go to your GitHub repository
2. Click on **Actions** tab
3. You'll see the deployment workflow runs
4. Click on any run to see detailed logs

## ⚙️ GitHub Settings Verification

Make sure GitHub Pages is configured correctly:

1. Go to **Settings** → **Pages**
2. Under "Build and deployment":
   - **Source**: Should be "GitHub Actions" ✓
3. Your site URL will appear at the top once deployed

## 🧪 Testing Locally

Test the production build locally before deploying:

```bash
# Build the site
pnpm run build

# Preview using vite
pnpm run preview
```

Note: Local preview won't have the `/troops-website` basename, so some links might not work exactly as they will on GitHub Pages.

## 🐛 Troubleshooting

### Deployment fails with 403 error
- Make sure GitHub Pages is enabled in repository settings
- Verify the workflow has proper permissions (configured in deploy.yml)

### 404 errors on page refresh
- The `public/404.html` and redirect handler in `app/root.tsx` should fix this
- Verify these files exist and are deployed

### Assets not loading
- Check that `basename: "/troops-website"` is set in `react-router.config.ts`
- Verify the homepage URL in `package.json` matches your GitHub Pages URL

### Workflow not running
- Check that you pushed to the `main` branch (not `master` or another branch)
- You can manually trigger the workflow from the Actions tab

## 📚 Additional Resources

- [React Router SPA Mode](https://reactrouter.com/en/main/start/framework/deployment#static-hosting)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions for Pages](https://github.com/marketplace/actions/deploy-github-pages-site)
