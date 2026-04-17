import Image from 'next/image';

export default function Speaking() {
  const topics = [
    {
      title: "Healing from Trauma",
      description: "Biblical foundations for understanding and healing from trauma, with practical tools for emotional restoration.",
    },
    {
      title: "Identity in Christ",
      description: "Discovering your God-given identity in the midst of confusion, comparison, and cultural pressure.",
    },
    {
      title: "Emotional Wellness",
      description: "Practical strategies for emotional regulation, managing anxiety, and building resilience in Christ.",
    },
    {
      title: "Relationship & Communication",
      description: "Building healthy relationships and improving family communication through biblical, trauma-informed principles.",
    },
    {
      title: "Youth Mental Health",
      description: "Understanding adolescent development, mental health challenges, and how to support young people's emotional wellbeing.",
    },
    {
      title: "Purpose & Calling",
      description: "Exploring purpose, gifts, and calling in a way that honors both your story and God's design for your life.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-ribbon section-curve relative overflow-hidden py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              Speaking & Workshops
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Speaking Engagements & Trainings
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Biblical, trauma-informed messages that bring healing, identity, and transformation to your organization.
            </p>
          </div>
        </div>
      </section>

      {/* About Speaking */}
      <section className="section-curve relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
          <div className="mx-auto w-full">
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Why Invite Me to Speak?
            </h2>
            <div className="mt-6 h-px w-full max-w-xs bg-[var(--line)]" />
            
            <p className="mt-8 text-lg leading-8 text-slate-600">
              I&apos;m a sought-after speaker and trainer who equips youth, young adults, families, churches, and leaders with biblical truth, emotional wisdom, and practical tools for healing and spiritual growth. My presentations are engaging, culturally responsive, and designed to meet audiences where they are.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Scripture-Centered",
                  description: "Every message is rooted in biblical truth and Christ's example.",
                },
                {
                  title: "Practical & Applicable",
                  description: "You'll receive tangible tools and strategies you can implement immediately.",
                },
                {
                  title: "Engaging & Interactive",
                  description: "Sessions include discussion, activities, and space for real connection.",
                },
              ].map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-[1.75rem] border border-white/80 bg-white/80 p-6 shadow-[0_12px_30px_rgba(95,145,163,0.1)] backdrop-blur"
                >
                  <h3 className="text-xl font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
            </div>

            <div className="hidden overflow-hidden rounded-2xl lg:block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/30-dCqoaTNJVeM70U4Qc1GKNm43ui8E1i.png"
                alt="Group of young people united together"
                width={400}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="section-ribbon section-curve relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Speaking Topics
            </h2>
            <div className="mt-6 h-px w-full max-w-xs bg-[var(--line)]" />
            
            <p className="mt-8 text-lg leading-8 text-slate-600">
              I can customize presentations for your specific audience and needs. Some of my popular topics include:
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {topics.map((topic) => (
                <article
                  key={topic.title}
                  className="rounded-[1.75rem] border border-slate-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-slate-900">
                    {topic.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {topic.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Formats */}
      <section className="section-curve section-curve-tight bg-white px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="section-title mx-auto w-fit text-center text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Speaking Formats
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Keynote Addresses",
                description: "Inspiring 45-60 minute keynote presentations for conferences, retreats, and events.",
              },
              {
                title: "Breakout Sessions",
                description: "Focused 45-90 minute workshops diving deep into specific topics with interactive elements.",
              },
              {
                title: "Multi-Day Trainings",
                description: "Comprehensive trainings for staff, leaders, and teams seeking deeper skill-building and transformation.",
              },
              {
                title: "Youth Events",
                description: "High-energy, relatable presentations designed specifically for teen and young adult audiences.",
              },
              {
                title: "Staff Development",
                description: "Professional development for educators, counselors, pastors, and organizational leaders.",
              },
              {
                title: "Church Services",
                description: "Sunday morning messages or special event presentations for faith communities.",
              },
            ].map((format) => (
              <article
                key={format.title}
                className="soft-card rounded-[2rem] border border-slate-100 bg-white p-8 text-center"
              >
                <h3 className="text-2xl font-semibold text-slate-900">
                  {format.title}
                </h3>
                <div className="mx-auto mt-4 h-px w-20 bg-slate-200" />
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {format.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="section-ribbon section-curve relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Interested in Having Me Speak?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            I&apos;d love to discuss how I can support your event, organization, or community with a message of healing, hope, and transformation.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--peach)] px-8 py-4 text-base font-semibold text-white shadow-[0_16px_30px_rgba(254,143,104,0.34)] hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
            >
              Inquire About Speaking
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
