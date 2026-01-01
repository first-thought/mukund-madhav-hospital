# Deployment Guide - Mukund Madhav Hospital Website

This guide covers deploying the website for **free** with a **custom domain**.

---

## Recommended Hosting (100% Free, Unlimited)

| Platform | Bandwidth | Custom Domain | Best For |
|----------|-----------|---------------|----------|
| **GitHub Pages** | Unlimited | Free | Simple setup, reliable |
| **Cloudflare Pages** | Unlimited | Free | Fastest CDN, best performance |
| Vercel | 100GB/month | Free | Good alternative |

> **Recommendation:** Use **GitHub Pages** (simplest) or **Cloudflare Pages** (fastest)

---

## Step 1: Get a Custom Domain (~₹800-1200/year)

### Recommended Domain Names
- `mukundmadhavhospital.in` (best for local SEO)
- `drgauravdubey.in`
- `mmhparatwada.in`

### Where to Buy (Cheapest Options for .in domains)

| Registrar | Price (approx) | Notes |
|-----------|----------------|-------|
| [Hostinger](https://www.hostinger.in) | ₹599-799/year | Cheapest, good interface |
| [Namecheap](https://www.namecheap.com) | ₹800-900/year | Reliable, good support |
| [GoDaddy](https://www.godaddy.com/en-in) | ₹899-1199/year | Easy to use |
| [BigRock](https://www.bigrock.in) | ₹799-999/year | Indian company |

> **Tip:** `.in` domains rank better for India-focused local SEO than `.com`

---

## Option A: Deploy on GitHub Pages (Recommended - Unlimited & Free)

### Step 1: Create a GitHub Account
1. Go to [github.com](https://github.com)
2. Sign up for a free account

### Step 2: Create a Repository
1. Click the **+** icon → **New repository**
2. Name it: `mukund-madhav-hospital` (or any name)
3. Keep it **Public** (required for free GitHub Pages)
4. Click **Create repository**

### Step 3: Upload Your Files
1. On the repository page, click **uploading an existing file**
2. Drag and drop ALL files from the `mukund-madhav-hospital` folder
3. Click **Commit changes**

### Step 4: Enable GitHub Pages
1. Go to **Settings** → **Pages** (in left sidebar)
2. Under "Source", select **Deploy from a branch**
3. Select **main** branch and **/ (root)** folder
4. Click **Save**
5. Wait 2-3 minutes, your site is live at: `https://yourusername.github.io/mukund-madhav-hospital/`

### Step 5: Connect Custom Domain
1. In **Settings** → **Pages**
2. Under "Custom domain", enter your domain (e.g., `mukundmadhavhospital.in`)
3. Click **Save**
4. Check **Enforce HTTPS**

At your domain registrar, add these DNS records:

| Type | Host/Name | Value |
|------|-----------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | yourusername.github.io |

Wait 10-30 minutes for DNS to propagate.

---

## Option B: Deploy on Cloudflare Pages (Fastest - Unlimited & Free)

### Step 1: Create Accounts
1. Create a [GitHub account](https://github.com) (if you don't have one)
2. Create a [Cloudflare account](https://dash.cloudflare.com/sign-up) (free)

### Step 2: Upload to GitHub
Follow steps 1-3 from "Option A" above to upload files to GitHub.

### Step 3: Connect to Cloudflare Pages
1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to **Workers & Pages** → **Create application** → **Pages**
3. Click **Connect to Git**
4. Authorize Cloudflare to access your GitHub
5. Select your repository
6. Configure build settings:
   - **Build command:** (leave empty - it's a static site)
   - **Build output directory:** `/` or `.`
7. Click **Save and Deploy**

Your site is live at: `your-project.pages.dev`

### Step 4: Add Custom Domain
1. In Cloudflare Pages, go to your project
2. Click **Custom domains** → **Set up a custom domain**
3. Enter your domain (e.g., `mukundmadhavhospital.in`)
4. Cloudflare will guide you to update DNS (it's automatic if domain is on Cloudflare)

**If domain is NOT on Cloudflare DNS:**

Add this CNAME record at your registrar:

| Type | Host/Name | Value |
|------|-----------|-------|
| CNAME | @ | your-project.pages.dev |
| CNAME | www | your-project.pages.dev |

---

## Option C: Deploy on Vercel (100GB/month Free)

### Step 1: Create Accounts
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub

### Step 2: Import Project
1. Click **Add New** → **Project**
2. Import your GitHub repository
3. Framework Preset: **Other**
4. Click **Deploy**

Your site is live at: `your-project.vercel.app`

### Step 3: Add Custom Domain
1. Go to project **Settings** → **Domains**
2. Add your domain
3. Follow DNS instructions provided

---

## After Deployment: Update URLs

Once you have your custom domain, update these files:

### index.html
Find and replace `mukund-madhav-hospital.netlify.app` with your domain:
```html
<link rel="canonical" href="https://yourdomain.in/" />
<meta property="og:url" content="https://yourdomain.in/" />
```

Also update all URLs in the JSON-LD structured data (search for `netlify.app`).

### sitemap.xml
```xml
<loc>https://yourdomain.in/</loc>
```

### robots.txt
```
Sitemap: https://yourdomain.in/sitemap.xml
```

---

## Google Search Console Setup

### 1. Verify Your Site
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **Add Property**
3. Enter your domain
4. Verify using DNS TXT record or HTML file method

### 2. Submit Sitemap
1. Go to **Sitemaps** in left menu
2. Enter: `sitemap.xml`
3. Click **Submit**

### 3. Request Indexing
1. Go to **URL Inspection**
2. Enter your homepage URL
3. Click **Request Indexing**

---

## Google Business Profile (Critical for Local SEO!)

1. Go to [Google Business Profile](https://business.google.com/)
2. Search for "Mukund Madhav Hospital"
3. Claim or create the listing
4. Fill in:
   - **Name:** Mukund Madhav Hospital
   - **Category:** Hospital, Pulmonologist
   - **Address:** Jaistambh Chowk, Paratwada, Maharashtra 444805
   - **Phone:** +91 9404336972
   - **Hours:** Mon-Sat 11:00 AM - 7:00 PM
   - **Website:** https://yourdomain.in
5. Add photos
6. Ask patients to leave reviews

---

## Comparison: Which to Choose?

| Feature | GitHub Pages | Cloudflare Pages | Vercel |
|---------|--------------|------------------|--------|
| **Bandwidth** | Unlimited | Unlimited | 100GB/month |
| **Build minutes** | N/A (static) | 500/month | 6000/month |
| **Custom domain** | ✅ Free | ✅ Free | ✅ Free |
| **HTTPS/SSL** | ✅ Free | ✅ Free | ✅ Free |
| **Speed** | Good | Excellent | Excellent |
| **Ease of setup** | Easy | Medium | Easy |

**For a simple hospital website:** GitHub Pages is perfect and completely free.

---

## Need Help?

For technical issues with this website, contact:
**First Thought Technology Limited**

For medical appointments:
**+91 9404336972** (Mukund Madhav Hospital)
