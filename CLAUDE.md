# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

# CLAUDE.md — Zachary's Portfolio Website

## Project Overview
This is a personal portfolio website for Zachary Lim — a Tech-savvy Business Strategist 
and aspiring Product Manager with a background in software engineering and data analytics. 
The site is built to attract PM and senior BA roles in Singapore, showcase case studies, 
and tell a compelling personal story.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Content**: MDX (for case studies and blog posts)
- **Animations**: Framer Motion
- **Charts / Data Viz**: Recharts
- **UI Components**: shadcn/ui
- **Deployment**: Vercel

## Design Principles
- Minimalist and clean — lots of whitespace, no clutter
- Storytelling-first — the site should feel like a narrative, not a resume
- Mobile responsive at all breakpoints
- Fast load times — prefer static generation (SSG) over client-side rendering where possible
- Subtle animations only — nothing flashy or distracting

## Site Structure
- `/` — Hero / Landing section
- `/about` — Personal story and background
- `/projects` — Case studies grid
- `/projects/[slug]` — Individual case study pages (MDX-powered)
- `/blog` — Thought leadership articles (future, scaffold but don't build yet)
- `/contact` — Contact section

## Content & Tone Guidelines
- Tone: Confident, clear, human — not corporate or overly technical
- Write in first person
- Frame all work experience around: problem → insight → solution → outcome
- Avoid listing tools and technologies as the focus — lead with impact and decisions
- Zachary's USP: rare combination of engineering depth + data storytelling + business strategy

## Key Personal Details (for About page and Hero copy)
- Based in Singapore, open to Singapore roles only
- Background: Software Engineer → Data Analyst → Business Analyst → aspiring PM
- Current role: Business Analyst at Galen Growth (Digital Health Intelligence)
- Education: BSc Statistics and Computer Science, University of Auckland
- Certifications: PMP in progress (Expected Q2 2026)
- Adventure sports: Bouldering / sport climbing, freediving, scuba diving, white water kayaking
- Travel style: Adventure travel tied to sports (climbing trips, dive trips)
- Outside work identity: Calculated risk-taker, curious explorer

## Project / Case Study Guidelines
- Each case study lives as an MDX file under `/content/projects/`
- Case study structure: Overview → Problem → Approach → Key Insights → Outcome → Reflections
- Include data visualizations (Recharts) where relevant to show analytical depth

## Component Conventions
- Use shadcn/ui as the base component library
- Custom components go in `/components`
- Keep components small and single-responsibility
- Use Framer Motion for page transitions and scroll-reveal animations only
- No carousels, no autoplay, no intrusive popups

## Do Not
- Do not use `create-react-app` or any non-Next.js React setup
- Do not use inline styles — Tailwind classes only
- Do not hardcode case study content in components — always source from MDX files
- Do not add placeholder or lorem ipsum content — leave sections empty if content isn't ready
- Do not over-engineer — keep the codebase simple and maintainable
