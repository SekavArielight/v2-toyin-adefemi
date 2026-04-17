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
      {/* Hero Section */}
      <section className="section-ribbon section-curve relative overflow-hidden py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              Meet Your Counselor
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Toyin Adefemi
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Biblical Counselor • Youth Mental Health Coach • Trauma-Informed Practitioner
            </p>
          </div>
        </div>
      </section>

      {/* About Toyin Section */}
      <section className="section-curve relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[360px_1fr] lg:px-10">
          <div className="soft-card relative mx-auto w-full max-w-[320px] overflow-hidden rounded-[2rem] border-[8px] border-white bg-white">
            <Image
              src="/images/toyin-portrait.jpg"
              alt="Portrait of Toyin Adefemi"
              width={1000}
              height={1250}
              className="h-auto w-full"
            />
          </div>

          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              My Heart for Healing
            </h2>
            <div className="mt-6 h-px w-full max-w-xs bg-[var(--line)]" />
            
            <p className="mt-6 text-lg leading-8 text-slate-600">
              I&apos;m Toyin Adefemi — a Biblical Counselor, youth advocate, and emotional wellness practitioner called to walk alongside young people and families as they heal, grow, and rediscover their God-given identity. My work is rooted in compassion, Scripture, and a deep belief that emotional and spiritual restoration is possible for every person.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              For over a decade, I&apos;ve served youth, young adults, and families navigating trauma, identity confusion, emotional wounds, and life transitions. My approach blends clinical insight, biblical truth, and Spirit-led wisdom, creating a safe space where clients feel seen, supported, and strengthened.
            </p>

            <blockquote className="mt-8 max-w-2xl text-2xl leading-10 text-slate-700 italic sm:text-3xl">
              &quot;Healing is not just about overcoming pain — it&apos;s about becoming who God designed you to be.&quot;
            </blockquote>
          </div>
        </div>
      </section>

      {/* My Calling */}
      <section className="section-ribbon section-curve relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            <div className="mx-auto w-full max-w-4xl">
              <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                My Calling
              </h2>
              <div className="mt-6 h-px w-full max-w-xs bg-[var(--line)]" />
              
              <p className="mt-8 text-lg leading-8 text-slate-600">
                My calling is simple: To help young people and families experience healing, identity, and transformation through Christ-centered, trauma-informed care.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                I am passionate about creating emotionally safe environments where clients can process their stories, rebuild confidence, and step boldly into their purpose. Whether I&apos;m counseling a teen, supporting a young adult, or guiding a family, my heart is to reflect the love, truth, and gentleness of Jesus.
              </p>
            </div>

            <div className="hidden overflow-hidden rounded-2xl lg:block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-7yYIx322NN3alyDRHYP1qeih63lrri.png"
                alt="Counselor in conversation with client"
                width={400}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Training */}
      <section className="section-curve relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Professional Background
            </h2>
            <div className="mt-6 h-px w-full max-w-xs bg-[var(--line)]" />
            
            <p className="mt-8 text-lg leading-8 text-slate-600">
              I bring a unique blend of biblical counseling, mental health coaching, and emotional intelligence training to every session.
            </p>

            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-slate-900">Credentials & Training</h3>
              <ul className="mt-6 space-y-4">
                {credentials.map((credential) => (
                  <li key={credential} className="flex gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <svg
                        className="h-6 w-6 text-[var(--peach)]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg text-slate-600">{credential}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="section-ribbon section-curve relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              My Approach
            </h2>
            <div className="mt-6 h-px w-full max-w-xs bg-[var(--line)]" />
            
            <p className="mt-8 text-lg leading-8 text-slate-600">
              My counseling approach integrates biblical truth with evidence-based emotional and behavioral tools. Every session is designed to honor your story, support your healing, and help you walk confidently in your God-given identity.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Biblical Foundation",
                  description: "Rooted in Scripture and the heart of Christ.",
                },
                {
                  title: "Trauma-Informed Care",
                  description: "Safety, compassion, and emotional wisdom in every step.",
                },
                {
                  title: "Practical Tools",
                  description: "Emotional regulation, mindset renewal, and resilient next steps.",
                },
              ].map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-[1.75rem] border border-white/80 bg-white/80 p-6 shadow-[0_12px_30px_rgba(95,145,163,0.1)] backdrop-blur"
                >
                  <h3 className="text-xl font-semibold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-curve section-curve-tight bg-white px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Ready to Begin?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            If you&apos;re ready to start your healing journey, I&apos;d be honored to walk with you.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--peach)] px-8 py-4 text-base font-semibold text-white shadow-[0_16px_30px_rgba(254,143,104,0.34)] hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
            >
              Book a Session
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-sm hover:border-slate-400 hover:bg-slate-50"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
