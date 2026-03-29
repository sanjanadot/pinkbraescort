"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const CATEGORIES = [
  "Escort Guide",
  "Mumbai Lifestyle",
  "Dating Tips",
  "Safety & Discretion",
  "Companion Stories",
  "City Guide",
  "Other",
];

type FormState = {
  name: string;
  email: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  tags: string;
};

const empty: FormState = {
  name: "",
  email: "",
  title: "",
  category: "",
  excerpt: "",
  content: "",
  tags: "",
};

export default function SubmitArticlePage() {
  const [form, setForm] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate(): boolean {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email is required";
    if (!form.title.trim() || form.title.length < 10)
      e.title = "Title must be at least 10 characters";
    if (!form.category) e.category = "Please select a category";
    if (!form.excerpt.trim() || form.excerpt.length < 50)
      e.excerpt = "Excerpt must be at least 50 characters";
    if (!form.content.trim() || form.content.length < 200)
      e.content = "Article content must be at least 200 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    // Build WhatsApp message
    const msg = encodeURIComponent(
      `📝 *New Article Submission*\n\n` +
        `*Author:* ${form.name}\n` +
        `*Email:* ${form.email}\n` +
        `*Title:* ${form.title}\n` +
        `*Category:* ${form.category}\n` +
        `*Tags:* ${form.tags}\n\n` +
        `*Excerpt:*\n${form.excerpt}\n\n` +
        `*Article Content:*\n${form.content.slice(0, 500)}${form.content.length > 500 ? "…(truncated)" : ""}`
    );

    window.open(
      `https://api.whatsapp.com/send?phone=919653203658&text=${msg}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 flex items-center justify-center px-4 py-24">
        <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl p-10 text-center border border-pink-100">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🎉</span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-3">Article Submitted!</h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Your article has been sent to the Pink Bra Escorts editorial team via WhatsApp. We review all submissions within 48 hours and will contact you at <strong>{form.email}</strong> if accepted.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/blog"
              className="bg-pink-500 text-white font-bold px-7 py-3 rounded-full hover:bg-pink-600 transition-colors"
            >
              ← Back to Blog
            </Link>
            <button
              onClick={() => { setSubmitted(false); setForm(empty); }}
              className="border-2 border-pink-500 text-pink-600 font-bold px-7 py-3 rounded-full hover:bg-pink-50 transition-colors"
            >
              Submit Another
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* ── HERO ── */}
      <section
        className="relative pt-28 pb-16 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #ec4899 0%, #be185d 50%, #9d174d 100%)" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-12 left-12 text-white opacity-10 text-7xl" style={{ animation: "float 3s ease-in-out infinite" }}>✍️</div>
          <div className="absolute bottom-12 right-16 text-white opacity-10 text-6xl" style={{ animation: "float 4s ease-in-out 1s infinite" }}>📝</div>
        </div>
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-5 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Write for Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
            Submit Your Article
          </h1>
          <p className="text-pink-100 text-lg max-w-xl mx-auto leading-relaxed">
            Share your knowledge, story or guide with our readers. We publish quality content about escorts, Mumbai lifestyle, companion culture and more.
          </p>
        </div>
      </section>

      {/* ── GUIDELINES + FORM ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Sidebar guidelines */}
            <aside className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-pink-100 shadow-sm">
                <h2 className="font-extrabold text-gray-800 text-lg mb-4">Submission Guidelines</h2>
                <ul className="space-y-3 text-sm text-gray-600">
                  {[
                    "Minimum 500 words of original content",
                    "No plagiarism — original writing only",
                    "Relevant to escorts, Mumbai lifestyle or companion topics",
                    "Professional and respectful tone",
                    "No explicit or graphic content",
                    "Include a short bio in the form",
                  ].map((g) => (
                    <li key={g} className="flex items-start gap-2">
                      <span className="text-pink-500 mt-0.5 flex-shrink-0">✓</span>
                      {g}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-pink-100 shadow-sm">
                <h2 className="font-extrabold text-gray-800 text-lg mb-3">What Happens Next?</h2>
                <ol className="space-y-3 text-sm text-gray-600">
                  {[
                    "We receive your article via WhatsApp",
                    "Editorial team reviews within 48 hours",
                    "We contact you if approved",
                    "Published with your name credited",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-pink-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100 text-center">
                <p className="text-sm text-gray-500 mb-3">Questions about submissions?</p>
                <a
                  href="https://api.whatsapp.com/send?phone=919653203658&text=Hi%2C%20I%20have%20a%20question%20about%20submitting%20an%20article"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-green-500 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-green-600 transition-colors text-sm"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl border border-pink-50 p-8 sm:p-10">
                <h2 className="text-2xl font-extrabold text-gray-800 mb-2">Your Article</h2>
                <p className="text-gray-400 text-sm mb-8">All fields marked <span className="text-pink-500">*</span> are required.</p>

                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Author name + email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">
                        Your Name <span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Priya Sharma"
                        className={`w-full border-2 rounded-xl px-4 py-3 text-gray-800 text-sm outline-none focus:border-pink-400 transition-colors ${errors.name ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">
                        Email Address <span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={`w-full border-2 rounded-xl px-4 py-3 text-gray-800 text-sm outline-none focus:border-pink-400 transition-colors ${errors.email ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">
                      Article Title <span className="text-pink-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={form.title}
                      onChange={handleChange}
                      placeholder="e.g. How to Book Escorts Safely in Mumbai"
                      className={`w-full border-2 rounded-xl px-4 py-3 text-gray-800 text-sm outline-none focus:border-pink-400 transition-colors ${errors.title ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}`}
                    />
                    {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                  </div>

                  {/* Category + Tags */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">
                        Category <span className="text-pink-500">*</span>
                      </label>
                      <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className={`w-full border-2 rounded-xl px-4 py-3 text-gray-800 text-sm outline-none focus:border-pink-400 transition-colors appearance-none ${errors.category ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}`}
                      >
                        <option value="">Select a category…</option>
                        {CATEGORIES.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                      {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">
                        Tags <span className="text-gray-400 font-normal">(comma-separated)</span>
                      </label>
                      <input
                        type="text"
                        name="tags"
                        value={form.tags}
                        onChange={handleChange}
                        placeholder="escorts, Mumbai, safety, guide"
                        className="w-full border-2 border-gray-200 bg-gray-50 focus:bg-white rounded-xl px-4 py-3 text-gray-800 text-sm outline-none focus:border-pink-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Excerpt */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">
                      Short Excerpt / Summary <span className="text-pink-500">*</span>
                    </label>
                    <textarea
                      name="excerpt"
                      value={form.excerpt}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Write a 1–2 sentence summary of your article (min. 50 characters)…"
                      className={`w-full border-2 rounded-xl px-4 py-3 text-gray-800 text-sm outline-none focus:border-pink-400 transition-colors resize-none ${errors.excerpt ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}`}
                    />
                    <div className="flex justify-between mt-1">
                      {errors.excerpt ? <p className="text-red-500 text-xs">{errors.excerpt}</p> : <span />}
                      <p className="text-gray-400 text-xs">{form.excerpt.length} chars</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">
                      Article Content <span className="text-pink-500">*</span>
                    </label>
                    <textarea
                      name="content"
                      value={form.content}
                      onChange={handleChange}
                      rows={14}
                      placeholder="Write your full article here (minimum 200 characters). You can use plain text — our editors will format it before publishing…"
                      className={`w-full border-2 rounded-xl px-4 py-3 text-gray-800 text-sm outline-none focus:border-pink-400 transition-colors resize-y ${errors.content ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}`}
                    />
                    <div className="flex justify-between mt-1">
                      {errors.content ? <p className="text-red-500 text-xs">{errors.content}</p> : <span />}
                      <p className={`text-xs ${form.content.length < 200 ? "text-red-400" : "text-green-500"}`}>
                        {form.content.length} / 200 min chars
                      </p>
                    </div>
                  </div>

                  {/* Submit button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-500 to-rose-600 text-white font-extrabold py-4 rounded-2xl text-lg hover:from-pink-600 hover:to-rose-700 shadow-lg hover:shadow-pink-200 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-3"
                    >
                      <span>✍️</span>
                      Submit Article via WhatsApp
                    </button>
                    <p className="text-center text-gray-400 text-xs mt-3">
                      Your article will be sent to our editorial team via WhatsApp for review.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
