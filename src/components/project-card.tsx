"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  tags: string[];
  slug: string;
  image?: string;
  index: number;
}

export function ProjectCard({ title, tags, slug, image, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <Link href={`/projects/${slug}`} className="group block rounded-2xl overflow-hidden border border-border bg-card">
        {/* Image area */}
        <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              unoptimized
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            /* Placeholder when no image is set yet */
            <div className="absolute inset-0 flex items-center justify-center bg-secondary">
              <span className="text-4xl text-muted-foreground/20">◎</span>
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-colors duration-300" />

          {/* View details button — appears on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/60 bg-background/80 backdrop-blur-sm px-5 py-2.5 text-sm font-medium text-primary">
              View Details
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </span>
          </div>
        </div>

        {/* Text below image — fixed height so all cards align */}
        <div className="h-20 px-5 py-4 flex flex-col justify-center">
          <h2 className="font-semibold text-foreground text-sm leading-snug line-clamp-2">
            {title}
          </h2>
          <p className="mt-1.5 text-xs text-muted-foreground truncate">
            {tags.join(" · ")}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
