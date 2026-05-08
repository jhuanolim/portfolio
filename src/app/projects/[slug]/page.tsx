import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.frontmatter.title} — Zachary Lim`,
    description: project.frontmatter.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const { frontmatter, content } = project;

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">

      <Link
        href="/projects"
        className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
      >
        <span className="transition-transform group-hover:-translate-x-1">←</span>
        Back to Projects
      </Link>

      <div className="mb-5 flex flex-wrap gap-2">
        {frontmatter.tags?.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="text-xs border-border bg-secondary/60 text-muted-foreground"
          >
            {tag}
          </Badge>
        ))}
      </div>

      <h1 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">
        {frontmatter.title}
      </h1>
      <p className="mb-2 text-lg text-muted-foreground">
        {frontmatter.description}
      </p>
      <p className="mb-16 text-sm text-muted-foreground/40">{frontmatter.date}</p>

      <article className="prose prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-border prose-h2:pb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-em:text-foreground/80">
        <MDXRemote source={content} />
      </article>
    </div>
  );
}
