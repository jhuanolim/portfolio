# Zachary Lim — Portfolio Site

Personal portfolio built with Next.js 14, Tailwind CSS, shadcn/ui, Framer Motion, and MDX.

---

## Running the site locally

```bash
# Install dependencies (first time only)
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> If you see a white screen or 500 error after making changes, delete the `.next` cache folder and restart:
> ```bash
> Remove-Item -Recurse -Force .next   # PowerShell
> npm run dev
> ```

---

## Deploying to Vercel

1. Push the repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the GitHub repo
3. Vercel auto-detects Next.js — no config needed
4. Every `git push` to `main` triggers a new deployment automatically

---

## Updating each page

### Hero (`/`)
**File:** `src/app/page.tsx`

- Edit the headline, subheadline, and body copy directly in the JSX
- The four stat tiles (Years in Tech, Domains, etc.) are in the `stats` array at the top of the file
- The two CTA buttons link to `/projects` and `/contact`

### About (`/about`)
**File:** `src/app/about/page.tsx`

- Bio paragraphs are in the `<p>` tags inside the `ScrollReveal` block
- Career timeline entries are in the `timeline` array at the top of the file
- Skills/tools are in the `skills` array — each entry has a `category`, `tools` list, and `icon` glyph
- Quick facts (location, role, education, etc.) are in the inline array inside the `dl` block

### Projects (`/projects`)
**File:** `src/app/projects/page.tsx` — page shell only, no content to edit here.

All project content lives in MDX files — see the **Projects** section below.

### Contact (`/contact`)
**File:** `src/app/contact/page.tsx`

- Email, LinkedIn, and GitHub links are in the `links` array at the top of the file
- The contact form is UI-only (no backend yet) — update the placeholder text or labels as needed

### Blog (`/blog`)
**File:** `src/app/blog/page.tsx`

Scaffolded but empty. Add article cards here when ready.

### Navbar
**File:** `src/components/navbar.tsx`

- Nav links are in the `navLinks` array at the top of the file

### Footer
**File:** `src/app/layout.tsx`

- Footer links (LinkedIn, GitHub, Email) and copyright text are at the bottom of the `RootLayout` component

---

## Managing projects (case studies)

Each project is a single MDX file in:

```
content/projects/
├── climbing-shoe-resole.mdx
├── healthcare-analytics.mdx
└── digital-health-mapping.mdx
```

### Frontmatter fields

Every MDX file starts with a frontmatter block:

```yaml
---
title: "Your Project Title"
description: "One sentence shown on the project grid card."
date: "2025-06-01"
tags: ["Strategy", "Data Analytics"]
slug: "your-project-slug"
image: "/images/projects/your-image.png"
---
```

| Field | Purpose |
|---|---|
| `title` | Shown on the card and the case study page header |
| `description` | Shown on the case study page below the title |
| `date` | Used to sort projects (newest first) |
| `tags` | Shown below the title on the card, joined by `·` |
| `slug` | Must match the filename (e.g. `healthcare-analytics.mdx` → `"healthcare-analytics"`) |
| `image` | Path to image/GIF relative to `public/` — e.g. `/images/projects/foo.png` |

### Adding a project image or GIF

1. Drop the file into `public/images/projects/`
2. Update the `image:` field in the MDX frontmatter to match the filename
3. Hard refresh the browser (Ctrl+Shift+R) — no restart needed

Supported formats: `.jpg`, `.png`, `.gif`, `.webp`

### Adding a new project

1. Create a new file in `content/projects/`, e.g. `my-new-project.mdx`
2. Copy the frontmatter block from an existing file and update all fields
3. Set `slug` to match the filename (without `.mdx`)
4. Write the case study content below the frontmatter using the section structure:

```mdx
## Overview
## Problem
## Approach
## Key Insights
## Outcome
## Reflections
```

The project grid and routing update automatically — no code changes needed.

### Adding charts and data visualisations to a case study

Charts are built with [Recharts](https://recharts.org). To embed one in an MDX case study:

**Step 1 — Create a chart component**

Create a file in `src/components/charts/`, e.g. `src/components/charts/admissions-chart.tsx`:

```tsx
"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", value: 120 },
  { month: "Feb", value: 145 },
  { month: "Mar", value: 98 },
];

export function AdmissionsChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="hsl(158 64% 52%)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
```

**Step 2 — Pass the component into MDXRemote**

Open `src/app/projects/[slug]/page.tsx` and add your component to the `components` prop:

```tsx
import { AdmissionsChart } from "@/components/charts/admissions-chart";

// Inside the page:
<MDXRemote source={content} components={{ AdmissionsChart }} />
```

**Step 3 — Use it in the MDX file**

```mdx
## Key Insights

Monthly admissions increased 21% after the dashboard rollout:

<AdmissionsChart />
```

Available Recharts chart types: `BarChart`, `LineChart`, `AreaChart`, `PieChart`, `RadarChart`. All follow the same pattern — swap the component name and pass your data array.
