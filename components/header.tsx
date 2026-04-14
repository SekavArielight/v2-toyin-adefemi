'use client';

import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/work-with-me" },
  { label: "Speaking", href: "/speaking" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Toyin Adefemi Counsels"
            width={190}
            height={68}
            priority
            className="h-auto w-[120px] md:w-[150px]"
          />
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="border-b-2 border-transparent pb-1 hover:border-[var(--peach)] hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <details className="mobile-nav relative md:hidden">
          <summary className="flex h-11 w-11 list-none items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm marker:content-none">
            <span className="sr-only">Toggle navigation menu</span>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 transition-transform duration-200"
              aria-hidden="true"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </summary>
          <div className="absolute right-0 top-[calc(100%+0.75rem)] w-[min(18rem,calc(100vw-3rem))] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-[0_24px_50px_rgba(36,51,66,0.14)]">
            <nav className="flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
