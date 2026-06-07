<p align="center">
  <img src="ecoloop_logo.png" alt="Project Logo" width="300"/>
</p>

## Ecoloop
EcoLoop is a sustainability-focused open-source marketplace designed to promote reuse and reduce environmental waste. It allows startups to list eco-friendly products while also enabling individuals to sell or give away unused items at minimal or no cost.

![License](https://img.shields.io/github/license/RajMajhi/Ecoloop_GsSOC-2026)
![Issues](https://img.shields.io/github/issues/RajMajhi/Ecoloop_GsSOC-2026)
![Pull Requests](https://img.shields.io/github/issues-pr/RajMajhi/Ecoloop_GsSOC-2026)
![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)

##  Getting Started

Follow these steps to run the project locally:

### Prerequisites
- Node.js installed
- Git installed

### Installation

1. Clone the repository:
   git clone https://github.com/RajMajhi/Ecoloop_GsSOC-2026.git

2. Navigate to the project folder:
   cd Ecoloop_GsSOC-2026

3. Install dependencies:
   npm install

4. Run the development server:
   npm run dev

The application should now be running locally.

# Folder Structure

EcoLoop is a small multi-part web project with a Node.js/Express backend and two frontend app folders (a React/Next.js client and a TypeScript Next.js web app). It's organized for clarity during development: a backend API serving data and two frontends that share UI components and styles.

## High-level Tech

- Backend: Node.js + Express ([backend/package.json](backend/package.json))
- Frontend (client): React / Next.js (app directory) ([client/app](client/app))
- Frontend (web): TypeScript + Next.js (app directory) ([web/app](web/app))
- Dev tooling: `nodemon` for backend dev server

## Top-level layout

```
Ecoloop_GsSOC-2026/
├─ backend/            # Node.js + Express API
├─ client/             # React/Next.js frontend (JSX)
├─ web/                # TypeScript + Next.js frontend
├─ docs/               # Documentation
├─ README.md
├─ CONTRIBUTING.md
└─ ROADMAP.md
```

## Folder details (plain English)

- `backend/` — the data & API (think: the shopkeeper)
  - What it is: a small Node.js server that stores example product data and answers questions from the website.
  - Why it matters: the frontends ask this server for product lists and messages (so the website can show items).
  - Files to open: [backend/server.js](backend/server.js) (starts the server) and [backend/src/app.js](backend/src/app.js) (routes and middleware).
  - Quick example: sample products are in [backend/src/data/products.json](backend/src/data/products.json). To run it locally:

    ```powershell
    cd backend
    npm install
    npm run dev
    ```

- `client/` — the main website you see in the browser (think: the shop window)
  - What it is: a React/Next.js frontend that builds the visible pages (home, hero, lists, footer).
  - Why it matters: this is where designers and front-end developers change text, layout, and visual elements.
  - Files to open: [client/app/page.jsx](client/app/page.jsx) (homepage content) and [client/app/components/Footer.jsx](client/app/components/Footer.jsx) (site footer).
  - Note: `client` imports a small search component from `web` to avoid duplicating UI.

- `web/` — a TypeScript variant and shared UI (think: an alternate window or prototype)
  - What it is: another Next.js app using TypeScript. It can be used for experiments, typing, or gradual migration.
  - Why it matters: useful when you want stricter type checks or want to try new UI ideas without changing the main `client` app.
  - Files to open: [web/app/page.tsx](web/app/page.tsx) and [web/app/SearchBar.jsx](web/app/SearchBar.jsx).

- `docs/` — supporting documentation (API details, contribution guidelines, roadmap)
  - Look here for API descriptions (`docs/api.md`), how to contribute (`CONTRIBUTING.md`), and project plans (`ROADMAP.md`).

Tip for non-technical contributors: if you want to change wording or images on the site, edit files under `client/app/` (page text and components). If you want to change the sample product values shown in examples, edit `backend/src/data/products.json`.

##  .github Folder Explained

This folder contains configurations to streamline contributions:

- ISSUE_TEMPLATE → Predefined templates for bug reports and feature requests  
- PULL_REQUEST_TEMPLATE.md → Standard format for submitting pull requests  
- FUNDING.yml → Optional funding/sponsorship configuration  


#  EcoLoop – Sustainable Marketplace

EcoLoop is an open-source platform promoting sustainable living by enabling users to buy, sell, or donate unused items while supporting eco-friendly startups.

These help maintain consistency and improve collaboration.
##  Features
- List eco-friendly products
- Sell or donate unused items
- Search & filter listings
- User authentication
- Community-driven contributions

##  Vision
To build a circular economy platform that reduces waste and promotes reuse.

##  Tech Stack

- JavaScript / TypeScript
- Frontend: React / Next.js
- Backend: Node.js
- Database: MongoDB (planned)
- AI/ML (for future scope 👀)
  
## 🤝 Contributing
We welcome contributors of all levels!
Check `CONTRIBUTING.md` to get started.

## Beginner Friendly
Look for issues labeled `good first issue`.

##  Impact
Reducing waste, promoting reuse, and supporting sustainable businesses.

## API Documentation
Refer to docs/api.md for API details.

## 🗺️ Roadmap
Refer to ROADMAP.md for project plan.

## Sample Data
Dummy product data added in backend/src/data/products.json

## Screenshots

### Home Page
![Home Page](https://via.placeholder.com/800x400?text=Home+Page)

### Marketplace
![Marketplace](https://via.placeholder.com/800x400?text=Marketplace)

### Dashboard
![Dashboard](https://via.placeholder.com/800x400?text=Dashboard)

You can start by fixing small bugs or improving documentation.
