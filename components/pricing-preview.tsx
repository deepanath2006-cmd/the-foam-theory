"use client";

import {
  AnimatedItem,
  AnimatedSection,
  AnimatedStagger,
} from "@/components/animated-section";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { useBooking } from "@/components/booking-provider";
import { Button } from "@/components/ui/button";
import { PRICING_PLANS } from "@/lib/constants";

export function PricingPreview() {
  const { openBooking } = useBooking();

  return (
    <section id="pricing" className="bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        <AnimatedSection>
          <SectionHeader
            eyebrow="Pricing"
            title="Simple, transparent pricing"
            description="Premium doorstep car care with no hidden fees."
          />
        </AnimatedSection>

        <AnimatedStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRICING_PLANS.map((plan) => (
            <AnimatedItem key={plan.name}>
              <article className="flex h-full flex-col rounded-3xl border border-slate-200/80 bg-slate-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>

                <div className="mt-5 flex items-baseline gap-1">
                  {plan.contactUs ? (
                    <span className="text-2xl font-bold tracking-tight text-brand-primary">
                      Contact Us
                    </span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold tracking-tight text-slate-900">
                        ₹{plan.price}
                      </span>
                      <span className="text-sm text-slate-500">/ visit</span>
                    </>
                  )}
                </div>

                <Button
                  onClick={openBooking}
                  className="mt-8 h-11 w-full rounded-full bg-brand-primary text-white shadow-md shadow-brand-primary/20 hover:bg-brand-primary/90"
                >
                  {plan.contactUs ? "Get Quote" : "Book Now"}
                </Button>
              </article>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </Container>
    </section>
  );
}
