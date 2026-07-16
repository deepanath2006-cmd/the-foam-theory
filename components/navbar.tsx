"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { useBooking } from "@/components/booking-provider";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const closeMobile = () => setIsMobileOpen(false);

  const handleBookNow = () => {
    closeMobile();
    openBooking();
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl"
          : "bg-white/80 backdrop-blur-md"
      )}
    >
      <Container>
        <nav className="flex h-[5rem] items-center justify-between gap-4 sm:h-[5.25rem] lg:h-[5.5rem] lg:gap-6">
          <Link
            href="#home"
            className="flex shrink-0 items-center py-1 transition-opacity hover:opacity-90"
          >
 <Logo priority />
           </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 lg:hidden"
            onClick={() => setIsMobileOpen((prev) => !prev)}
          >
            {isMobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-slate-200 bg-white lg:hidden"
          >
            <Container className="py-5">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMobile}
                      className="block rounded-xl px-4 py-3.5 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-5 border-t border-slate-100 pt-5">
                <Button
                  onClick={handleBookNow}
                  className="h-11 w-full rounded-full bg-brand-primary text-white shadow-md shadow-brand-primary/25 hover:bg-brand-primary/90"
                >
                  Book Now
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
