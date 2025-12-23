# ISF — Indian School of Founders Website

A UI-first, performance-conscious web experience built for a founder-focused education brand.

This project showcases our approach to **frontend architecture, design systems, and interaction design** in a real-world, client-facing environment.

> ⚠️ This repository contains proprietary client work.  
> The code is shared here strictly for portfolio and evaluation purposes.

---

## Project Context

The Indian School of Founders (ISF) website was designed and developed to communicate
clarity, credibility, and momentum to early-stage founders and builders.

The core challenge was balancing:

- strong visual identity
- information-dense content
- conversion-focused CTAs
- mobile-first usability

while keeping the codebase **clean, maintainable, and scalable**.

---

## Key Focus Areas

### UI / UX

- Intentional typography hierarchy and rhythm
- Section-based layout with clear visual boundaries
- Subtle motion used only where it adds meaning
- Full-screen mobile navigation with native interaction patterns
- Clear CTA prioritization without overwhelming the user

### Engineering

- Component-driven architecture
- Separation of UI primitives vs section-level components
- Minimal runtime animation overhead
- Predictable state management
- Clean file organization for long-term maintainability

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** JavaScript (ES6+)
- **Styling:** Tailwind CSS
- **UI Primitives:** shadcn/ui
- **Icons:** IconBuddy
- **Animations:** CSS-first, selective Framer Motion
- **Fonts:** Koulen, Poppins
- **Deployment:** Client-hosted / Vercel

---

## Notable Implementation Details

- **Header & Navigation**

  - Scroll-aware glass header
  - Full-screen mobile navigation with proper hit-testing
  - Accessibility-conscious interaction patterns

- **Hero Section**

  - Strong typographic identity
  - Controlled visual emphasis for key messaging
  - Background treatment without performance-heavy assets

- **Mentors Section**

  - Horizontally scrollable cards
  - Visual consistency across varied media assets
  - Clean spacing and alignment across breakpoints

- **FAQ Section**
  - Removed unnecessary text animations for readability
  - Active question highlighting to maintain user context
  - Clean accordion behavior without JS-heavy state logic

---

## Project Structure

```bash
hellofounder/
├── .gitignore
├── .vscode/
│   └── settings.json
├── components.json
├── CONTRIBUTING.md
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public/
│   ├── icons/
│   │   ├── chart.svg
│   │   ├── community.svg
│   │   ├── feedback.svg
│   │   ├── flag.svg
│   │   ├── legal.svg
│   │   ├── lightbulb.svg
│   │   ├── linkedin.svg
│   │   ├── megaphone.svg
│   │   ├── pen.svg
│   │   ├── presentation.svg
│   │   ├── rocket.svg
│   │   ├── sales.svg
│   │   ├── target.svg
│   │   ├── trophy.svg
│   │   └── users.svg
│   └── images/
│       ├── (All Req Images)
├── README.md
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── tailwind.config.js
│   ├── components/
│   │   ├── apply-cta.jsx
│   │   ├── BackgroundSection.jsx
│   │   ├── CalendarModal.jsx
│   │   ├── certificate.jsx
│   │   ├── Cohort.jsx
│   │   ├── curriculum.jsx
│   │   ├── darkveil.js
│   │   ├── footer.jsx
│   │   ├── header-2.jsx
│   │   ├── hero.js
│   │   ├── InsideHelloFounder.jsx
│   │   ├── mbutton.js
│   │   ├── MentorsSectionLR.jsx
│   │   ├── MentorsSectionRL.jsx
│   │   ├── menu-toggle-icon.jsx
│   │   ├── PricingCard.jsx
│   │   ├── ReadOnlyRangeCalendar.jsx
│   │   ├── skills.jsx
│   │   ├── SpotlightCard.jsx
│   │   ├── text-reveal-faqs.jsx
│   │   ├── ui/
│   │   │   ├── accordion.jsx
│   │   │   ├── button.jsx
│   │   │   ├── calendar.jsx
│   │   │   ├── interactive-hover-button.jsx
│   │   │   ├── MentorCard.jsx
│   │   │   └── sparkles-text.jsx
│   │   └── use-scroll.jsx
│   └── lib/
│       ├── fonts.js
│       └── utils.js
└── TODO.md

```

This structure keeps:

- UI primitives reusable
- sections easy to reason about
- animations isolated and optional

---

## Design Philosophy

This project intentionally avoids:

- over-animation
- unnecessary abstraction
- premature optimization

Instead, the focus is on:

- clarity over cleverness
- maintainability over novelty
- UI decisions that scale with content growth

---

## What This Project Demonstrates

- Ability to translate product goals into UI decisions
- Comfort working on **real client constraints**
- Strong attention to interaction details
- Production-level frontend hygiene
- Tasteful use of modern tooling without overengineering

---

## Collaboration Model

All contributors participated across design, interaction, and implementation.
Ownership was shared and decisions were made collaboratively.

> Decisions were reviewed collectively with emphasis on tradeoffs and constraints

- Arnab Mistry — https://github.com/ArnabMistry
- Ojaswi Joshi — https://github.com/OjaswiJoshi13
- Suraj Kiran Shewale — https://github.com/surajiiitn
- Ayush Kathal — https://github.com/ayushkathal2005
- Swapnil — https://github.com/Swapnil220705

## Notes

This repository is **not open for public contribution** and does not include an open-source license.

If you’re reviewing this as part of a hiring or collaboration process and would like
additional context, we would be happy to walk through architectural or design decisions.
