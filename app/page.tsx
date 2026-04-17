import Image from "next/image";

const services = [
  {
    title: "Individual Biblical Counseling",
    description:
      "Christ-centered sessions for emotional healing, identity, and spiritual renewal.",
    accent: "bg-sky-200 text-sky-700",
    icon: "leaf",
  },
  {
    title: "Youth & Young Adult Support",
    description:
      "Safe, trauma-informed guidance for teens and young adults navigating life transitions.",
    accent: "bg-cyan-200 text-cyan-700",
    icon: "people",
  },
  {
    title: "Family Counseling & Coaching",
    description:
      "Helping families rebuild connection, communication, and emotional safety.",
    accent: "bg-orange-200 text-orange-700",
    icon: "home",
  },
  {
    title: "Workshops, Trainings & Speaking",
    description:
      "Biblical, trauma-informed teachings for churches, ministries, and youth organizations.",
    accent: "bg-rose-200 text-rose-700",
    icon: "spark",
  },
];

const pillars = [
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
];

const audiences = [
  {
    title: "Youth & Teens",
    description:
      "Support for emotional wounds, identity struggles, and life transitions.",
  },
  {
    title: "Young Adults",
    description:
      "Guidance for purpose, healing, relationships, and spiritual growth.",
  },
  {
    title: "Families",
    description:
      "Restoring communication, connection, and Christ-centered unity.",
  },
];

const resources = [
  "Trauma-informed Worksheets",
  "Faith & Healing Resources",
  "Stress Relief Guides",
];

