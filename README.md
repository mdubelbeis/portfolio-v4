# Mason Dubelbeis Portfolio

Personal software engineering portfolio built with Astro to showcase my projects, technical skills, certifications, resume, and professional background.

Live Site: [masondubelbeis.com](https://masondubelbeis.com)

## Overview

This portfolio highlights my work as a full-stack software engineer focused on TypeScript, React, Node.js, Express, Java, Spring Boot, REST APIs, databases, and deployment-ready application architecture.

The site includes selected projects, skills, certifications, resume access, and links to GitHub, LinkedIn, and Credly.

## Tech Stack

- Astro
- TypeScript
- HTML
- CSS
- Astro Content Collections
- Vercel

## Featured Projects

### ClientHub

Full-stack CRM application built with React, TypeScript, Spring Boot, Spring Security, PostgreSQL, Docker, JUnit, and Swagger/OpenAPI.

- Live Demo: <https://clienthub-frontend-sigma.vercel.app>
- Backend Repo: <https://github.com/mdubelbeis/clienthub-api>
- Frontend Repo: <https://github.com/mdubelbeis/clienthub-frontend>

### Bug-Board

Full-stack issue tracking application currently in development using React, TypeScript, Node.js, Express, MongoDB, Mongoose, JWT authentication, and REST APIs.

- Repo: <https://github.com/mdubelbeis/bug-board>

### Order Management API

Production-style backend API built with Java, Spring Boot, PostgreSQL, JUnit, Testcontainers, MockMvc, and Mockito.

- Repo: <https://github.com/mdubelbeis/order-management-api>

### Dubex

TypeScript developer CLI tool currently in development for code generation, file-system workflows, and repeatable developer automation.

- Repo: <https://github.com/mdubelbeis/dubex>

## Features

- Responsive Astro portfolio site
- Component-based project sections
- JSON-powered content collections
- Optimized project images using Astro assets
- Resume download
- Certification and credential links
- GitHub, LinkedIn, email, and Credly links
- Plain CSS with scoped component styles
- Deployed on Vercel

## Project Structure

```txt
portfolio-v4/
├── public/
|   |-- icons/
│   ├── Mason-Dubelbeis-Resume.pdf
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   |-- imgs/
│   │
│   ├── components/
│   │   ├── About.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Projects/
│   │
│   ├── content/
│   │   ├── socials.json
│   │   ├── projects.json
│   │   └── skillGroups.json
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- pnpm

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

The site will run locally at:

```txt
http://localhost:4321
```

### Build

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

## Deployment

This portfolio is deployed on Vercel.

Recommended build settings:

```txt
Framework Preset: Astro
Install Command: pnpm install
Build Command: pnpm build
Output Directory: dist
```

## Content Management

Project, skill, and certification data is managed through JSON content files in `src/content`.

This keeps the portfolio easy to update without rewriting component markup.

## Status

Active portfolio project. Continued improvements include mobile polish, additional project screenshots, certification display updates, and expanded project writeups.

## Contact

- Portfolio: <https://masondubelbeis.com>
- GitHub: <https://github.com/mdubelbeis>
- LinkedIn: <https://www.linkedin.com/in/mason-dub/>
- Credly: <https://www.credly.com/users/mason-dubelbeis>
- Email: <mailto:mason.dubelbeis@gmail.com>
