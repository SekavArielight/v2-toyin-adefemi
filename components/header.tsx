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
          <details className="mobile-nav group relative md:hidden" onToggle={(e) => {
            if (!(e.currentTarget as HTMLDetailsElement).open) {
              // Menu is being closed
              document.body.style.overflow = '';
            } else {
              // Menu is being opened
              document.body.style.overflow = 'hidden';
            }
          }}>
            <summary className="flex h-10 w-10 list-none items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm marker:content-none hover:bg-slate-50 cursor-pointer">
              <span className="sr-only">Toggle navigation menu</span>
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 transition-transform duration-200 group-open:rotate-90"
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
            <div className="fixed inset-0 z-40 overflow-y-auto bg-white/98 backdrop-blur-sm md:hidden" onClick={(e) => {
              const details = document.querySelector('.mobile-nav') as HTMLDetailsElement;
              if (details && e.target === e.currentTarget) {
                details.open = false;
              }
            }}>
              <div className="flex min-h-full flex-col" onClick={(e) => e.stopPropagation()}>
                {/* Close button area */}
                <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                  <span className="text-sm font-semibold text-slate-600">Menu</span>
                  <button
                    type="button"
                    onClick={() => {
                      const details = document.querySelector('.mobile-nav') as HTMLDetailsElement;
                      if (details) details.open = false;
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-slate-100"
                    aria-label="Close menu"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {/* Navigation items */}
                <nav className="flex flex-1 flex-col gap-2 overflow-y-auto px-6 py-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="rounded-xl px-4 py-4 text-lg font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950 transition-colors"
                      onClick={() => {
                        const details = document.querySelector('.mobile-nav') as HTMLDetailsElement;
                        if (details) details.open = false;
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                
                {/* CTA button at bottom */}
                <div className="border-t border-slate-100 px-6 py-6">
                  <a
                    href="/contact"
                    className="block rounded-xl bg-[var(--peach)] px-6 py-4 text-center text-base font-semibold text-white shadow-[0_8px_16px_rgba(254,143,104,0.3)] hover:bg-[var(--peach-deep)] transition-all"
                    onClick={() => {
                      const details = document.querySelector('.mobile-nav') as HTMLDetailsElement;
                      if (details) details.open = false;
                    }}
                  >
                    Book a Session
                  </a>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
