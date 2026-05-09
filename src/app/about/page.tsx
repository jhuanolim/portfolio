import { ScrollReveal } from "@/components/scroll-reveal";

const skills = [
  {
    category: "Systems & Data",
    tools: ["ETL Pipelines", "SQL/MSSQL/MySQL", "Python/R", "Git", "Excel/Sheets"],
    icon: "◈",
  },
  {
    category: "Analysis & Insight",
    tools: ["Power BI/Tableau", "Predictive Modelling", "Root Cause Analysis", "MyMarket Intelligence"],
    icon: "◎",
  },
  {
    category: "Strategy & Delivery",
    tools: ["Ecosystem Mapping", "Executive Presentations", "Project Management", "Cross-functional Leadership"],
    icon: "◇",
  },
  {
    category: "Product & Design",
    tools: ["User Journey Mapping", "Market Research", "Competitive Analysis", "Roadmap Thinking"],
    icon: "◉",
  },
];

const timeline = [
  {
    role: "Business Analyst",
    company: "Galen Growth",
    period: "Jan 2025 - Present",
    note: "Digital Health Intelligence, Singapore",
  },
  {
    role: "Data Analyst",
    company: "Public Healthcare",
    period: "Feb 2024 - Jan 2025",
    note: "Clinical Analytics, Singapore",
  },
  {
    role: "Software Engineer",
    company: "SaaS Film Industry",
    period: "Jan 2023 - Feb 2024",
    note: "ETL Pipelines,            New Zealand",
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
        Most people ask what I do. {" "}
          <span className="gradient-text">The more interesting answer is why I keep moving.</span>
        </h1>
      </ScrollReveal>

      <div className="grid gap-16 lg:grid-cols-[1fr_360px]">
        {/* Bio */}
        <ScrollReveal delay={0.1}>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              I started as a {" "}
              <span className="text-white font-medium">Software Engineer</span> at Vista Group in New Zealand, building ETL pipelines for a global SaaS platform used by cinemas globally.
              That foundation in systems thinking shaped how I approach every problem since. When I relocated to Singapore to be closer 
              to family, I moved deliberately into data, joining the {" "}
              <span className="text-white font-medium">National University Polyclinic</span> to work on clinical analytics across {" "}
              <span className="text-white font-medium">20,000+ patient records.</span> It was there I found my edge: <span className="text-white font-medium">spotting patterns in data that others hadn&apos;t flagged yet</span>, and translating them into 
              decisions that actually changed how physicians worked.
            </p>
            <p>
              That instinct carried me to <span className="text-white font-medium">Galen Growth</span>, where I lead strategic analytics across a global digital health ecosystem — mapping markets, 
              identifying growth drivers, and presenting directly to investor networks and founders. Where I&apos;m headed next is <span className="text-white font-medium">Product Management</span>,
              and everything I&apos;ve done so far has been pointed in that direction.
            </p>
            <p>
            After two years in Singapore without a decent climbing shoe resole service, I decided to fix it. On a trip to Vietnam I met master 
            resolers from Barcelona, kept in touch, and what started as a conversation on a crag became <span className="text-white font-medium">a business plan.</span> I&apos;ve handled everything 
            myself — market research, pricing, sourcing, branding — and the next step is training in Barcelona before bringing the craft back to 
            Singapore.
            </p>
            <p>
            Same instinct, different domain: <span className="text-white font-medium">spot a gap, validate it, build something real.</span> Outside of work I&apos;m most at home outdoors — bouldering, 
            freediving, and white water kayaking. Calculated risk, full commitment, eyes on what&apos;s ahead.
            </p>
          </div>

        </ScrollReveal>

        {/* Quick facts + Career timeline stacked in right column */}
        <ScrollReveal delay={0.2} direction="left">
          <div className="space-y-16">
            {/* Quick facts card */}
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
                    dd: "PMP in progress (Expected Q3 2026)",
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

            {/* Career timeline */}
            <div className="rounded-2xl border border-border bg-card p-6">
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
                    <div className="pb-5 flex-1 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium text-foreground">{role}</p>
                        <p className="text-xs text-primary mt-0.5">{company}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{note}</p>
                      </div>
                      <p className="text-xs text-muted-foreground whitespace-nowrap shrink-0 mt-0.5">{period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
