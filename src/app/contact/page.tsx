import { ScrollReveal } from "@/components/scroll-reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Contact — Zachary Lim",
};

const links = [
  {
    label: "Email",
    value: "jhuanolim@gmail.com",
    href: "mailto:jhuanolim@gmail.com",
    icon: "✉",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/zlim",
    href: "https://www.linkedin.com/in/zlim/",
    icon: "in",
  },
  {
    label: "GitHub",
    value: "github.com/jhuanolim",
    href: "https://github.com/jhuanolim/",
    icon: "</>",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">

      <ScrollReveal>
        <p className="mb-3 text-xs font-semibold tracking-widest text-primary uppercase">
          Get In Touch
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Let&apos;s <span className="gradient-text">talk.</span>
        </h1>
        <p className="mb-16 max-w-xl text-base text-muted-foreground sm:text-lg">
          Whether you have a role in mind, a project to collaborate on, or just
          want to connect — my inbox is open.
        </p>
      </ScrollReveal>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Links */}
        <ScrollReveal delay={0.1}>
          <div className="space-y-4">
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Find Me
            </p>
            {links.map(({ label, value, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:bg-secondary/40 hover:shadow-[0_0_20px_hsl(158_64%_52%/0.07)]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xs font-bold text-primary group-hover:bg-primary/20 transition-colors">
                  {icon}
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {value}
                  </p>
                </div>
                <span className="ml-auto text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary">
                  →
                </span>
              </a>
            ))}
          </div>
        </ScrollReveal>

        {/* Form */}
        <ScrollReveal delay={0.15} direction="left">
          <div className="rounded-2xl border border-border bg-card p-8 relative overflow-hidden">
            <form className="relative space-y-5">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="bg-secondary/40 border-border focus:border-primary/50 focus-visible:ring-primary/20 placeholder:text-muted-foreground/50"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-secondary/40 border-border focus:border-primary/50 focus-visible:ring-primary/20 placeholder:text-muted-foreground/50"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="What's on your mind?"
                  rows={5}
                  className="bg-secondary/40 border-border focus:border-primary/50 focus-visible:ring-primary/20 placeholder:text-muted-foreground/50 resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_hsl(158_64%_52%/0.25)] hover:shadow-[0_0_30px_hsl(158_64%_52%/0.4)] transition-shadow"
              >
                Send Message
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Form submission coming soon — email me directly in the meantime.
              </p>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
