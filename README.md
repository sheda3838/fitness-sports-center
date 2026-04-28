# Fitness Center – Modern Gym Landing Page

A modern, responsive promotional website for a fitness brand, developed as part of a Web Development Internship technical assessment.

This project focuses on delivering a clean UI/UX, smooth animations, and a fully functional contact experience using a modern frontend stack.

---

##  Project Links

* **Live Demo:**   https://fitness-sports-center.vercel.app/
* **GitHub Repository:** https://github.com/sheda3838/fitness-sports-center.git
* **Figma Design:** https://www.figma.com/design/J9yZAznefl88LoctHNdL1A/Koncepthive-Gym-Landing-Page?node-id=0-1&t=9Wd1HBWSFnPSlLOT-1

---

## Overview

This application is designed as a marketing landing page for a fitness center. It highlights services, trainers, and membership plans while ensuring a smooth and engaging user experience.

Key aspects include:

* Clean and modern UI design aligned with branding
* Smooth scroll-based animations
* Fully responsive layout across all devices
* Functional contact form integration

---

## Project Structure

```bash
GymApp
│
├── public                   # Static assets (images, logos)
├── src
│   ├── components           # Reusable UI components
│   ├── context              # Global ThemeContext (animations consistency)
│   ├── assets               # Local media files
│   ├── index.css            # Tailwind & global styles
│   ├── App.jsx              # Main application layout
│   └── main.jsx             # Entry point
│
├── package.json
├── vite.config.js
└── README.md
```

---

##  Features

* **Responsive Design:** Optimized for mobile, tablet, and desktop devices
* **Scroll-Based Animations:** Smooth fade, slide, and stagger effects using Framer Motion
* **Trainer Section Interaction:** Animated card focus with structured reveal
* **Membership Plans UI:** Clear pricing layout with highlighted plan emphasis
* **Contact Form Integration:** Functional form using Formspree with validation and feedback
* **Reusable Components:** Structured and maintainable component-based architecture
* **Consistent Animation System:** Centralized animation configuration using context

---

## Tech Stack

* **Frontend:** React (Vite)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Icons:** React Icons
* **Form Handling:** Formspree
* **Deployment:** Vercel / Netlify

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/sheda3838/fitness-sports-center.git
cd fitness-sports-center
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

App runs at: http://localhost:5173

---

### 4. Build for production

```bash
npm run build
```

---

##  Assumptions & Decisions

* **Single Page Layout:** Implemented as a scroll-based landing page for better user flow and simplicity
* **Form Handling:** Used Formspree for quick and reliable form submission without backend setup
* **Animation Approach:** Kept animations minimal, smooth, and performance-focused to enhance UX without distraction
* **Design Approach:** Prioritized clarity, spacing, and consistency over heavy visual effects

---

## Notes

* Ensure all links (Live Demo, Figma) are updated before submission
* Repository is public as required
* Commit history reflects development progress

---

*Developed as part of a Web Development Internship Technical Assessment.*
