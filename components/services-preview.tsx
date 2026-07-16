"use client";

import { Calendar, Car, Droplets, Sparkles } from "lucide-react";

import {
  AnimatedItem,
  AnimatedSection,
  AnimatedStagger,
} from "@/components/animated-section";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  car: Car,
  sparkles: Sparkles,
  droplets: Droplets,
  calendar: Calendar,
} as const;

export function ServicesPreview() {
  return (
    <section id="services" className="bg-slate-50 py-16 sm:py-20 lg:py-28">
      <Container>
        <AnimatedSection>
          <SectionHeader
            eyebrow="Our Services"
            title="Premium car care at your doorstep"
            description="Four professional services designed to keep your car spotless — wherever you are in Chennai."
          />
        </AnimatedSection>

        <AnimatedStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <AnimatedItem key={service.id}>
                <article className="flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                    <Icon className="size-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </article>
              </AnimatedItem>
            );
          })}
        </AnimatedStagger>
      </Container>
    </section>
  );
}
