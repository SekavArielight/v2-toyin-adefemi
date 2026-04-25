'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/work-with-me" },
  { label: "Speaking", href: "/speaking" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
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
        <nav className="hidden items-center gap-10 text-sm font-medium text-slate-700 md:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative pb-1 transition-colors ${
                  isActive ? 'text-slate-900' : 'hover:text-slate-900'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--peach)]" />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="/contact"
            className="hidden rounded-xl bg-[var(--peach)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_16px_rgba(254,143,104,0.3)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5 sm:inline-flex"
          >
            Book a Session
          </a>
          <details className="mobile-nav relative md:hidden">
            <summary className="flex h-10 w-10 list-none items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm marker:content-none hover:bg-slate-50 cursor-pointer">
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
            <nav className="absolute right-0 top-[calc(100%+0.75rem)] w-[min(16rem,calc(100vw-1.5rem))] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-[0_24px_50px_rgba(36,51,66,0.14)]">
              <div className="flex flex-col gap-2">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-[var(--peach)]/10 text-slate-900'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <a
                  href="/contact"
                  className="mt-2 rounded-xl bg-[var(--peach)] px-4 py-3 text-center text-sm font-semibold text-white hover:bg-[var(--peach-deep)] transition-all"
                >
                  Book a Session
                </a>
              </div>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
