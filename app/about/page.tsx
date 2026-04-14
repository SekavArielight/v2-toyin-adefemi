'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-curve relative -mt-px overflow-hidden bg-soft-blue-strong">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-bold text-5xl md:text-6xl text-foreground">
              Meet Toyin Adefemi
            </h1>
            <p className="mb-2 text-lg text-muted">
              Biblical Counselor • Youth Mental Health Coach • Trauma-Informed Practitioner
            </p>
          </div>
        </div>
      </section>

      {/* My Heart for Healing */}
      <section className="section-curve relative py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold text-foreground">My Heart for Healing</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted">
              <p>
                I'm Toyin Adefemi — a Biblical Counselor, youth advocate, and emotional wellness 
                practitioner called to walk alongside young people and families as they heal, grow, and 
                rediscover their God-given identity. My work is rooted in compassion, Scripture, and a deep 
                belief that emotional and spiritual restoration is possible for every person.
              </p>
              <p>
                For over a decade, I've served youth, young adults, and families navigating trauma, identity 
                confusion, emotional wounds, and life transitions. My approach blends clinical insight, 
                biblical truth, and Spirit-led wisdom, creating a safe space where clients feel seen, 
                supported, and strengthened.
              </p>
              <p>
                I believe healing is not just about overcoming pain — it's about becoming who God 
                designed you to be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Calling */}
      <section className="section-curve relative py-16 bg-soft-blue lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold text-foreground">My Calling</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted">
              <p>
                My calling is simple: To help young people and families experience healing, identity, and 
                transformation through Christ-centered, trauma-informed care.
              </p>
              <p>
                I am passionate about creating emotionally safe environments where clients can process 
                their stories, rebuild confidence, and step boldly into their purpose. Whether I'm 
                counseling a teen, supporting a young adult, or guiding a family, my heart is to reflect the 
                love, truth, and gentleness of Jesus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="section-curve relative py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold text-foreground">My Professional Background</h2>
            <p className="mb-8 text-lg leading-relaxed text-muted">
              I bring a unique blend of biblical counseling, mental health coaching, and emotional 
              intelligence training to every session.
            </p>
            <div>
              <h3 className="mb-4 text-xl font-semibold text-foreground">Credentials & Training</h3>
              <ul className="space-y-3 text-lg text-muted">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 text-peach">✓</span>
                  <span>Master of Arts in Human Services (Biblical Counseling Focus)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 text-peach">✓</span>
                  <span>Board-Certified Youth Mental Health Coach</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 text-peach">✓</span>
                  <span>Certified Christian Trauma Care Provider</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 text-peach">✓</span>
                  <span>Certified Emotional Intelligence Life Coach</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 text-peach">✓</span>
                  <span>NLP Practitioner</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 text-peach">✓</span>
                  <span>Trauma-Informed & Faith-Rooted Care Specialist</span>
                </li>
              </ul>
              <p className="mt-8 text-lg leading-relaxed text-muted">
                These tools allow me to support clients holistically — emotionally, spiritually, and 
                relationally — while honoring their individual stories and cultural backgrounds.
              </p>
            </div>
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

      {/* My Approach */}
      <section className="section-curve relative py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold text-foreground">My Approach</h2>
            <p className="mb-10 text-lg leading-relaxed text-muted">
              My counseling style is rooted in compassion, Scripture, and emotional wisdom.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">Trauma-Informed</h3>
                <p className="text-muted leading-relaxed">
                  Honoring your story with gentleness and safety
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">Biblically Grounded</h3>
                <p className="text-muted leading-relaxed">
                  Rooted in Scripture and the heart of Christ
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">Emotionally Intelligent</h3>
                <p className="text-muted leading-relaxed">
                  Helping you understand and regulate your emotions
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">Practical & Transformational</h3>
                <p className="text-muted leading-relaxed">
                  Offering tools you can apply in daily life
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">Culturally Sensitive</h3>
                <p className="text-muted leading-relaxed">
                  Respecting your background, identity, and lived experience
                </p>
              </div>
            </div>
            <p className="mt-10 text-lg leading-relaxed text-muted">
              Every session is a partnership — you bring your story, and I bring tools, compassion, and 
              Christ-centered guidance.
            </p>
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
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="mb-10 max-w-2xl text-lg text-muted leading-relaxed">
            I would be honored to walk with you through this season. Your story matters, and your healing matters.
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-peach px-8 py-3 font-semibold text-white transition-colors hover:bg-peach-deep"
            >
              Book a Session
            </Link>
            <Link
              href="/#work-with-me"
              className="rounded-lg border-2 border-foreground px-8 py-3 font-semibold text-foreground transition-colors hover:bg-soft-blue"
            >
              Work With Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
