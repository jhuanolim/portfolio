import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata = {
  title: "Blog — Zachary Lim",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <ScrollReveal>
        <p className="mb-3 text-xs font-semibold tracking-widest text-primary uppercase">
          Writing
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Articles coming soon. 
        </h1>
        <p className="text-base text-muted-foreground sm:text-lg">
          {/* TODO: Add articles on product strategy, data storytelling, and digital health */}
          Articles coming soon.
        </p>
      </ScrollReveal>
    </div>
  );
}
