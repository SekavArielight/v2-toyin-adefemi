'use client';

import Link from 'next/link';

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/work-with-me" },
      { label: "Speaking", href: "/speaking" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Book a Session", href: "/contact" },
      { label: "Speaking Inquiries", href: "/speaking" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="page-glow mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Toyin Adefemi Counsels
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Biblical counseling for healing, identity, and restoration.
              </p>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-700">
                {column.title}
              </h4>
              <nav className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-[var(--peach)] hover:font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-slate-200" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-600 sm:flex-row">
          <p>&copy; {currentYear} Toyin Adefemi. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-[var(--peach)]">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[var(--peach)]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
