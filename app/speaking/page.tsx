'use client';

import Link from 'next/link';

export default function Speaking() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-curve relative -mt-px overflow-hidden bg-soft-blue-strong">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-bold text-5xl md:text-6xl text-foreground">
              Speaking & Workshops
            </h1>
            <p className="mb-4 text-xl text-muted">
              Biblical, trauma-informed messages that bring healing, identity, and transformation.
            </p>
            <p className="mb-10 text-lg text-muted leading-relaxed">
              Toyin Adefemi is a sought-after speaker and trainer who equips youth, young adults, 
              families, churches, and leaders with biblical truth, emotional wisdom, and practical tools 
              for healing and spiritual growth.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-peach px-8 py-3 font-semibold text-white transition-colors hover:bg-peach-deep"
            >
              Inquire About Speaking
            </Link>
          </div>
        </div>
      </section>

      {/* What I Offer */}
      <section className="section-curve relative py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
            What I Offer
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-soft-blue p-8">
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                Youth & Young Adult Talks
              </h3>
              <p className="text-muted leading-relaxed">
                Engaging messages for teens and young adults on identity, healing, relationships, 
                purpose, emotional wellness, and navigating life transitions in a Christ-centered way.
              </p>
            </div>
            <div className="rounded-xl bg-soft-blue p-8">
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                Family & Parenting Workshops
              </h3>
              <p className="text-muted leading-relaxed">
                Equipping parents and families with tools for emotional health, communication, 
                trauma healing, and building Christ-centered relationships.
              </p>
            </div>
            <div className="rounded-xl bg-soft-blue p-8">
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                Church & Ministry Training
              </h3>
              <p className="text-muted leading-relaxed">
                Workshops for church leaders, counselors, and ministry workers on trauma-informed 
                care, biblical counseling, and spiritual formation.
              </p>
            </div>
            <div className="rounded-xl bg-soft-blue p-8">
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                Corporate & Organizational Sessions
              </h3>
              <p className="text-muted leading-relaxed">
                Trainings for organizations, schools, and workplaces on mental health, emotional 
                wellness, leadership, and healthy workplace culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Topics */}
      <section className="section-curve relative py-16 bg-soft-blue lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold text-foreground">Featured Topics</h2>
            <div className="space-y-4">
              <div className="rounded-lg bg-white p-6 soft-card">
                <h3 className="font-semibold text-foreground mb-2">Identity in Christ: Rediscovering Your Worth</h3>
                <p className="text-muted text-sm">A biblical exploration of identity, self-worth, and walking confidently in God's design for your life.</p>
              </div>
              <div className="rounded-lg bg-white p-6 soft-card">
                <h3 className="font-semibold text-foreground mb-2">Healing from Trauma: A Christ-Centered Journey</h3>
                <p className="text-muted text-sm">Understanding trauma, its impact, and how Scripture-centered care facilitates emotional and spiritual restoration.</p>
              </div>
              <div className="rounded-lg bg-white p-6 soft-card">
                <h3 className="font-semibold text-foreground mb-2">Emotional Wellness for Teens & Young Adults</h3>
                <p className="text-muted text-sm">Navigating emotions, managing anxiety, building resilience, and experiencing wholeness during critical life stages.</p>
              </div>
              <div className="rounded-lg bg-white p-6 soft-card">
                <h3 className="font-semibold text-foreground mb-2">Parenting With Purpose: Building Emotional Safe Homes</h3>
                <p className="text-muted text-sm">Creating emotionally secure family environments where children feel seen, valued, and equipped to thrive.</p>
              </div>
              <div className="rounded-lg bg-white p-6 soft-card">
                <h3 className="font-semibold text-foreground mb-2">Trauma-Informed Ministry & Care</h3>
                <p className="text-muted text-sm">Equipping churches and ministries to recognize and respond to trauma with biblical compassion and wisdom.</p>
              </div>
              <div className="rounded-lg bg-white p-6 soft-card">
                <h3 className="font-semibold text-foreground mb-2">Spiritual Renewal & Faith-Rooted Transformation</h3>
                <p className="text-muted text-sm">A deeper journey into Scripture, spiritual formation, and experiencing authentic renewal in Christ.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Toyin as a Speaker */}
      <section className="section-curve relative py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold text-foreground">Why Book Toyin?</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted">
              <p>
                Toyin brings a unique blend of professional expertise, biblical depth, and compassionate 
                delivery to every speaking engagement. With over a decade of experience in youth ministry, 
                counseling, and spiritual formation, she connects with audiences at all levels.
              </p>
              <p>
                Her presentations are engaging, biblically sound, practically applicable, and spiritually 
                transformative. Whether speaking to youth groups, families, churches, or organizational leaders, 
                Toyin's messages equip people with tools, hope, and a deeper understanding of Christ's healing 
                and redemptive power.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-curve relative py-16 bg-soft-blue lg:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
          <h2 className="mb-6 text-3xl font-bold text-foreground">
            Let's Bring Healing & Hope to Your Community
          </h2>
          <p className="mb-10 max-w-2xl text-lg text-muted leading-relaxed">
            Whether you're planning a youth event, church series, family conference, or organizational workshop, 
            I would be honored to speak and serve your community.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-peach px-8 py-3 font-semibold text-white transition-colors hover:bg-peach-deep"
          >
            Inquire About Speaking
          </Link>
        </div>
      </section>
    </main>
  );
}
