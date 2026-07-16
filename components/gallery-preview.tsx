"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import {
  AnimatedItem,
  AnimatedSection,
  AnimatedStagger,
} from "@/components/animated-section";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { GALLERY_BEFORE_AFTER } from "@/lib/constants";

function BeforeAfterImage({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: "Before" | "After";
}) {
  const isBefore = label === "Before";

  return (
    <div className="relative flex-1 overflow-hidden">
      <div className="relative aspect-[4/3] w-full bg-slate-200">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 400px"
        />
        <div
          className={`absolute inset-0 ${
            isBefore ? "bg-slate-900/25" : "bg-brand-primary/10"
          }`}
        />
        <span
          className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
            isBefore
              ? "bg-slate-900/80 text-white"
              : "bg-brand-primary text-white"
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

export function GalleryPreview() {
  return (
    <section id="gallery" className="bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        <AnimatedSection>
          <SectionHeader
            eyebrow="Gallery"
            title="Before & after transformations"
            description="See the difference our premium doorstep wash makes."
          />
        </AnimatedSection>

        <AnimatedStagger className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {GALLERY_BEFORE_AFTER.map((item) => (
            <AnimatedItem key={item.id}>
              <article className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                  <h3 className="font-bold text-slate-900">{item.label}</h3>
                  <ArrowRight className="size-4 text-brand-primary" />
                </div>

                <div className="flex divide-x divide-slate-200">
                  <BeforeAfterImage
                    src={item.before}
                    alt={`${item.label} before`}
                    label="Before"
                  />
                  <BeforeAfterImage
                    src={item.after}
                    alt={`${item.label} after`}
                    label="After"
                  />
                </div>
              </article>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </Container>
    </section>
  );
}
