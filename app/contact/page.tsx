'use client';

import { useState } from 'react';
import Link from 'next/link';

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
    // Here you would typically send the form data to your backend
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
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-curve relative -mt-px overflow-hidden bg-soft-blue-strong">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-bold text-5xl md:text-6xl text-foreground">
              Let's Connect
            </h1>
            <p className="mb-4 text-xl text-muted">
              I'm here to support your healing journey.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              Whether you're ready to book a session, have questions, or want to discuss speaking opportunities, 
              I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-curve relative py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-6 lg:px-10">
          {submitted ? (
            <div className="rounded-lg bg-soft-blue-strong p-8 text-center soft-card">
              <h2 className="mb-4 text-2xl font-bold text-foreground">Thank You!</h2>
              <p className="text-lg text-muted leading-relaxed">
                I've received your message and will be in touch within 24-48 hours. 
                Thank you for reaching out.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border-2 border-soft-blue-strong px-4 py-3 text-foreground placeholder-muted transition-colors focus:outline-none focus:border-peach"
                  placeholder="Your name"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border-2 border-soft-blue-strong px-4 py-3 text-foreground placeholder-muted transition-colors focus:outline-none focus:border-peach"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border-2 border-soft-blue-strong px-4 py-3 text-foreground placeholder-muted transition-colors focus:outline-none focus:border-peach"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-semibold text-foreground mb-2">
                  What are you interested in?
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full rounded-lg border-2 border-soft-blue-strong px-4 py-3 text-foreground transition-colors focus:outline-none focus:border-peach"
                >
                  <option value="individual-counseling">Individual Biblical Counseling</option>
                  <option value="youth-counseling">Youth & Young Adult Counseling</option>
                  <option value="family-counseling">Family Counseling & Coaching</option>
                  <option value="speaking">Speaking & Workshops Inquiry</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-lg border-2 border-soft-blue-strong px-4 py-3 text-foreground placeholder-muted transition-colors focus:outline-none focus:border-peach resize-none"
                  placeholder="Tell me about what you're looking for support with..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-peach px-6 py-3 font-semibold text-white transition-colors hover:bg-peach-deep"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-curve relative py-16 bg-soft-blue lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Other Ways to Connect</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 text-center soft-card">
              <h3 className="mb-3 text-xl font-semibold text-foreground">Email</h3>
              <p className="text-muted mb-4">
                Reach out with any questions or to schedule a consultation.
              </p>
              <a
                href="mailto:contact@toyinadefemi.com"
                className="inline-block text-peach font-semibold hover:text-peach-deep transition-colors"
              >
                contact@toyinadefemi.com
              </a>
            </div>
            <div className="rounded-xl bg-white p-8 text-center soft-card">
              <h3 className="mb-3 text-xl font-semibold text-foreground">Social Media</h3>
              <p className="text-muted mb-4">
                Connect with me for inspiration, resources, and updates.
              </p>
              <div className="flex gap-4 justify-center">
                <a href="#" className="text-peach hover:text-peach-deep transition-colors font-semibold">
                  Instagram
                </a>
                <span className="text-line">|</span>
                <a href="#" className="text-peach hover:text-peach-deep transition-colors font-semibold">
                  Facebook
                </a>
              </div>
            </div>
            <div className="rounded-xl bg-white p-8 text-center soft-card">
              <h3 className="mb-3 text-xl font-semibold text-foreground">Virtual Sessions</h3>
              <p className="text-muted mb-4">
                All sessions are conducted securely online for your convenience.
              </p>
              <p className="text-sm text-muted italic">
                Confidentiality is always protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="section-curve relative py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h2 className="mb-8 text-3xl font-bold text-foreground text-center">About Sessions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Session Length & Cost</h3>
              <div className="space-y-3">
                <p className="text-muted leading-relaxed">
                  <span className="font-semibold text-foreground">Individual Counseling:</span> 60 minutes
                </p>
                <p className="text-muted leading-relaxed">
                  <span className="font-semibold text-foreground">Family Sessions:</span> 60 minutes
                </p>
                <p className="text-muted leading-relaxed">
                  <span className="font-semibold text-foreground">Crisis/Intensive Support:</span> 75 minutes
                </p>
                <p className="text-muted mt-4 italic">
                  Pricing details will be discussed during your initial consultation.
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Payment & Financial Support</h3>
              <p className="text-muted leading-relaxed mb-4">
                A limited number of reduced-rate sessions are available for individuals and families 
                experiencing financial hardship. We work together to find a solution that serves you best.
              </p>
              <p className="text-muted font-semibold">Payment methods accepted:</p>
              <ul className="mt-3 space-y-2 text-muted">
                <li>• Debit & Credit Cards</li>
                <li>• PayPal</li>
                <li>• CashApp</li>
                <li>• Zelle</li>
                <li>• Apple Pay</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Insurance & Superbills</h3>
              <p className="text-muted leading-relaxed">
                Insurance is not accepted directly, but superbills can be provided for reimbursement 
                depending on your plan. Please contact me to discuss options.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">Cancellation & Rescheduling</h3>
              <p className="text-muted leading-relaxed">
                I understand that life happens. If you need to reschedule, please provide at least 
                24 hours notice. Cancellations made with less notice may be subject to a session fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-curve relative py-16 bg-soft-blue-strong text-center lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h2 className="mb-6 text-3xl font-bold text-foreground">
            Ready to Take the Next Step?
          </h2>
          <p className="mb-10 text-lg text-muted leading-relaxed">
            Healing is possible, and I'm here to walk with you. Fill out the form above or reach out directly 
            to begin your journey toward wholeness.
          </p>
        </div>
      </section>
    </main>
  );
}
