# PRAGADA V S N L P KUMAR Portfolio

A professional personal portfolio for an Electronics & Communication Engineering student specializing in VLSI, digital design, and software development.

## Technologies

- React
- Vite
- JavaScript
- Tailwind CSS
- Lucide Icons

## Project Structure

- src/data/portfolio.js — central portfolio content and configuration
- src/App.jsx — main portfolio page and sections
- src/styles.css — custom styling and animations
- public/ — static files
- resume/ — resume PDF placeholder

## Installation

```bash
npm install
```

## Running Locally

```bash
npm run dev
```

Then open the local URL shown in the terminal.

## Editing Portfolio Information

Update the content in `src/data/portfolio.js` to change:

- name
- title
- description
- email
- GitHub URL
- LinkedIn URL
- resume path
- skills
- projects
- certifications
- education
- achievements

## Deploying

### GitHub Pages

1. Install a GitHub Pages deployment package if needed.
2. Build the project:

```bash
npm run build
```

3. Deploy the generated `dist` folder to GitHub Pages.

### Vercel

1. Import the repository into Vercel.
2. Use the default Vite settings.
3. Deploy.

### Netlify

1. Import the repository into Netlify.
2. Use the build command:

```bash
npm run build
```

3. Publish the `dist` folder.

## Notes

- No private credentials or environment tokens are included.
- GitHub and LinkedIn are configurable from the data file.
- Resume path is set to `/resume/PRAGADA_V_S_N_L_P_KUMAR_Resume.pdf` and can be replaced when available.
