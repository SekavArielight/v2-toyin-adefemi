'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Individual Biblical Counseling",
    description:
      "Christ-centered sessions for emotional healing, identity, and spiritual renewal.",
  },
  {
    title: "Youth & Young Adult Support",
    description:
      "Safe, trauma-informed guidance for teens and young adults navigating life transitions.",
  },
  {
    title: "Family Counseling & Coaching",
    description:
      "Helping families rebuild connection, communication, and emotional safety.",
  },
  {
    title: "Workshops, Trainings & Speaking",
    description:
      "Biblical, trauma-informed teachings for churches, ministries, and youth organizations.",
  },
];

const pillars = [
  {
    icon: "1",
    title: "Biblical Foundation",
    description: "Rooted in Scripture and the heart of Christ — every conversation anchored in God's truth and redemptive love.",
  },
  {
    icon: "2",
    title: "Trauma-Informed Care",
    description: "Safety, compassion, and emotional wisdom — creating brave spaces where healing can take root and flourish.",
  },
  {
    icon: "3",
    title: "Practical Tools",
    description: "Emotional regulation, mindset renewal, and resilient next steps — equipping you for lasting transformation.",
  },
];

const audiences = [
  {
    title: "Youth & Teens",
    description: "Support for emotional wounds, identity struggles, and life transitions.",
    bgGradient: "from-sky-100 to-cyan-50",
  },
  {
    title: "Young Adults",
    description: "Guidance for purpose, healing, relationships, and spiritual growth.",
    bgGradient: "from-emerald-100 to-teal-50",
  },
  {
    title: "Families",
    description: "Restoring communication, connection, and Christ-centered unity.",
    bgGradient: "from-amber-100 to-orange-50",
  },
];

const features = [
  { title: "Trauma-Informed Expertise", description: "Trained in trauma-focused approaches with deep understanding of how past wounds affect present behavior." },
  { title: "Biblical Foundation", description: "Every session is grounded in Scripture and Christ's example of compassionate, redemptive love." },
  { title: "Youth Specialist", description: "Special focus on teen and young adult development, identity formation, and life transitions." },
  { title: "Safe & Confidential", description: "Create emotionally safe environments where clients feel fully seen, heard, and respected." },
  { title: "Practical Tools", description: "Learn evidence-based emotional regulation, communication skills, and resilience strategies." },
  { title: "Culturally Responsive", description: "Honor diverse backgrounds, experiences, and perspectives in all counseling work." },
];

const resources = [
  { title: "Trauma-informed Worksheets", iconType: "document" },
  { title: "Faith & Healing Resources", iconType: "star" },
  { title: "Stress Relief Guides", iconType: "leaf" },
];

