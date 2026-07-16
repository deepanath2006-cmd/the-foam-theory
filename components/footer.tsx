import Link from "next/link";
import { Phone } from "lucide-react";

import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="#home" className="inline-block rounded-xl bg-white px-3 py-2">
              <Logo />
            </Link>
            <p className="mt-4 text-base font-bold text-white">{SITE.name}</p>
            <a
              href={`tel:${SITE.phone}`}
              className="mt-3 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
            >
              <Phone className="size-4 shrink-0" />
              {SITE.phoneDisplay}
            </a>
            <p className="mt-2 text-sm text-slate-400">{SITE.location}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-500">
            © {currentYear} {SITE.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
