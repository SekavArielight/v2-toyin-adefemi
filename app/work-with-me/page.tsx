import Image from 'next/image';

export default function WorkWithMe() {
  return (
    <>
      {/* Bold Editorial Hero with Soft-Blue Background */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-100 to-white px-6 py-36 lg:px-10 lg:py-48">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              Services & Support
            </p>
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-7xl">
              How I Can <span className="block text-[var(--peach)]">Support You</span>
            </h1>
            <p className="mt-8 max-w-2xl text-2xl leading-relaxed text-slate-600">
              Counseling and coaching designed to help you heal, grow, and step boldly into your identity in Christ.
            </p>
          </div>
        </div>
      </section>

      {/* Large Rich Service Cards with Coral Accent Borders */}
      <section className="relative bg-white px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-5xl font-bold tracking-tight text-slate-900">
            Services Offered
          </h2>
          <div className="mb-16 h-1 w-20 bg-[var(--peach)]" />
          
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Individual Biblical Counseling",
                description: "Christ-centered sessions for emotional healing, identity, and spiritual renewal. A safe space to process your story and experience God's transformative love.",
              },
              {
                title: "Youth & Young Adult Support",
                description: "Safe, trauma-informed guidance for teens and young adults navigating life transitions, identity questions, and emotional overwhelm.",
              },
              {
                title: "Family Counseling & Coaching",
                description: "Helping families rebuild connection, communication, and emotional safety. Restore Christ-centered unity and healing relationships.",
              },
              {
                title: "Workshops, Trainings & Speaking",
                description: "Biblical, trauma-informed teachings for churches, ministries, and youth organizations. Equip your community with healing wisdom.",
              },
            ].map((service) => (
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
                  href="/contact"
                  className="mt-8 inline-flex rounded-xl bg-[var(--peach)] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_20px_rgba(254,143,104,0.26)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
                >
                  Learn More
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Visual Timeline */}
      <section className="relative bg-slate-50 px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-5xl font-bold tracking-tight text-slate-900">
            How We Work Together
          </h2>
          <div className="mt-6 h-1 w-20 bg-[var(--peach)]" />
          
          <div className="mt-20">
            <div className="relative space-y-8">
              {/* Connecting Line */}
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-[var(--peach)] to-sky-200" />
              
              {[
                {
                  step: "1",
                  title: "Schedule Your Session",
                  description: "Book a time that works for you. Sessions are available in-person or online.",
                },
                {
                  step: "2",
                  title: "Initial Consultation",
                  description: "We'll discuss your story, concerns, and goals in a confidential, safe environment.",
                },
                {
                  step: "3",
                  title: "Ongoing Counseling",
                  description: "Work together with consistent support and biblical, trauma-informed tools for healing.",
                },
                {
                  step: "4",
                  title: "Growth & Restoration",
                  description: "Experience emotional healing, spiritual renewal, and confident steps toward your purpose.",
                },
              ].map((item) => (
                <div key={item.step} className="relative flex gap-8 pl-20">
                  {/* Step Circle */}
                  <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-white ring-4 ring-slate-50 shadow-md">
                    <span className="text-sm font-bold text-[var(--peach)]">{item.step}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="pb-8">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-lg text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach with Matched Cards from About Page */}
      <section className="relative bg-white px-6 py-32 lg:px-10 lg:py-40">
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
              },
              {
                title: "Trauma-Informed Care",
                description: "Safety, compassion, and emotional wisdom — creating brave spaces where healing can take root and flourish.",
              },
              {
                title: "Practical Tools",
                description: "Emotional regulation, mindset renewal, and resilient next steps — equipping you for lasting transformation.",
              },
            ].map((pillar) => (
              <article
                key={pillar.title}
                className="border-l-4 border-[var(--peach)] bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
              >
                <h3 className="text-2xl font-bold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who I Serve — Three Distinct Warm Cards */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-5xl font-bold tracking-tight text-slate-900">
            Who I Serve
          </h2>
          <div className="mt-6 h-1 w-20 bg-[var(--peach)]" />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Youth & Teens",
                description: "Support for emotional wounds, identity struggles, and life transitions. Creating safe spaces where young people can process pain and discover who they are in Christ.",
                bgGradient: "from-sky-100 to-cyan-50",
              },
              {
                title: "Young Adults",
                description: "Guidance for purpose, healing, relationships, and spiritual growth. Supporting you as you navigate independence, identity, and your calling.",
                bgGradient: "from-emerald-100 to-teal-50",
              },
              {
                title: "Families",
                description: "Restoring communication, connection, and Christ-centered unity. Healing family systems and building stronger, more loving relationships.",
                bgGradient: "from-amber-100 to-orange-50",
              },
            ].map((audience) => (
              <article
                key={audience.title}
                className={`rounded-[2rem] border border-white/80 bg-gradient-to-br ${audience.bgGradient} p-10 shadow-[0_4px_12px_rgba(0,0,0,0.05)]`}
              >
                <h3 className="text-2xl font-bold text-slate-900">
                  {audience.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-700">
                  {audience.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Width Warm CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-sky-50 to-white px-6 py-40 lg:px-10 lg:py-52">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-5xl font-bold leading-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-2xl leading-relaxed text-slate-600">
            Whether you&apos;re seeking support for yourself, your family, or your organization, I&apos;d love to discuss how we can work together. Your story matters, and healing is possible.
          </p>

          <div className="mt-14 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--peach)] px-10 py-5 text-lg font-semibold text-white shadow-[0_16px_30px_rgba(254,143,104,0.34)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-1"
            >
              Book a Session
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-slate-300 bg-white px-10 py-5 text-lg font-semibold text-slate-900 transition-all hover:border-slate-400 hover:bg-slate-50"
            >
              Get in Touch
            </a>
          </div>

          <p className="mt-12 text-sm text-slate-500">
            Questions? Reach out anytime — I&apos;m here to support your journey.
          </p>
        </div>
      </section>
    </>
  );
}

      {/* Process */}
      <section className="section-ribbon section-curve relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              How We Work Together
            </h2>
            <div className="mt-6 h-px w-full max-w-xs bg-[var(--line)]" />
            
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {[
                {
                  step: "1",
                  title: "Schedule Your Session",
                  description: "Book a time that works for you. Sessions are available in-person or online.",
                },
                {
                  step: "2",
                  title: "Initial Consultation",
                  description: "We'll discuss your story, concerns, and goals in a confidential, safe environment.",
                },
                {
                  step: "3",
                  title: "Ongoing Counseling",
                  description: "Work together with consistent support and biblical, trauma-informed tools for healing.",
                },
                {
                  step: "4",
                  title: "Growth & Restoration",
                  description: "Experience emotional healing, spiritual renewal, and confident steps toward your purpose.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--peach)] text-lg font-bold text-white">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-curve section-curve-tight bg-white px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                My Approach to Counseling
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Every session is rooted in three foundational pillars that guide my work with clients.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  {
                    title: "Biblical Foundation",
                    description: "Scripture and the heart of Christ guide every conversation.",
                  },
                  {
                    title: "Trauma-Informed Care",
                    description: "I create emotionally safe spaces with compassion and wisdom.",
                  },
                  {
                    title: "Practical Tools",
                    description: "You'll learn emotional regulation and resilient next steps.",
                  },
                ].map((pillar) => (
                  <article
                    key={pillar.title}
                    className="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-6"
                  >
                    <h3 className="font-semibold text-slate-900">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {pillar.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-sky-100 to-cyan-100">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/26-PwWPeoe46kjSAdeacF0RYjRUp10NEi.png"
                alt="Group support session with counselor"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8">
              <h3 className="text-2xl font-semibold text-slate-900">
                I Serve
              </h3>
              <div className="mt-6 space-y-5">
                {[
                  {
                    title: "Youth & Teens",
                    description: "Support for emotional wounds, identity struggles, and life transitions.",
                  },
                  {
                    title: "Young Adults",
                    description: "Guidance for purpose, healing, relationships, and spiritual growth.",
                  },
                  {
                    title: "Families",
                    description: "Restoring communication, connection, and Christ-centered unity.",
                  },
                ].map((audience) => (
                  <div
                    key={audience.title}
                    className="rounded-[1.5rem] border border-white/60 bg-white/50 p-4 backdrop-blur"
                  >
                    <h4 className="font-semibold text-slate-900">
                      {audience.title}
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {audience.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>







      {/* CTA Section */}
      <section className="section-ribbon section-curve relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Whether you&apos;re seeking support for yourself, your family, or your organization, I&apos;d love to discuss how we can work together.
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