function ResourceIcon({ type }: { type: string }) {
  if (type === "document") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[var(--peach)]" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
      </svg>
    );
  }

  if (type === "star") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[var(--peach)]" aria-hidden="true">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[var(--peach)]" aria-hidden="true">
      <path d="M17.92 7.02C17.45 4.18 14.97 2 12 2c-2.97 0-5.45 2.18-5.92 5.02C3.97 7.55 2 9.69 2 12s1.97 4.45 4.08 4.98C6.55 19.82 9.03 22 12 22c2.97 0 5.45-2.18 5.92-5.02C20.03 16.45 22 14.31 22 12s-1.97-4.45-4.08-4.98zM12 20c-2.33 0-4.32-1.45-5.12-3.5h10.24c-.8 2.05-2.79 3.5-5.12 3.5zm0-14c2.33 0 4.32 1.45 5.12 3.5H6.88c.8-2.05 2.79-3.5 5.12-3.5z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-slate-50">
        <div className="hero-bg-image absolute inset-0">
          <Image
            src="/images/hero-mountain.jpg"
            alt="Calming mountain landscape"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="hero-mask relative mx-auto grid max-w-7xl gap-8 px-6 pb-20 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-28 lg:pt-24">
          <div className="flex max-w-2xl flex-col justify-center py-12 lg:py-20">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
              Trauma-informed, Scripture-centered care
            </p>
            <h1 className="max-w-xl text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Healing begins with a safe place to be fully seen.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              Biblical counseling for youth, young adults, and families rooted
              in compassion, emotional wisdom, and Christ-centered restoration.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
              Welcome to a space where young people and families can process
              pain, rebuild identity, and experience emotional and spiritual
              renewal. You do not have to navigate life&apos;s hardest seasons
              alone.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-[var(--peach)] px-8 py-4 text-base font-semibold text-white shadow-[0_16px_30px_rgba(254,143,104,0.34)] hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
              >
                Book a Session
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-sm hover:border-slate-400 hover:bg-slate-50"
              >
                Learn About Toyin
              </a>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </section>

      {/* Meet Your Counselor — Asymmetric Layout */}
      <section className="relative bg-white px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_480px] lg:items-center">
            <div>
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
                Meet Your Counselor
              </p>
              <h2 className="text-5xl font-bold leading-tight text-slate-900">
                My heart is to help young people and families heal, grow, and rediscover their God-given identity.
              </h2>
              <div className="mt-6 h-1 w-20 bg-[var(--peach)]" />

              <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-600">
                Toyin Adefemi is a Professional Counselor and trauma-informed coach dedicated to helping youth, young adults, and families experience healing and identity in Christ. With a compassionate, Spirit-led approach, she blends clinical insight with biblical truth.
              </p>

              {/* Styled Pull Quote */}
              <blockquote className="mt-10 border-l-4 border-[var(--peach)] pl-8">
                <span className="text-6xl text-[var(--peach)]">"</span>
                <p className="mt-2 text-2xl italic leading-relaxed text-slate-800">
                  My calling is simple: to help young people and families experience healing, identity, and transformation through Christ-centered, trauma-informed care.
                </p>
              </blockquote>

              {/* Credential Pills */}
              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "Master of Arts (Biblical Counseling)",
                  "Board-Certified Youth Coach",
                  "Trauma Care Provider",
                  "Certified EI Coach",
                  "Trauma-Focused CBT Trained",
                ].map((cred) => (
                  <span
                    key={cred}
                    className="inline-flex items-center rounded-full bg-sky-50 px-5 py-2 text-sm font-medium text-slate-700 border border-sky-100"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </div>

            {/* Large Portrait - Image F */}
            <div className="relative h-[500px] overflow-hidden rounded-[2.5rem] lg:h-[600px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-YZxKi6TwlKhYxOPPoD5qTw1H3kPbq0.png"
                alt="Counselor with tablet, warm and professional"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services — 2x2 Grid with Rich Cards */}
      <section className="relative bg-slate-50 px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-5xl font-bold tracking-tight text-slate-900">
            Counseling & Support Services
          </h2>
          <div className="mb-16 h-1 w-20 bg-[var(--peach)]" />

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="group border-l-4 border-[var(--peach)] bg-white p-10 shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all hover:shadow-[0_16px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1"
              >
                <h3 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {service.description}
                </p>
                <a
                  href="/work-with-me"
                  className="mt-8 inline-flex rounded-xl bg-[var(--peach)] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_20px_rgba(254,143,104,0.26)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
                >
                  Learn More
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Pillars — Horizontal Feature Blocks */}
      <section className="relative bg-white px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-5xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
            My Approach
          </p>
          <h2 className="text-5xl font-bold tracking-tight text-slate-900">
            Trauma-Informed. Scripture-Centered. Spirit-Led.
          </h2>
          <div className="mt-6 h-1 w-20 bg-[var(--peach)]" />

          <p className="mt-10 max-w-3xl text-xl leading-8 text-slate-600">
            My counseling approach integrates biblical truth with evidence-based emotional and behavioral tools. Every session honors your story and helps you walk confidently in your God-given identity.
          </p>

          <div className="mt-16 grid gap-8">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="flex gap-8 rounded-[1.5rem] bg-gradient-to-r from-sky-50 to-cyan-50 p-10 border border-sky-100"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--peach)] text-lg font-bold text-white">
                    {pillar.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-lg leading-7 text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who I Serve — Three Distinct Warm Cards with Images */}
      <section className="relative bg-slate-50 px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold tracking-tight text-slate-900">
            Who I Serve
          </h2>
          <div className="mt-6 h-1 w-20 bg-[var(--peach)]" />

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {/* Youth & Teens - Image K */}
            <article key="youth" className="rounded-[2rem] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/31-CjPSwxVDLHerIyuAt0JnIdqvIJXfG7.png"
                  alt="Joyful diverse teenagers"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gradient-to-br from-sky-100 to-cyan-50 p-10 border-t border-white/80">
                <h3 className="text-2xl font-bold text-slate-900">
                  Youth & Teens
                </h3>
                <p className="mt-4 leading-7 text-slate-700">
                  Support for emotional wounds, identity struggles, and life transitions.
                </p>
              </div>
            </article>

            {/* Young Adults - Image G */}
            <article key="young-adults" className="rounded-[2rem] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-gstSfUowvZbzXDAodEUX9tkJPwKDwZ.png"
                  alt="Young woman in counseling, reflective"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gradient-to-br from-emerald-100 to-teal-50 p-10 border-t border-white/80">
                <h3 className="text-2xl font-bold text-slate-900">
                  Young Adults
                </h3>
                <p className="mt-4 leading-7 text-slate-700">
                  Guidance for purpose, healing, relationships, and spiritual growth.
                </p>
              </div>
            </article>

            {/* Families - Image J */}
            <article key="families" className="rounded-[2rem] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/30-5VzkBd4wSpzKZuUCYV4lAmXARqd52b.png"
                  alt="Group from behind with arms around each other"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gradient-to-br from-amber-100 to-orange-50 p-10 border-t border-white/80">
                <h3 className="text-2xl font-bold text-slate-900">
                  Families
                </h3>
                <p className="mt-4 leading-7 text-slate-700">
                  Restoring communication, connection, and Christ-centered unity.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonial — Full-Width Atmospheric Section with Image H */}
      <section className="relative overflow-hidden px-6 py-40 lg:px-10 lg:py-52">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-iEHcpVqIezI4GA4u3lQLY70fe146GQ.png"
            alt="Hands held together supportively"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="text-7xl text-[var(--peach)] leading-none">❝</span>
          <p className="mt-4 text-3xl italic leading-relaxed text-white sm:text-4xl">
            Clients describe Toyin&apos;s counseling as compassionate, grounding, and deeply Spirit-led—a place where they feel understood, supported, and guided toward emotional and spiritual wholeness.
          </p>
          <p className="mt-10 text-sm font-semibold uppercase tracking-wider text-slate-200">
            Stories of Healing
          </p>
        </div>
      </section>

      {/* Why Choose Toyin — Six Feature Tiles */}
      <section className="relative bg-white px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-5xl font-bold tracking-tight text-slate-900">
            Why Clients Choose Toyin
          </h2>
          <div className="mt-6 h-1 w-20 bg-[var(--peach)]" />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <article
                key={feature.title}
                className={`rounded-[1.5rem] border border-white/80 p-8 ${idx % 2 === 0 ? 'bg-sky-50' : 'bg-emerald-50'}`}
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Free Tools & Guides */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-5xl font-bold tracking-tight text-slate-900">
            Free Tools & Guides
          </h2>
          <div className="mt-6 h-1 w-20 bg-[var(--peach)]" />

          <p className="mt-10 max-w-2xl text-xl text-slate-600">
            Encouraging resources designed to support your healing journey between sessions.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {resources.map((resource) => (
              <article
                key={resource.title}
                className="rounded-[1.5rem] border border-white/80 bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
              >
                <div className="mb-4">
                  <ResourceIcon type={resource.iconType} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-4 text-slate-600">
                  Thoughtfully designed resource to support your emotional and spiritual growth.
                </p>
                <a
                  href="/contact"
                  className="mt-8 inline-flex rounded-xl bg-[var(--peach)] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_20px_rgba(254,143,104,0.26)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
                >
                  Download
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture Banner — Reverent Pause */}
      <section className="relative bg-slate-800 px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="italic text-2xl leading-relaxed text-white sm:text-3xl">
            "For God has not given us a spirit of fear, but of power and of love and of a sound mind."
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-[var(--peach)]">
            2 Timothy 1:7
          </p>
        </div>
      </section>

      {/* Final CTA — Warm, Emotionally Resonant */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-sky-50 to-white px-6 py-40 lg:px-10 lg:py-52">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold leading-tight text-slate-900 sm:text-6xl">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-2xl leading-relaxed text-slate-600">
            Whether you&apos;re seeking emotional clarity, spiritual renewal, or support for your family, I&apos;d be honored to walk with you through this transformative season.
          </p>

          <div className="mt-12 flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--peach)] px-12 py-6 text-lg font-semibold text-white shadow-[0_16px_30px_rgba(254,143,104,0.34)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-1"
            >
              Book a Session
            </a>
          </div>

          <p className="mt-10 text-sm text-slate-500">
            I respond to all inquiries within 24-48 hours.
          </p>
        </div>
      </section>

    </>
  );
}
