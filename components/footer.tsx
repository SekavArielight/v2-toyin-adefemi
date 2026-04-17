'use client';

import Link from 'next/link';
import Image from 'next/image';

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/work-with-me" },
  { label: "Resources", href: "/speaking" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: "facebook", href: "https://facebook.com" },
  { icon: "instagram", href: "https://instagram.com" },
  { icon: "linkedin", href: "https://linkedin.com" },
];

export function Footer() {
  return (
    <footer className="bg-slate-700 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Toyin Adefemi Counsels"
              width={190}
              height={68}
              className="h-auto w-[140px]"
            />
          </div>

          {/* Navigation */}
          <nav className="flex items-center justify-center gap-6 text-sm md:gap-8">
            {navigationLinks.map((link, index) => (
              <div key={link.label} className="flex items-center gap-6">
                <Link
                  href={link.href}
                  className="text-white hover:text-slate-200 transition-colors"
                >
                  {link.label}
                </Link>
                {index < navigationLinks.length - 1 && (
                  <span className="text-slate-400">|</span>
                )}
              </div>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-6">
            {[
              { label: "Facebook", icon: "f", href: "#" },
              { label: "Instagram", icon: "@", href: "#" },
              { label: "LinkedIn", icon: "in", href: "#" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-600 text-white hover:bg-slate-500 transition-colors"
                aria-label={social.label}
              >
                <span className="text-sm font-semibold">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-slate-600 pt-6 text-center text-sm text-slate-300">
          © 2026 Toyin Adefemi Counseling Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
