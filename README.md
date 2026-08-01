# Goals — Landing Page

> Official landing page for **Goals**, a customer loyalty & marketing platform built for restaurants and local
> businesses.

---

## Features

- **Hero section** — engaging headline with CTA buttons and animated gradient background
- **Solution overview** — three key benefits: marketing, analytics, and loyalty in one place
- **Onboarding steps** — visual 4-step guide to getting started
- **Pricing tiers** — three plan cards with feature breakdowns
- **Faq** — accordion-style frequently asked questions
- **Blog** — dynamically fetched articles with individual pages and tag filtering
- **Application forms** — phone, email, full name, and INN validation with input masking
- **Email delivery** — form submissions sent via Nodemailer (Yandex SMTP)
- **Modals & state** — Zustand-powered modals with body scroll lock and auto-dismiss errors
- **Animations** — smooth transitions powered by Framer Motion
- **Feature flags** — optional slider section toggled via env variable
- **SEO** — JSON-LD breadcrumbs, Next.js Metadata API, and optimized images

---

## Tech Stack

| Layer            | Technology               |
| ---------------- | ------------------------ |
| Framework        | Next.js 15 (App Router)  |
| Language         | TypeScript               |
| Styling          | Tailwind CSS v4          |
| State management | Zustand v5               |
| Animations       | Framer Motion v12        |
| Forms            | React Hook Form + Zod v4 |
| Input masking    | React IMask              |
| Email            | Nodemailer               |
| API client       | Kubb (OpenAPI codegen)   |
| Linting          | ESLint + Prettier        |
| Commit hooks     | Husky + commitlint       |

---

## Getting Started

**1. Install dependencies**

```bash
npm install
```

**2. Set up environment variables**

```bash
cp env_example .env
```

**3. Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
app/
  (public)/
    (home)/       # Landing page sections
    blog/         # Blog listing & article pages
    privacy/      # Privacy policy
    license/      # License page
  api/
    contact/      # Application form endpoint
    send-message/ # Message form endpoint
src/
  ui/
    core/         # Base UI components (Button, Input, Typography…)
    feature/      # Domain components (Tariffs, Faq, ApplicationForm…)
    shared/       # Layout components (Header, Footer, Modals…)
  constants/      # Static data and mock content
  context/        # React context providers
  hooks/          # Custom React hooks
  lib/            # Static assets and data files
  schemas/        # Zod validation schemas
  scripts/        # Document generation scripts
  utils/          # Utility functions
```

---

## Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```
