# 🚀 Professional Software Engineer Portfolio

A state-of-the-art, responsive, and visually stunning developer portfolio web application built with **React**, **Vite**, and **Modern CSS (Glassmorphism & Dark Mode)**. Designed to showcase software engineering projects, technical skills, certifications, and professional background to recruiters and engineering managers.

---

## ✨ Key Features

- **🎨 Premium Modern UI/UX**: Designed with sleek dark mode aesthetics, vibrant gradients, glassmorphism components, and smooth micro-animations.
- **⚡ Blazing Fast Performance**: Powered by **Vite** for instantaneous page loading and optimized asset delivery.
- **📱 Responsive Layout**: Fully adaptable across desktop monitors, tablets, and mobile devices.
- **💼 Comprehensive Sections**:
  - **Hero / Introduction**: High-impact greeting with downloadable resume link and quick contact buttons.
  - **About Me**: Detailed summary of technical skills, categorized by languages, frameworks, and developer tools.
  - **Experience Timeline**: Interactive showcase of career history and major engineering achievements.
  - **Projects Showcase**: Dynamic grid displaying key software projects with tech stack tags, GitHub repositories, and live demo links.
  - **Certifications**: Dedicated section highlighting verified industry certifications (AWS, GCP, etc.).
  - **Contact & Socials**: Interactive contact form and direct links to GitHub, LinkedIn, and email.

---

## 🛠️ Technology Stack

- **Frontend Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS3 with custom variables, CSS Grid/Flexbox, and modern animation tokens
- **Icons**: [Lucide React](https://lucide.dev/) (Clean, consistent iconography)

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm` or `yarn` package manager

### Installation & Setup

1. **Clone the repository** (or navigate to the project folder):
   ```bash
   git clone <your-repository-url>
   cd busy-carson
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in your browser**:
   Navigate to `http://localhost:5173` to view the live portfolio!

---

## 📦 Building for Production

To create an optimized, minified production build:

```bash
npm run build
```

You can preview the built production bundle locally using:
```bash
npm run preview
```

---

## 🌐 Free Hosting & Deployment Guide

This application can be deployed for free in less than 5 minutes to any modern hosting platform:

### Deploying to Vercel (Recommended ⭐)
1. Push your code to a repository on **GitHub**.
2. Log in to [Vercel](https://vercel.com/) with your GitHub account.
3. Click **"Add New Project"** and import your repository.
4. Keep default settings (`Framework Preset: Vite`) and click **Deploy**.
5. Your portfolio will be live at `https://<your-project-name>.vercel.app`!

### Deploying to GitHub Pages
1. Install `gh-pages` package: `npm install --save-dev gh-pages`
2. Add a `deploy` script in `package.json`: `"deploy": "gh-pages -d dist"`
3. Run `npm run build && npm run deploy` to publish to `https://<username>.github.io/<repository-name>`.

---

## 📝 Customization Guide

- **Personal Details & Content**: Update `src/data/portfolioData.js` (or individual component files in `src/components/`) to edit your name, bio, projects, and certification credentials.
- **Color Palette & Styling**: Modify custom CSS tokens and variables in `src/index.css`.
- **Resume File**: Place your updated PDF resume in the `/public` folder as `resume.pdf`.

---

## 📄 License

This project is open-source and available under the MIT License.
