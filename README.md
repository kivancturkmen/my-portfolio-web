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

---

## 🖼️ Profile Photo

Place your photo in the project folder as `profile.jpg`.
It is referenced in the Hero section of `index.html`:

```html
<img src="profile.jpg" alt="İsmail Kıvanç Türkmen" />
```

---

## ✏️ Common Customisations

| What                  | Where                          |
|-----------------------|--------------------------------|
| Name / title          | `index.html` → Hero section    |
| About text            | `index.html` → About section   |
| Skills & tech tags    | `index.html` → Skills section  |
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
