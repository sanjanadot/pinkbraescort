import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { blogPosts, categories } from "@/lib/blog-posts";

const categoryColors: Record<string, string> = {
  "Escort Guide": "bg-pink-100 text-pink-700",
  "Mumbai Lifestyle": "bg-purple-100 text-purple-700",
  "Dating Tips": "bg-rose-100 text-rose-700",
  "Safety & Discretion": "bg-green-100 text-green-700",
  "Companion Stories": "bg-amber-100 text-amber-700",
  "City Guide": "bg-blue-100 text-blue-700",
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://pinkbraescort.in/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) redirect('/');

  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);
  const fallbackRelated = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const relatedPosts = related.length >= 2 ? related : fallbackRelated;

  return (
    <main>
      {/* ── ARTICLE HEADER ── */}
      <section
        className="relative pt-28 pb-16 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #ec4899 0%, #be185d 50%, #9d174d 100%)" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-10 left-10 text-white opacity-10 text-7xl" style={{ animation: "float 3s ease-in-out infinite" }}>♥</div>
          <div className="absolute bottom-10 right-16 text-white opacity-10 text-5xl" style={{ animation: "float 4s ease-in-out 1.5s infinite" }}>♥</div>
        </div>
        <div className="max-w-3xl mx-auto px-4 relative z-10 text-center">
          <span
            className={`inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-5 ${categoryColors[post.category] ?? "bg-pink-100 text-pink-700"}`}
          >
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-pink-100 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">{post.excerpt}</p>
          <div className="flex items-center justify-center gap-6 text-pink-200 text-sm flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
                {post.author.charAt(0)}
              </div>
              <span className="font-semibold text-white">{post.author}</span>
            </div>
            <span>📅 {post.date}</span>
            <span>⏱ {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-pink-500 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-pink-500 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-gray-700 truncate max-w-[200px] sm:max-w-none">{post.title}</span>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article body */}
            <article className="lg:col-span-2">
              {/* Hero image */}
              <div className="rounded-2xl overflow-hidden shadow-xl mb-10">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={450}
                  className="w-full h-72 sm:h-96 object-cover object-top"
                  priority
                />
              </div>
              {/* Content */}
              <div
                className="prose prose-lg max-w-none
                  prose-headings:font-extrabold prose-headings:text-gray-800 prose-headings:mt-8 prose-headings:mb-3
                  prose-h2:text-2xl prose-h2:text-pink-700 prose-h2:border-b prose-h2:border-pink-100 prose-h2:pb-2
                  prose-p:text-gray-600 prose-p:leading-relaxed
                  prose-strong:text-gray-800
                  prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-600 prose-li:mb-1"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              {/* Tags */}
              <div className="mt-10 pt-6 border-t border-gray-100">
                <p className="text-sm font-bold text-gray-700 mb-3">Tags:</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-pink-50 text-pink-600 text-xs font-semibold px-3 py-1 rounded-full border border-pink-100"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Author box */}
              <div className="mt-10 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 flex items-start gap-5 border border-pink-100">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white font-extrabold text-xl flex-shrink-0">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-extrabold text-gray-800 text-lg mb-1">{post.author}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Expert contributor at Pink Bra Escorts Mumbai. Writing about companion culture, city guides and responsible booking since 2015.
                  </p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* CTA card */}
              <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-6 text-white text-center shadow-lg">
                <div className="text-4xl mb-3">💕</div>
                <h3 className="text-xl font-extrabold mb-2">Book an Escort Now</h3>
                <p className="text-pink-100 text-sm mb-5 leading-relaxed">
                  5000+ verified companions. Available 24/7 across all Mumbai areas.
                </p>
                <a
                  href="tel:+919653203658"
                  className="block w-full bg-white text-pink-600 font-bold py-3 rounded-xl mb-3 hover:bg-pink-50 transition-colors text-sm"
                >
                  📞 Call Now
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=919653203658"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="block w-full bg-green-500 text-white font-bold py-3 rounded-xl hover:bg-green-600 transition-colors text-sm"
                >
                  💬 WhatsApp
                </a>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-extrabold text-gray-800 mb-4 text-lg">Browse Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <div
                      key={cat}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold ${categoryColors[cat] ?? "bg-gray-100 text-gray-600"}`}
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit article */}
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100 text-center">
                <div className="text-3xl mb-2">✍️</div>
                <h3 className="font-extrabold text-gray-800 mb-2">Write for Us</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  Share your story, guide or experience with our readers.
                </p>
                <Link
                  href="/blog/submit"
                  className="inline-block bg-pink-500 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-pink-600 transition-colors text-sm"
                >
                  Submit Article
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── RELATED POSTS ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-8 h-1 bg-pink-500 rounded-full inline-block" />
            <h2 className="text-2xl font-extrabold text-gray-800">Related Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blog/${rp.slug}`}
                className="group bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-xl hover:border-pink-200 transition-all duration-300"
              >
                <div className="relative overflow-hidden h-44">
                  <Image
                    src={rp.image}
                    alt={rp.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span
                    className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${categoryColors[rp.category] ?? "bg-pink-100 text-pink-700"}`}
                  >
                    {rp.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-gray-400 text-xs mb-2">⏱ {rp.readTime}</p>
                  <h3 className="font-bold text-gray-800 text-sm leading-snug group-hover:text-pink-600 transition-colors">
                    {rp.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://pinkbraescort.in" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://pinkbraescort.in/blog" },
                { "@type": "ListItem", position: 3, name: post.title, item: `https://pinkbraescort.in/blog/${post.slug}` },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.title,
              description: post.excerpt,
              author: { "@type": "Person", name: post.author },
              publisher: {
                "@type": "Organization",
                name: "Pink Bra Escorts Mumbai",
                url: "https://pinkbraescort.in",
              },
              datePublished: post.date,
              image: `https://pinkbraescort.in${post.image}`,
              url: `https://pinkbraescort.in/blog/${post.slug}`,
              keywords: post.tags.join(", "),
            },
          ]),
        }}
      />
    </main>
  );
}
