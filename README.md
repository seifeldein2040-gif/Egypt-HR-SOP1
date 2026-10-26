# Egypt HR SOPs – Interactive

A static, searchable version of the Egypt HR Operations SOP. Every section is a collapsible dropdown, with search, expand/collapse all, and clickable cross-references. No build step and no dependencies.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure and all SOP content |
| `styles.css` | Styling (light and dark mode follow the device setting) |
| `script.js` | Search, expand/collapse, section links |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |
| `.github/workflows/pages.yml` | Optional: deploys to GitHub Pages on every push to `main` |

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy to GitHub Pages

1. Create a new repository on GitHub (for example `egypt-hr-sop`).
2. In this folder run:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Egypt HR SOP"
   git branch -M main
   git remote add origin https://github.com/<your-user>/egypt-hr-sop.git
   git push -u origin main
   ```

3. On GitHub open **Settings → Pages**, and under **Source** choose **GitHub Actions**. The included workflow deploys the site on the next push. (Alternative without the workflow: choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and delete `.github/workflows/pages.yml`.)
4. The site will be available at `https://<your-user>.github.io/egypt-hr-sop/`.

## Privacy warning

This SOP names colleagues and internal systems. A public repository, and its Pages site, can be read by anyone. Use a **private** repository. GitHub Pages from a private repository needs a paid GitHub plan, and on Enterprise Cloud you can restrict the site to your organization. `index.html` includes `noindex` to discourage search engines, but that does not make it private.

## Editing the content

Edit the text directly in `index.html`. Each section is a `<details class="sec" id="sN">` block, and sub-sections use `<details class="sub">`. Links like `Section 15` use `<a class="xref" href="#s15" data-s="15">`.
