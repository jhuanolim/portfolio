import { ScrollReveal } from "@/components/scroll-reveal";

const skills = [
  {
    category: "Strategic Analytics",
    tools: ["Power BI", "Tableau", "Python", "R"],
    icon: "◈",
  },
  {
    category: "Data Engineering",
    tools: ["SQL", "ETL Pipelines", "MSSQL", "MySQL"],
    icon: "◎",
  },
  {
    category: "Stakeholder Communication",
    tools: ["Executive Presentations", "Cross-functional Leadership"],
    icon: "◇",
  },
  {
    category: "Product Thinking",
    tools: ["Roadmap Analysis", "Market Research", "User Journey Mapping"],
    icon: "◉",
  },
];

const timeline = [
  {
    role: "Business Analyst",
    company: "Galen Growth",
    period: "Present",
    note: "Digital Health Intelligence",
  },
  {
    role: "Data Analyst",
    company: "Public Healthcare",
    period: "Prior",
    note: "Clinical Analytics, Singapore",
  },
  {
    role: "Software Engineer",
    company: "SaaS Company",
    period: "Earlier",
    note: "ETL Pipelines, New Zealand",
  },
];

export const metadata = {
  title: "About — Zachary Lim",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">

      <ScrollReveal>
        <p className="mb-3 text-xs font-semibold tracking-widest text-primary uppercase">
          About Me
        </p>
        <h1 className="mb-16 text-4xl font-bold tracking-tight sm:text-5xl">
          A deliberate career,{" "}
          <span className="gradient-text">built across disciplines.</span>
        </h1>
      </ScrollReveal>

      <div className="grid gap-16 lg:grid-cols-[1fr_360px]">
        {/* Bio */}
        <ScrollReveal delay={0.1}>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              My career has been anything but a straight line — and I think
              that&apos;s the point.
            </p>
            <p>
              I started as a Software Engineer building ETL pipelines for a
              global SaaS company in New Zealand, moved into clinical data
              analytics at a Singapore public healthcare institution, and now
              lead strategic analytics and ecosystem mapping at a digital health
              intelligence firm. Each move was deliberate: getting closer to the
              decisions that matter.
            </p>
            <p>
              What drives me is owning the{" "}
              <em className="text-foreground not-italic font-medium">why</em>{" "}
              behind a product — not just building it, but shaping its direction.
              I&apos;m currently working toward Product Management, where my
              technical depth, data storytelling, and cross-functional experience
              can come together in one role.
            </p>
            <p>
              Outside of work, I&apos;m an adventure sports enthusiast —
              bouldering in Vietnam, freediving in Thailand, white water kayaking
              wherever the river takes me. The same mindset applies: calculated
              risk, full commitment, eyes on what&apos;s ahead.
            </p>
          </div>

          {/* Career timeline */}
          <div className="mt-12">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Career Path
            </p>
            <div className="space-y-0">
              {timeline.map(({ role, company, period, note }, i) => (
                <div key={role} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-border my-1" />
                    )}
                  </div>
                  <div className="pb-6">
                    <p className="text-sm font-medium text-foreground">{role}</p>
                    <p className="text-xs text-primary mt-0.5">{company}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {note} · {period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Quick facts card */}
        <ScrollReveal delay={0.2} direction="left">
          <div className="rounded-2xl border border-border bg-card p-6 relative overflow-hidden">
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Quick Facts
            </h2>
            <dl className="space-y-5">
              {[
                { dt: "Location", dd: "Singapore" },
                { dt: "Current Role", dd: "Business Analyst, Galen Growth" },
                {
                  dt: "Education",
                  dd: "BSc Statistics & Computer Science, University of Auckland",
                },
                {
                  dt: "Certification",
                  dd: "PMP in progress (Expected Q2 2026)",
                },
                {
                  dt: "Interests",
                  dd: "Bouldering · Freediving · White Water Kayaking",
                },
              ].map(({ dt, dd }) => (
                <div key={dt} className="border-l-2 border-border pl-3">
                  <dt className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {dt}
                  </dt>
                  <dd className="mt-1 text-sm text-foreground">{dd}</dd>
                </div>
              ))}
            </dl>
          </div>
        </ScrollReveal>
      </div>

      {/* Skills */}
      <ScrollReveal delay={0.1} className="mt-24">
        <p className="mb-3 text-xs font-semibold tracking-widest text-primary uppercase">
          Skills &amp; Tools
        </p>
        <h2 className="mb-10 text-2xl font-semibold tracking-tight">
          What I bring to the table
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ category, tools, icon }, i) => (
            <ScrollReveal key={category} delay={0.1 + i * 0.07}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:bg-secondary/40 transition-all duration-300">
                <div className="mb-4 text-xl text-primary">{icon}</div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground group-hover:text-primary/80 transition-colors">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {tools.map((tool) => (
                    <li
                      key={tool}
                      className="text-sm text-foreground/80 flex items-center gap-2"
                    >
                      <span className="h-px w-3 bg-primary/40 shrink-0" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
