import { getAllProjects } from "@/lib/mdx";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ProjectCard } from "@/components/project-card";

export const metadata = {
  title: "Projects — Zachary Lim",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <ScrollReveal>
        <p className="mb-3 text-xs font-semibold tracking-widest text-primary uppercase">
          Case Studies
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Selected Work
        </h1>
        <p className="mb-16 max-w-xl text-base text-muted-foreground sm:text-lg">
          A collection of projects spanning data strategy, product analysis, and
          systems thinking across healthcare and digital health.
        </p>
      </ScrollReveal>

      {projects.length === 0 ? (
        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground">Case studies coming soon.</p>
        </ScrollReveal>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              index={i}
              title={project.title}
              tags={project.tags ?? []}
              slug={project.slug}
              image={project.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}
