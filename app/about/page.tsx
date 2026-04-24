import Image from 'next/image';

export default function About() {
  const credentials = [
    "Master of Arts in Human Services (Biblical Counseling Focus)",
    "Board-Certified Youth Mental Health Coach",
    "Certified Christian Trauma Care Provider",
    "Certified Emotional Intelligence Life Coach",
    "Trained in Trauma-Focused Cognitive Behavioral Therapy",
  ];

  return (
    <>
      {/* Magazine-Style Hero Section */}
      <section className="relative overflow-hidden bg-white px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_480px] lg:items-center">
            {/* Text: Bold Typographic Treatment */}
            <div>
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
                About
              </p>
              <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-7xl lg:text-8xl">
                Toyin <span className="block text-[var(--peach)]">Adefemi</span>
              </h1>
              <p className="mt-8 max-w-xl text-2xl leading-relaxed text-slate-600">
                Biblical Counselor, Youth Advocate, Emotional Wellness Practitioner
              </p>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                I help young people and families heal, grow, and step boldly into their God-given identity through Christ-centered, trauma-informed care rooted in compassion and Scripture.
              </p>
            </div>

            {/* Large Portrait Image */}
            <div className="relative h-[500px] overflow-hidden rounded-[3rem] lg:h-[600px]">
              <Image
                src="/images/toyin-portrait.jpg"
                alt="Portrait of Toyin Adefemi"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* My Heart for Healing — Asymmetric Layout */}
      <section className="relative bg-slate-50 px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-20 lg:grid-cols-[480px_1fr] lg:items-start">
            {/* Portrait on Left for Variety */}
            <div className="order-2 lg:order-1">
              <div className="sticky top-32 space-y-6">
                <h2 className="text-5xl font-bold leading-tight text-slate-900">
                  My Heart<br />for Healing
                </h2>
                <div className="h-1 w-20 bg-[var(--peach)]" />
              </div>
            </div>

            {/* Content on Right */}
            <div className="order-1 space-y-8 lg:order-2">
              <p className="text-xl leading-8 text-slate-600">
                I&apos;m Toyin Adefemi — a Biblical Counselor, youth advocate, and emotional wellness practitioner called to walk alongside young people and families as they heal, grow, and rediscover their God-given identity. My work is rooted in compassion, Scripture, and a deep belief that emotional and spiritual restoration is possible for every person.
              </p>

              <p className="text-xl leading-8 text-slate-600">
                For over a decade, I&apos;ve served youth, young adults, and families navigating trauma, identity confusion, emotional wounds, and life transitions. My approach blends clinical insight, biblical truth, and Spirit-led wisdom, creating a safe space where clients feel seen, supported, and strengthened.
              </p>

              <blockquote className="border-l-4 border-[var(--peach)] pl-6 text-2xl font-light leading-10 text-slate-800">
                &quot;Healing is not just about overcoming pain — it&apos;s about becoming who God designed you to be.&quot;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* My Calling — Flipped Asymmetric with Image E */}
      <section className="relative bg-white px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-20 lg:grid-cols-[1fr_440px]">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold leading-tight text-slate-900">
                  My Calling
                </h2>
                <div className="mt-6 h-1 w-20 bg-[var(--peach)]" />
              </div>

              <p className="text-xl leading-8 text-slate-600">
                My calling is simple: To help young people and families experience healing, identity, and transformation through Christ-centered, trauma-informed care.
              </p>

              <p className="text-xl leading-8 text-slate-600">
                I am passionate about creating emotionally safe environments where clients can process their stories, rebuild confidence, and step boldly into their purpose. Whether I&apos;m counseling a teen, supporting a young adult, or guiding a family, my heart is to reflect the love, truth, and gentleness of Jesus.
              </p>
            </div>

            {/* Image E - One-on-one counseling session */}
            <div className="relative h-[500px] overflow-hidden rounded-[2rem]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-PP3b2FIhmDYtGarg7jonW91ebBHnrl.webp"
                alt="One-on-one counseling session with warm window light"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Support Visual Break */}
      <section className="relative overflow-hidden px-6 py-0 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="relative h-64 overflow-hidden rounded-[2rem] md:h-96">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-icvWhFNHuWubzvdIxEbA6weFN6VE1D.webp"
              alt="Woman being comforted by group, emotional support"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-sky-500/30" />
          </div>
        </div>
      </section>

      {/* Professional Background with Badge Pills */}
      <section className="relative bg-slate-50 px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-5xl font-bold tracking-tight text-slate-900">
            Professional Background
          </h2>
          <div className="mt-6 h-1 w-20 bg-[var(--peach)]" />

          <p className="mt-10 text-xl leading-8 text-slate-600">
            I bring a unique blend of biblical counseling, mental health coaching, and emotional intelligence training to every session.
          </p>

          <div className="mt-12">
            <h3 className="mb-8 text-2xl font-bold text-slate-900">Credentials & Training</h3>
            <div className="flex flex-wrap gap-3">
              {credentials.map((credential) => (
                <span
                  key={credential}
                  className="inline-flex items-center rounded-full bg-sky-100 px-6 py-3 text-sm font-medium text-slate-800 border border-sky-200"
                >
                  {credential}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* My Approach with Image H Break */}
      <section className="relative bg-white px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-5xl font-bold tracking-tight text-slate-900">
            My Approach to Healing
          </h2>
          <div className="mt-6 h-1 w-20 bg-[var(--peach)]" />

          <p className="mt-10 max-w-3xl text-xl leading-8 text-slate-600">
            My counseling approach integrates biblical truth with evidence-based emotional and behavioral tools. Every session is designed to honor your story, support your healing, and help you walk confidently in your God-given identity.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Biblical Foundation",
                description: "Rooted in Scripture and the heart of Christ — every conversation anchored in God's truth and redemptive love.",
                icon: "book",
              },
              {
                title: "Trauma-Informed Care",
                description: "Safety, compassion, and emotional wisdom — creating brave spaces where healing can take root and flourish.",
                icon: "heart",
              },
              {
                title: "Practical Tools",
                description: "Emotional regulation, mindset renewal, and resilient next steps — equipping you for lasting transformation.",
                icon: "tools",
              },
            ].map((pillar) => (
              <article
                key={pillar.title}
                className="border-l-4 border-[var(--peach)] rounded-lg bg-white p-8 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              >
                <div className="mb-4">
                  {pillar.icon === "book" && (
                    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[var(--peach)]" aria-hidden="true">
                      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                    </svg>
                  )}
                  {pillar.icon === "heart" && (
                    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[var(--peach)]" aria-hidden="true">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  )}
                  {pillar.icon === "tools" && (
                    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[var(--peach)]" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>

          {/* Image H - Hands held together with overlay */}
          <div className="mt-24 relative overflow-hidden rounded-[2.5rem] h-64">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-hskpGkVkXncEE10BoJcxFHbYnDRas7.webp"
              alt="Hands held together in support"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-sky-500/40" />
          </div>
        </div>
      </section>

      {/* Hands-Held Visual Break Before Final CTA */}
      {/* <section className="relative overflow-hidden px-6 py-0 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="relative h-64 overflow-hidden rounded-[2rem] md:h-96">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-hskpGkVkXncEE10BoJcxFHbYnDRas7.webp"
              alt="Hands held together in support and unity"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-sky-500/30" />
          </div>
        </div>
      </section> */}

      {/* Warm, Intentional CTA Closing with Image D */}
      <section className="relative overflow-hidden px-6 py-28 lg:px-10 lg:py-40">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-icvWhFNHuWubzvdIxEbA6weFN6VE1D.webp"
            alt="Woman being comforted by group"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/50" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold leading-tight text-white sm:text-6xl">
            Let&apos;s Begin Your Journey
          </h2>
          <p className="mt-8 text-2xl leading-relaxed text-slate-100">
            If you&apos;re ready to experience healing, discover your identity, and step boldly into your purpose, I&apos;d be honored to walk alongside you. Let&apos;s create a safe space where your story matters and your growth is possible.
          </p>

          <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--peach)] px-10 py-4 text-lg font-semibold text-white shadow-[0_16px_30px_rgba(254,143,104,0.34)] hover:bg-[var(--peach-deep)] hover:-translate-y-0.5 transition-all"
            >
              Book a Session
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-10 py-4 text-lg font-semibold text-slate-700 shadow-sm hover:border-slate-400 hover:bg-slate-50 transition-all"
            >
              Get in Touch
            </a>
          </div>

          <p className="mt-10 text-sm text-slate-300">
            Ready to talk? You can also call or email to schedule your first session.
          </p>
        </div>
      </section>
    </>
  );
}