function Icon({ type }: { type: string }) {
  if (type === "people") {
    return (
      <svg viewBox="0 0 48 48" className="h-8 w-8 fill-current" aria-hidden="true">
        <path d="M24 24a8 8 0 1 0-8-8 8 8 0 0 0 8 8Zm-12 4a8 8 0 1 0-8-8 8 8 0 0 0 8 8Zm24 0a8 8 0 1 0-8-8 8 8 0 0 0 8 8ZM4 42a10 10 0 0 1 10-10h4a10 10 0 0 1 10 10Zm20 0a10 10 0 0 1 10-10h0a10 10 0 0 1 10 10Z" />
      </svg>
    );
  }

  if (type === "home") {
    return (
      <svg viewBox="0 0 48 48" className="h-8 w-8 fill-current" aria-hidden="true">
        <path d="M24 6 6 20v22h13V29h10v13h13V20Zm0 4.9 12 9.4V38h-3V25H15v13h-3V20.3Z" />
      </svg>
    );
  }

  if (type === "spark") {
    return (
      <svg viewBox="0 0 48 48" className="h-8 w-8 fill-current" aria-hidden="true">
        <path d="m24 4 4.8 11.2L40 20l-11.2 4.8L24 36l-4.8-11.2L8 20l11.2-4.8ZM10 32l2.3 5.7L18 40l-5.7 2.3L10 48l-2.3-5.7L2 40l5.7-2.3Zm28-4 1.7 4.3L44 34l-4.3 1.7L38 40l-1.7-4.3L32 34l4.3-1.7Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8 fill-current" aria-hidden="true">
      <path d="M24 42c11-9 16-17.2 16-24.3C40 11 35.4 6 29 6c-3.6 0-6.6 1.6-9 4.8C17.6 7.6 14.6 6 11 6 4.6 6 0 11 0 17.7 0 24.8 13 35.5 24 42Zm0-4.8C14.8 30.7 4 22.4 4 17.7 4 13.2 6.9 10 11 10c3 0 5.4 1.5 7.5 4.7L20 17l1.5-2.3C23.6 11.5 26 10 29 10c4.1 0 7 3.2 7 7.7 0 4.7-10.8 13-20 19.5Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
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
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-[var(--peach)] px-8 py-4 text-base font-semibold text-white shadow-[0_16px_30px_rgba(254,143,104,0.34)] hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
              >
                Book a Session
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-sm hover:border-slate-400 hover:bg-slate-50"
              >
                Learn About Toyin
              </a>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </section>

      <section
        id="about"
        className="section-ribbon section-curve relative overflow-hidden py-28 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[360px_1fr] lg:px-10">
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              Meet Your Counselor
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              My heart is to help young people and families heal, grow, and
              rediscover their God-given identity.
            </h2>
            <div className="mt-6 h-px w-full max-w-3xl bg-[var(--line)]" />
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Toyin Adefemi is a Professional Counselor and trauma-informed
              coach dedicated to helping youth, young adults, and families
              experience healing and identity in Christ. With a compassionate,
              Spirit-led approach, she blends clinical insight with biblical
              truth to guide individuals through emotional wounds, life
              transitions, and spiritual restoration.
            </p>
            <blockquote className="mt-8 max-w-3xl text-2xl leading-10 text-slate-700 italic sm:text-3xl">
              &quot;My calling is simple: to help young people and families
              experience healing, identity, and transformation through
              Christ-centered, trauma-informed care.&quot;
            </blockquote>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="section-curve section-curve-tight bg-white px-6 py-24 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="section-title mx-auto w-fit text-center text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Counseling & Support Services
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="soft-card rounded-[2rem] border border-slate-100 bg-white p-8 text-center"
              >
                <div
                  className={`mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full ${service.accent}`}
                >
                  <Icon type={service.icon} />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <div className="mx-auto mt-4 h-px w-20 bg-slate-200" />
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex rounded-xl bg-[var(--peach)] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_20px_rgba(254,143,104,0.26)] hover:bg-[var(--peach-deep)]"
                >
                  Learn More
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-ribbon section-curve px-6 py-28 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
                My Approach
              </p>
              <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Trauma-Informed. Scripture-Centered. Spirit-Led.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                My counseling approach integrates biblical truth with
                evidence-based emotional and behavioral tools. Every session is
                designed to honor your story, support your healing, and help
                you walk confidently in your God-given identity.
              </p>
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {pillars.map((pillar) => (
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

            <div className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_16px_40px_rgba(95,145,163,0.12)] backdrop-blur">
              <h3 className="text-2xl font-semibold text-slate-900">
                Who I Serve
              </h3>
              <div className="mt-6 space-y-5">
                {audiences.map((audience) => (
                  <div
                    key={audience.title}
                    className="rounded-[1.5rem] border border-slate-100 bg-white p-5"
                  >
                    <h4 className="text-lg font-semibold text-slate-900">
                      {audience.title}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {audience.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-curve section-curve-tight bg-white px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="section-title mx-auto w-fit text-center text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Stories of Healing
          </h2>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_340px]">
            <div className="soft-card rounded-[2rem] bg-white px-8 py-10 sm:px-12">
              <p className="text-3xl leading-10 text-slate-600 sm:text-4xl">
                &quot;Clients describe Toyin&apos;s counseling as compassionate,
                grounding, and deeply Spirit-led - a place where they feel
                understood, supported, and guided toward emotional and spiritual
                wholeness.&quot;
              </p>
            </div>
            <div className="hidden overflow-hidden rounded-2xl lg:block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-li3GcnQ3vztHrPIVBrBg3DjIm6MTQp.png"
                alt="Supportive hands coming together"
                width={400}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-ribbon section-curve px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="section-title mx-auto w-fit text-center text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl mb-12">
            Why Clients Choose Toyin
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Trauma-Informed Expertise",
                description: "Trained in trauma-focused approaches with deep understanding of how past wounds affect present behavior and identity.",
              },
              {
                title: "Biblical Foundation",
                description: "Every session is grounded in Scripture and Christ's example of compassionate, redemptive love.",
              },
              {
                title: "Youth Specialist",
                description: "Special focus on teen and young adult development, identity formation, and life transitions.",
              },
              {
                title: "Safe & Confidential",
                description: "Create emotionally safe environments where clients feel fully seen, heard, and respected without judgment.",
              },
              {
                title: "Practical Tools",
                description: "Learn evidence-based emotional regulation, communication skills, and resilience strategies.",
              },
              {
                title: "Culturally Responsive",
                description: "Honor diverse backgrounds, experiences, and perspectives in all counseling and teaching work.",
              },
            ].map((reason) => (
              <article key={reason.title} className="rounded-[1.75rem] border border-white/80 bg-white/80 p-6 shadow-[0_12px_30px_rgba(95,145,163,0.1)] backdrop-blur">
                <h3 className="text-xl font-semibold text-slate-900">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="resources"
        className="section-ribbon section-curve px-6 py-28 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="section-title mx-auto w-fit text-center text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Free Tools & Guides
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {resources.map((resource) => (
              <article
                key={resource}
                className="rounded-[1.75rem] border border-white/70 bg-white/80 p-8 text-center shadow-[0_16px_35px_rgba(95,145,163,0.1)] backdrop-blur"
              >
                <h3 className="text-2xl font-semibold text-slate-900">
                  {resource}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Encouraging resources designed to support your healing journey
                  between sessions.
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex rounded-xl bg-[var(--peach)] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_20px_rgba(254,143,104,0.26)] hover:bg-[var(--peach-deep)]"
                >
                  Download
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="section-curve section-curve-tight bg-white px-6 py-24 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
            Ready to Begin?
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Start your healing journey today.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Whether you&apos;re seeking emotional clarity, spiritual renewal, or
            support for your family, Toyin would be honored to walk with you.
          </p>

          <form className="soft-card mx-auto mt-12 grid max-w-3xl gap-4 rounded-[2rem] border border-slate-100 bg-white p-6 sm:grid-cols-3">
            <input
              type="text"
              placeholder="Name"
              className="rounded-xl border border-slate-200 px-4 py-3 text-slate-700 outline-none placeholder:text-slate-400 focus:border-sky-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-xl border border-slate-200 px-4 py-3 text-slate-700 outline-none placeholder:text-slate-400 focus:border-sky-300"
            />
            <input
              type="text"
              placeholder="Phone"
              className="rounded-xl border border-slate-200 px-4 py-3 text-slate-700 outline-none placeholder:text-slate-400 focus:border-sky-300"
            />
            <textarea
              placeholder="How can I support you?"
              rows={5}
              className="sm:col-span-3 rounded-xl border border-slate-200 px-4 py-3 text-slate-700 outline-none placeholder:text-slate-400 focus:border-sky-300"
            />
            <button
              type="submit"
              className="sm:col-span-3 mx-auto inline-flex w-full max-w-xs items-center justify-center rounded-2xl bg-[var(--peach)] px-8 py-4 text-base font-semibold text-white shadow-[0_16px_30px_rgba(254,143,104,0.34)] hover:bg-[var(--peach-deep)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

    </>
  );
}
