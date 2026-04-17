import Image from 'next/image';

export default function WorkWithMe() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-ribbon section-curve relative overflow-hidden py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              Services & Support
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              How I Can Support You
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Counseling and coaching designed to help you heal, grow, and step into your identity in Christ.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-curve section-curve-tight bg-white px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 text-center">
            <h2 className="section-title mx-auto w-fit text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Services Offered
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Individual Biblical Counseling",
                description: "Christ-centered sessions for emotional healing, identity, and spiritual renewal.",
                accent: "bg-sky-200 text-sky-700",
              },
              {
                title: "Youth & Young Adult Support",
                description: "Safe, trauma-informed guidance for teens and young adults navigating life transitions.",
                accent: "bg-cyan-200 text-cyan-700",
              },
              {
                title: "Family Counseling & Coaching",
                description: "Helping families rebuild connection, communication, and emotional safety.",
                accent: "bg-orange-200 text-orange-700",
              },
              {
                title: "Workshops, Trainings & Speaking",
                description: "Biblical, trauma-informed teachings for churches, ministries, and youth organizations.",
                accent: "bg-rose-200 text-rose-700",
              },
            ].map((service) => (
              <article
                key={service.title}
                className="soft-card rounded-[2rem] border border-slate-100 bg-white p-8"
              >
                <div
                  className={`inline-flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full ${service.accent} font-semibold text-lg`}
                >
                  {service.title.charAt(0)}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <div className="mx-auto mt-4 h-px w-20 bg-slate-200" />
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {service.description}
                </p>
                <a
                  href="/contact"
                  className="mt-8 inline-flex rounded-xl bg-[var(--peach)] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_20px_rgba(254,143,104,0.26)] hover:bg-[var(--peach-deep)]"
                >
                  Learn More
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

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
