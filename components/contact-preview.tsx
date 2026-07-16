"use client";

import { MapPin, MessageCircle, Phone } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { SITE, WHATSAPP_URL } from "@/lib/constants";

export function ContactPreview() {
  return (
    <section id="contact" className="bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        <AnimatedSection>
          <SectionHeader
            eyebrow="Contact"
            title="Get in touch"
            description="Book your doorstep wash or reach out with any questions."
          />
        </AnimatedSection>

        <div className="mx-auto max-w-2xl">
          <AnimatedSection delay={0.1}>
            <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-8 text-center shadow-sm sm:p-10">
              <div className="mx-auto mb-6 inline-flex size-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                <Phone className="size-6" />
              </div>

              <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
                Phone
              </p>
              <a
                href={`tel:${SITE.phone}`}
                className="mt-2 block text-2xl font-bold text-slate-900 transition-colors hover:text-brand-primary sm:text-3xl"
              >
                {SITE.phoneDisplay}
              </a>

              <div className="mt-4 inline-flex items-center gap-2 text-slate-600">
                <MapPin className="size-4 text-brand-primary" />
                <span className="font-medium">{SITE.location}</span>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button
                  nativeButton={false}
                  render={
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  className="h-12 flex-1 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] sm:max-w-[200px]"
                >
                  <MessageCircle className="size-4" data-icon="inline-start" />
                  WhatsApp
                </Button>
                <Button
                  nativeButton={false}
                  render={<a href={`tel:${SITE.phone}`} />}
                  className="h-12 flex-1 rounded-full bg-brand-primary text-white hover:bg-brand-primary/90 sm:max-w-[200px]"
                >
                  <Phone className="size-4" data-icon="inline-start" />
                  Call Now
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-8">
            <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100 shadow-sm">
              <div className="flex h-64 items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 sm:h-80">
                <iframe
                  title="THE FOAM THEORY — Chennai location"
                  src="https://maps.google.com/maps?q=Chennai%2C%20India&z=11&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
