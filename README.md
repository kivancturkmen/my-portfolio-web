# İsmail Kıvanç Türkmen — Portfolio Website

Personal portfolio and CV website. Static HTML/CSS/JS, no build tools or dependencies required.

---

## 📁 Project Structure

```
portfolio/
├── index.html      ← Main page (all sections)
├── styles.css      ← All styles and CSS variables
├── script.js       ← Animations, scroll effects, form logic
├── favicon.svg     ← Browser tab icon
├── profile.jpg     ← Your profile photo (add this yourself)
└── README.md       ← This file
```

---

## 🚀 Getting Started

### Option A — Open directly
Just open `index.html` in your browser. No server needed.

### Option B — Live Server (VS Code)
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**
3. Auto-reloads on every save

### Option C — Claude Code
```bash
cd portfolio
# Claude Code will pick up the project automatically
```

---

## 🖼️ Adding Your Profile Photo

1. Add your photo to the project folder and name it `profile.jpg`  
   *(or any name — just update the `src` in `index.html`)*
2. In `index.html`, find the About section and replace:

```html
<!-- Replace the emoji below with your photo: -->
<span class="ph-ic">🧑‍💻</span>
```

with:

```html
<img src="profile.jpg" alt="İsmail Kıvanç Türkmen" />
```

---

## ✏️ Common Customisations

| What                  | Where                          |
|-----------------------|--------------------------------|
| Name / title          | `index.html` → Hero section    |
| About text            | `index.html` → About section   |
| Skill percentages     | `index.html` → Skills section  |
| Work history          | `index.html` → Experience      |
| Projects              | `index.html` → Projects        |
| LinkedIn / GitHub URL | `index.html` → Contact section |
| Colours / fonts       | `styles.css` → `:root` vars    |
| Animations            | `script.js`                    |

### Changing the colour palette
Open `styles.css` and edit the `:root` block at the top:

```css
:root {
  --bg:    #141c2e;   /* main background */
  --teal:  #38bdf8;   /* accent colour   */
  /* ... */
}
```

---

## 🌐 Deployment

Any static host works — no server required.

| Platform        | Steps                                              |
|-----------------|----------------------------------------------------|
| **GitHub Pages**| Push repo → Settings → Pages → Deploy from `main` |
| **Netlify**     | Drag & drop the project folder on netlify.com      |
| **Vercel**      | `vercel` CLI or import GitHub repo                 |

---

## 🛠️ Tech Stack

- Vanilla HTML5, CSS3, JavaScript (ES6+)
- Fonts: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display), [Outfit](https://fonts.google.com/specimen/Outfit), [Fira Code](https://fonts.google.com/specimen/Fira+Code) via Google Fonts
- No frameworks, no build step, no `node_modules`

---

## 📄 License

Personal use. Not for redistribution.
