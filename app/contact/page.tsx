'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'individual-counseling',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: 'individual-counseling',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      {/* Warm Editorial Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-100 to-white px-6 py-36 lg:px-10 lg:py-48">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
            Get in Touch
          </p>
          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-7xl">
            Let&apos;s Connect
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-2xl leading-relaxed text-slate-600">
            I&apos;m here to support your healing journey. Reach out with questions or to book a session—I respond within 24-48 hours.
          </p>
        </div>
      </section>

      {/* Contact Form — Visual Centerpiece */}
      <section className="relative bg-white px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-[0_12px_40px_rgba(0,0,0,0.08)] sm:p-14"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="mt-3 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 transition-all focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="mt-3 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 transition-all focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-900">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className="mt-3 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 transition-all focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
              </div>
              <div>
                <label htmlFor="serviceType" className="block text-sm font-semibold text-slate-900">
                  What brings you here? *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="mt-3 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-all focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                >
                  <option value="individual-counseling">Individual Counseling</option>
                  <option value="family-counseling">Family Counseling</option>
                  <option value="youth-counseling">Youth Counseling</option>
                  <option value="speaking-inquiry">Speaking Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-semibold text-slate-900">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me a bit about what you're looking for..."
                rows={6}
                className="mt-3 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 transition-all focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-xl bg-[var(--peach)] px-6 py-4 text-base font-semibold text-white shadow-[0_12px_24px_rgba(254,143,104,0.3)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>

            {submitted && (
              <p className="mt-4 rounded-lg bg-green-50 p-4 text-sm text-green-800">
                Thank you for reaching out! I&apos;ll be in touch shortly.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Atmospheric Image Break */}
      <section className="relative bg-slate-50 px-6 py-0 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem]">
          <div className="relative h-[350px] w-full md:h-[450px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-fgR87BYYUgnFWQ7OQreQiVYX0pt9WW.png"
              alt="Young woman on video call"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Additional Info — Two-Column Grid */}
      <section className="relative bg-white px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-16 text-5xl font-bold tracking-tight text-slate-900">
            What You Should Know
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: "💰",
                label: "Session Rates",
                description: "Individual sessions start at $80-150/hour depending on location and format. Family sessions and group workshops available.",
              },
              {
                icon: "🎯",
                label: "Session Format",
                description: "Sessions are available in-person or via secure video conferencing. Initial consultations are complimentary.",
              },
              {
                icon: "💳",
                label: "Payment Methods",
                description: "We accept all major credit cards, PayPal, and bank transfers. Insurance may cover services.",
              },
              {
                icon: "📋",
                label: "Cancellation Policy",
                description: "Cancellations made 48 hours in advance receive a full refund. Late cancellations may incur a fee.",
              },
              {
                icon: "🔒",
                label: "Confidentiality",
                description: "All sessions are confidential. I maintain professional standards and follow ethical guidelines.",
              },
              {
                icon: "⏱️",
                label: "Response Time",
                description: "I typically respond to inquiries within 24-48 hours. For urgent matters, please call directly.",
              },
            ].map((item) => (
              <article key={item.label} className="border-l-4 border-[var(--peach)] bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                <div className="mb-4 text-3xl">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900">
                  {item.label}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Connect — Three Distinct Items */}
      <section className="relative bg-slate-50 px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-5xl font-bold tracking-tight text-slate-900">
            Other Ways to Connect
          </h2>
          <p className="mb-20 max-w-2xl text-xl text-slate-600">
            Whether you have questions, want to book a session, or are interested in speaking opportunities, I&apos;m here to help.
          </p>

          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                icon: "✉️",
                title: "Email",
                detail: "hello@toyinadefemi.com",
                description: "Send me a message anytime",
              },
              {
                icon: "📞",
                title: "Phone",
                detail: "(555) 123-4567",
                description: "Call for urgent matters",
              },
              {
                icon: "🌐",
                title: "Social Media",
                detail: "@toyinadefemi",
                description: "Follow for resources and updates",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-start gap-4 rounded-2xl bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-lg font-semibold text-[var(--peach)]">
                    {item.detail}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
