import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, categories } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Escort Guides, Mumbai Lifestyle & Companion Tips",
  description:
    "Read expert articles on booking escorts in Mumbai safely, city nightlife guides, companion etiquette, discretion tips and more. Updated regularly by Pink Bra Escorts.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Escort Guides, Mumbai Lifestyle & Companion Tips | Pink Bra Escorts",
    description: "Expert articles on booking escorts in Mumbai safely, city nightlife guides, companion etiquette and discretion tips.",
    url: "https://pinkbraescort.in/blog",
    type: "website",
    images: [{ url: "https://pinkbraescort.in/images/services/default-escort.webp", width: 1200, height: 630, alt: "Pink Bra Escorts Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Escort Guides, Mumbai Lifestyle & Companion Tips",
    description: "Expert articles on booking escorts in Mumbai safely, nightlife guides, companion etiquette and discretion tips.",
    images: ["https://pinkbraescort.in/images/services/default-escort.webp"],
  },
};

const categoryColors: Record<string, string> = {
  "Escort Guide": "bg-pink-100 text-pink-700",
  "Mumbai Lifestyle": "bg-purple-100 text-purple-700",
  "Dating Tips": "bg-rose-100 text-rose-700",
  "Safety & Discretion": "bg-green-100 text-green-700",
  "Companion Stories": "bg-amber-100 text-amber-700",
  "City Guide": "bg-blue-100 text-blue-700",
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <main>
      {/* ── HERO ── */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #ec4899 0%, #be185d 50%, #9d174d 100%)",
        }}
      >
        {/* floating hearts */}
        <div className="absolute inset-0 overflow-hidden hidden sm:block pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/5 text-white opacity-10 text-7xl" style={{ animation: "float 3s ease-in-out infinite" }}>♥</div>
          <div className="absolute top-1/3 right-1/5 text-white opacity-10 text-5xl" style={{ animation: "float 4s ease-in-out 1s infinite" }}>♥</div>
          <div className="absolute bottom-1/4 left-1/3 text-white opacity-10 text-6xl" style={{ animation: "float 3.5s ease-in-out 2s infinite" }}>♥</div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-5 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Pink Bra Escorts Blog
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
            Expert Guides &amp; <br />
            <span
              className="bg-gradient-to-r from-yellow-200 via-pink-100 to-white bg-clip-text text-transparent"
            >
              Companion Insights
            </span>
          </h1>
          <p className="text-pink-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Everything you need to know about escorts in Mumbai — booking guides, city nightlife, safety tips and companion stories. Written by our team of experts.
          </p>
          <Link
            href="/blog/submit"
            className="inline-flex items-center gap-2 bg-white text-pink-600 font-bold px-8 py-3 rounded-full hover:bg-pink-50 shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <span>✍️</span> Submit Your Article
          </Link>
        </div>
      </section>

      {/* ── CATEGORY PILLS ── */}
      <section className="bg-white border-b border-gray-100 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex gap-3 overflow-x-auto scrollbar-hide">
          <Link
            href="/blog"
            className="flex-shrink-0 bg-pink-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-pink-600 transition-colors"
          >
            All
          </Link>
          {categories.map((cat) => (
            <span
              key={cat}
              className={`flex-shrink-0 text-sm font-semibold px-4 py-1.5 rounded-full cursor-default ${categoryColors[cat] ?? "bg-gray-100 text-gray-600"}`}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* ── FEATURED POST ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-1 bg-pink-500 rounded-full inline-block" />
            <h2 className="text-2xl font-extrabold text-gray-800">Featured Article</h2>
          </div>
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl hover:shadow-pink-200 transition-all duration-300 border border-pink-100">
              <div className="relative overflow-hidden h-72 lg:h-auto">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span
                  className={`absolute top-5 left-5 text-xs font-bold px-3 py-1 rounded-full ${categoryColors[featured.category] ?? "bg-pink-100 text-pink-700"}`}
                >
                  {featured.category}
                </span>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                  <span>📅 {featured.date}</span>
                  <span>⏱ {featured.readTime}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-800 mb-4 leading-snug group-hover:text-pink-600 transition-colors">
                  {featured.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-pink-200 flex items-center justify-center text-pink-700 font-bold text-sm">
                      {featured.author.charAt(0)}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{featured.author}</span>
                  </div>
                  <span className="text-pink-500 font-bold text-sm flex items-center gap-1 group-hover:gap-3 transition-all">
                    Read More →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── ALL POSTS GRID ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-8 h-1 bg-pink-500 rounded-full inline-block" />
            <h2 className="text-2xl font-extrabold text-gray-800">Latest Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-xl hover:border-pink-200 transition-all duration-300 flex flex-col"
              >
                <div className="relative overflow-hidden h-52">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span
                    className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${categoryColors[post.category] ?? "bg-pink-100 text-pink-700"}`}
                  >
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
                    <span>📅 {post.date}</span>
                    <span>⏱ {post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 leading-snug group-hover:text-pink-600 transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-xs">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-xs font-semibold text-gray-600">{post.author}</span>
                    </div>
                    <span className="text-pink-500 font-bold text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBMIT CTA BANNER ── */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
          <div className="absolute top-8 left-10 text-7xl">✍️</div>
          <div className="absolute bottom-8 right-10 text-7xl">📝</div>
        </div>
        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Have a Story to Share?</h2>
          <p className="text-pink-100 text-lg mb-8 leading-relaxed">
            Submit your article, guide or opinion piece. We publish quality content about escorts, lifestyle, Mumbai nightlife and companion culture.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/blog/submit"
              className="bg-white text-pink-600 font-bold px-8 py-3 rounded-full hover:bg-pink-50 shadow-lg transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2"
            >
              <span>✍️</span> Submit Article
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=919653203658&text=Hi%2C%20I%20want%20to%20submit%20an%20article%20for%20your%20blog"
              rel="noopener noreferrer"
              target="_blank"
              className="bg-green-500 text-white font-bold px-8 py-3 rounded-full hover:bg-green-600 shadow-lg transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2"
            >
              <span>💬</span> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Pink Bra Escorts Mumbai Blog",
            url: "https://pinkbraescort.in/blog",
            description:
              "Expert articles on escorts in Mumbai, booking guides, city nightlife, companion etiquette and discretion tips.",
            publisher: {
              "@type": "Organization",
              name: "Pink Bra Escorts Mumbai",
              url: "https://pinkbraescort.in",
            },
          }),
        }}
      />
    </main>
  );
}
