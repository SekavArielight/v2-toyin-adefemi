'use client';

import Link from 'next/link';
import Image from 'next/image';

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/work-with-me" },
  { label: "Speaking", href: "/speaking" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--peach)] bg-slate-700 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3 md:items-start">
          {/* Logo Left */}
          <div className="flex flex-col items-start">
            <Image
              src="/images/logo.png"
              alt="Toyin Adefemi Counsels"
              width={190}
              height={68}
              className="h-auto w-[140px]"
            />
          </div>

          {/* Navigation Center */}
          <nav className="flex flex-col gap-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons Right */}
          <div className="flex flex-col items-start gap-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Connect With Us
            </p>
            <div className="flex gap-4">
              {[
                { label: "Facebook", icon: "f", href: "https://facebook.com" },
                { label: "Instagram", icon: "@", href: "https://instagram.com" },
                { label: "LinkedIn", icon: "in", href: "https://linkedin.com" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-600 text-sm font-semibold text-white transition-colors hover:bg-[var(--peach)]"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Strip */}
      <div className="border-t border-slate-600 bg-slate-800 px-6 py-6 text-center text-sm text-slate-400">
        © 2026 Toyin Adefemi Counseling Services. All rights reserved.
      </div>
    </footer>
  );
}
