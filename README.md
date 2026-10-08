# Subash S - Personal Portfolio Website

A production-quality personal portfolio website built with **React.js** and **Vite**, closely reproducing the visual design reference template (light blue & white corporate aesthetic, circular hero profile with concentric orbital rings, 3D floating preview cards, and the UX Case Study showcase).

The website strictly uses **Subash S's authentic profile photograph** without any modifications to his facial identity, hair, or features.

---

## 🚀 Quick Start

Run the following commands in the root directory:

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Then open your browser at `http://localhost:5173/`.

To create an optimized production build:

```bash
npm run build
```

---

## 🎨 Design & Aesthetic Features

- **Reference-Fidelity Layout:** Exact left/center/right hero arrangement, blue-and-white color palette, circular profile frame with planetary orbit rings, and fanned-out 3D cards.
- **Authentic Profile Photo:** Uses the user's uploaded photograph framed inside a circular glow container with depth separation and realistic soft shadows.
- **Carex / UX Case Study Template Section:** Recreates the second section from the reference design with 4 fanned perspective document boards and 6 capability badges.
- **Desktop 3D Mouse Parallax & Tilt:** Subtle, smooth mouse-following depth on hero elements, background circles, and floating project cards using `requestAnimationFrame`.
- **Custom Mouse Cursor:** Clean inner dot and delayed outer ring with interactive expansion over clickable elements (automatically disabled on mobile/touch screens and `prefers-reduced-motion`).
- **Interactive Modals:**
  - **Curriculum Vitae Modal:** Preview and printable/PDF version of Subash's resume via the **Download CV** button.
  - **Project Detail Modal:** In-depth technical breakdown, system metrics, and engineering highlights.

---

## 👤 User Information & Credentials

- **Name:** Subash S
- **Role:** Software Developer
- **Degree:** B.E. Computer Science and Cyber Security
- **Status:** Currently pursuing 4th Year
- **College:** Karpagam Academy of Higher Education, Coimbatore
- **CGPA:** 8.1 / 10.0

---

## 🛠️ Technology Stack

- **Framework:** React.js 19
- **Bundler:** Vite
- **Styling:** Vanilla CSS3 with CSS Custom Properties & 3D Perspective Transforms
- **Icons:** Lucide React & Custom SVG Social Icons
- **Scroll Animations:** IntersectionObserver API
