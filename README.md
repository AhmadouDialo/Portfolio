# Ahmadou — 3D Student Portfolio

A simple, responsive portfolio ready for GitHub Pages. Includes sections for About, Skills, Projects (with Figma embeds), and a CV preview.

## Quick start

1. Replace images in `assets/images/` with your own thumbnails.
2. Put your CV at `assets/cv/ahmadou-cv.pdf` (same filename used in `index.html`).
3. Update links (email, LinkedIn, ArtStation, GitHub) in `index.html`.
4. Replace `data-figma-url` on each "View Figma" button with the Figma embed URL:
   - In Figma, click Share and copy the file or prototype link
   - Use: `https://www.figma.com/embed?embed_host=share&url=PASTE_YOUR_FIGMA_URL`

## Local preview

Open `index.html` in your browser, or serve the folder with a simple static server.

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g., `portfolio-ahmadou`).
2. Initialize the repo locally, commit, and push:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio-ahmadou.git
   git push -u origin main
   ```
3. In GitHub → Repository Settings → Pages:
   - Source: `Deploy from a branch`
   - Branch: `main` / folder: `/ (root)`
   - Save. After a minute, Pages will publish at `https://<your-username>.github.io/portfolio-ahmadou/`.

If using a custom domain, add your `CNAME` at the repo root and configure DNS.

## Customize

- Colors and spacing: edit CSS variables in `styles.css`.
- Sections: edit `index.html` to add more projects.
- Interactivity: lightweight behaviors live in `script.js`.

