'use client';

import Link from 'next/link';

export default function WorkWithMe() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-curve relative -mt-px overflow-hidden bg-soft-blue-strong">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-bold text-5xl md:text-6xl text-foreground">
              Work With Toyin Adefemi
            </h1>
            <p className="mb-4 text-xl text-muted">
              Biblical, trauma-informed counseling and coaching for youth, young adults, and families.
            </p>
            <p className="mb-10 text-lg text-muted leading-relaxed">
              Whether you're seeking emotional healing, spiritual clarity, or support for your family, 
              I offer Christ-centered, evidence-informed care designed to help you grow, heal, and thrive.
            </p>
            <div className="flex flex-col gap-4 justify-center sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-peach px-8 py-3 font-semibold text-white transition-colors hover:bg-peach-deep"
              >
                Book a Session
              </Link>
              <Link
                href="#approach"
                className="rounded-lg border-2 border-foreground px-8 py-3 font-semibold text-foreground transition-colors hover:bg-soft-blue"
              >
                Learn About My Approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How I Can Support You */}
      <section className="section-curve relative py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
            How I Can Support You
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-soft-blue p-8">
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                Individual Biblical Counseling
              </h3>
              <p className="text-muted leading-relaxed">
                A safe, confidential space to process trauma, emotions, identity, and life transitions 
                through Scripture-centered, trauma-informed care.
              </p>
            </div>
            <div className="rounded-xl bg-soft-blue p-8">
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                Youth & Young Adult Counseling
              </h3>
              <p className="text-muted leading-relaxed">
                Support for teens and young adults navigating emotional overwhelm, anxiety, identity 
                struggles, and spiritual confusion.
              </p>
            </div>
            <div className="rounded-xl bg-soft-blue p-8">
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                Family Counseling & Coaching
              </h3>
              <p className="text-muted leading-relaxed">
                Helping families rebuild communication, trust, emotional safety, and Christ-centered unity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section id="approach" className="section-curve relative py-16 bg-soft-blue lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-foreground">
              Trauma-Informed. Scripture-Centered. Spirit-Led.
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-muted">
              My approach blends biblical truth with evidence-based emotional and behavioral tools. 
              Every session is designed to honor your story, support your healing, and help you walk 
              confidently in your God-given identity.
            </p>
            <div className="grid gap-8 md:grid-cols-3 mt-10">
              <div className="rounded-lg bg-white p-6 soft-card">
                <h3 className="mb-3 text-lg font-semibold text-foreground">Biblical Foundation</h3>
                <p className="text-muted leading-relaxed">
                  Rooted in Scripture and the heart of Christ
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 soft-card">
                <h3 className="mb-3 text-lg font-semibold text-foreground">Trauma-Informed Care</h3>
                <p className="text-muted leading-relaxed">
                  Safety, compassion, and emotional wisdom
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 soft-card">
                <h3 className="mb-3 text-lg font-semibold text-foreground">Practical Tools</h3>
                <p className="text-muted leading-relaxed">
                  Emotional regulation, mindset renewal, and resilience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Credentials */}
      <section className="section-curve relative py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold text-foreground">Professional Training & Certifications</h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 text-peach text-lg">✓</span>
                <span className="text-lg text-muted">Master of Arts in Human Services (Biblical Counseling Focus)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 text-peach text-lg">✓</span>
                <span className="text-lg text-muted">Board-Certified Youth Mental Health Coach</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 text-peach text-lg">✓</span>
                <span className="text-lg text-muted">Certified Christian Trauma Care Provider</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 text-peach text-lg">✓</span>
                <span className="text-lg text-muted">Certified Emotional Intelligence Life Coach</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 text-peach text-lg">✓</span>
                <span className="text-lg text-muted">NLP Practitioner</span>
              </li>
            </ul>
            <p className="text-lg leading-relaxed text-muted">
              These tools allow me to support clients holistically — emotionally, spiritually, and 
              relationally — while honoring their individual stories and cultural backgrounds.
            </p>
          </div>
        </div>
      </section>

      {/* Who I Serve */}
      <section className="section-curve relative py-16 bg-soft-blue lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Who I Serve</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 soft-card">
              <h3 className="mb-4 text-xl font-semibold text-foreground">Youth & Teens</h3>
              <p className="text-muted leading-relaxed">
                Support for emotional wounds, identity struggles, and life transitions.
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 soft-card">
              <h3 className="mb-4 text-xl font-semibold text-foreground">Young Adults</h3>
              <p className="text-muted leading-relaxed">
                Guidance for purpose, healing, relationships, and spiritual growth.
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 soft-card">
              <h3 className="mb-4 text-xl font-semibold text-foreground">Families</h3>
              <p className="text-muted leading-relaxed">
                Restoring communication, connection, and Christ-centered unity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Working With Me Looks Like */}
      <section className="section-curve relative py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
            What Working With Me Looks Like
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="relative">
              <div className="rounded-full w-12 h-12 bg-peach flex items-center justify-center text-white font-bold mb-4">
                1
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Book a Session</h3>
              <p className="text-muted leading-relaxed">
                Choose a time that works for you and complete a brief intake form.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-full w-12 h-12 bg-peach flex items-center justify-center text-white font-bold mb-4">
                2
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Begin Your Journey</h3>
              <p className="text-muted leading-relaxed">
                We meet virtually in a safe, confidential, Christ-centered environment.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-full w-12 h-12 bg-peach flex items-center justify-center text-white font-bold mb-4">
                3
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Grow, Heal & Transform</h3>
              <p className="text-muted leading-relaxed">
                You receive tools, support, and biblical guidance to walk in emotional and spiritual wholeness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Banner */}
      <section className="section-curve relative overflow-hidden bg-soft-blue-strong py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
          <p className="text-xl italic text-foreground">
            "May our sons in their youth be like plants full grown, our daughters like corner pillars 
            cut for the structure of a palace." — Psalm 144:12
          </p>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            This Scripture reflects my heart for every young person and family I serve — that they would 
            grow strong, rooted, confident, and beautifully formed by God's hand.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-curve relative py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
          <h2 className="mb-6 text-3xl font-bold text-foreground">
            Let's Begin Your Journey Toward Healing and Wholeness
          </h2>
          <p className="mb-10 max-w-2xl text-lg text-muted leading-relaxed">
            I would be honored to walk with you through this season. Your story matters, and your healing matters.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-peach px-8 py-3 font-semibold text-white transition-colors hover:bg-peach-deep"
          >
            Book a Session
          </Link>
        </div>
      </section>
    </main>
  );
}
