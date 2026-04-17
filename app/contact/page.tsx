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
      {/* Hero Section */}
      <section className="section-ribbon section-curve relative overflow-hidden py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              Get in Touch
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Let's Connect
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              I&apos;m here to support your healing journey. Reach out with questions or to book a session.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-curve section-curve-tight bg-white px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
            <div>
              <div className="mb-12">
                <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                  Book a Session or Send a Message
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Fill out the form below and I&apos;ll be in touch shortly to discuss how I can support you.
                </p>
              </div>

              <form
            onSubmit={handleSubmit}
            className="soft-card rounded-[2rem] border border-slate-100 bg-white p-8 sm:p-12"
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
                  className="mt-3 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-700 outline-none placeholder:text-slate-400 focus:border-sky-300 focus:ring-1 focus:ring-sky-300"
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
                  className="mt-3 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-700 outline-none placeholder:text-slate-400 focus:border-sky-300 focus:ring-1 focus:ring-sky-300"
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
                  className="mt-3 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-700 outline-none placeholder:text-slate-400 focus:border-sky-300 focus:ring-1 focus:ring-sky-300"
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
                  className="mt-3 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-700 outline-none focus:border-sky-300 focus:ring-1 focus:ring-sky-300"
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
                className="mt-3 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-700 outline-none placeholder:text-slate-400 focus:border-sky-300 focus:ring-1 focus:ring-sky-300"
              />
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-2xl bg-[var(--peach)] px-8 py-4 text-base font-semibold text-white shadow-[0_16px_30px_rgba(254,143,104,0.34)] hover:bg-[var(--peach-deep)] hover:-translate-y-0.5 transition-all sm:w-auto"
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>

            {submitted && (
              <p className="mt-4 rounded-lg bg-green-50 p-4 text-green-800">
                Thank you for reaching out! I&apos;ll be in touch shortly.
              </p>
            )}
              </form>
            </div>

            <div className="hidden overflow-hidden rounded-2xl lg:block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-fgR87BYYUgnFWQ7OQreQiVYX0pt9WW.png"
                alt="Young woman on video call"
                width={400}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info Boxes */}
      <section className="section-ribbon section-curve relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="section-title mx-auto w-fit text-center text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl mb-14">
            Additional Information
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_16px_35px_rgba(95,145,163,0.1)] backdrop-blur">
              <h3 className="text-2xl font-semibold text-slate-900">Session Rates</h3>
              <div className="mt-6 h-px w-20 bg-slate-200" />
              <p className="mt-6 text-base leading-7 text-slate-600">
                Individual sessions start at $80-150/hour depending on location and format. Family sessions and group workshops available.
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_16px_35px_rgba(95,145,163,0.1)] backdrop-blur">
              <h3 className="text-2xl font-semibold text-slate-900">Session Format</h3>
              <div className="mt-6 h-px w-20 bg-slate-200" />
              <p className="mt-6 text-base leading-7 text-slate-600">
                Sessions are available in-person or via secure video conferencing. Initial consultations are complimentary.
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_16px_35px_rgba(95,145,163,0.1)] backdrop-blur">
              <h3 className="text-2xl font-semibold text-slate-900">Payment Methods</h3>
              <div className="mt-6 h-px w-20 bg-slate-200" />
              <p className="mt-6 text-base leading-7 text-slate-600">
                We accept all major credit cards, PayPal, and bank transfers. Insurance may cover services.
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_16px_35px_rgba(95,145,163,0.1)] backdrop-blur">
              <h3 className="text-2xl font-semibold text-slate-900">Cancellation Policy</h3>
              <div className="mt-6 h-px w-20 bg-slate-200" />
              <p className="mt-6 text-base leading-7 text-slate-600">
                Cancellations made 48 hours in advance receive a full refund. Late cancellations may incur a fee.
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_16px_35px_rgba(95,145,163,0.1)] backdrop-blur">
              <h3 className="text-2xl font-semibold text-slate-900">Confidentiality</h3>
              <div className="mt-6 h-px w-20 bg-slate-200" />
              <p className="mt-6 text-base leading-7 text-slate-600">
                All sessions are confidential. I maintain professional standards and follow ethical guidelines.
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_16px_35px_rgba(95,145,163,0.1)] backdrop-blur">
              <h3 className="text-2xl font-semibold text-slate-900">Response Time</h3>
              <div className="mt-6 h-px w-20 bg-slate-200" />
              <p className="mt-6 text-base leading-7 text-slate-600">
                I typically respond to inquiries within 24-48 hours. For urgent matters, please call directly.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="section-curve section-curve-tight bg-white px-6 py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Other Ways to Connect
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Whether you have questions, want to book a session, or are interested in speaking opportunities, I&apos;m here to help.
          </p>

          <div className="mt-12 space-y-6 text-left sm:max-w-md sm:mx-auto">
            <div>
              <h3 className="font-semibold text-slate-900">Email</h3>
              <p className="mt-2 text-slate-600">hello@toyinadefemi.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Phone</h3>
              <p className="mt-2 text-slate-600">(555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Social Media</h3>
              <p className="mt-2 text-slate-600">Follow for resources and updates</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
