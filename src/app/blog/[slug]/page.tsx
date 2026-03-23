import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import InlineCTA from "@/components/InlineCTA";
import Link from "next/link";

// Fake data fetcher to simulate CMS setup
async function getPostData(slug: string) {
  // Simulating async data formatting and fetching based on slug
  const title = slug.replace(/-/g, ' ');
  const content = [
    { type: 'h2', id: 'introduction', text: 'Introduction to the OPRA Exam' },
    { type: 'p', text: 'The Overseas Pharmacist Readiness Assessment (OPRA) exam is a crucial step for internationally qualified pharmacists aiming to practice in Australia. It evaluates a broader range of clinical knowledge compared to previous assessments, ensuring you meet contemporary safety and efficacy standards.' },
    { type: 'h2', id: 'structure', text: 'Exam Structure and Format' },
    { type: 'p', text: 'The exam comprises two distinct papers, each populated with 120 multiple-choice questions. Time management is crucial, as you have 3 hours for each. Paper 1 mainly focuses on pharmaceutical chemistry and pharmacology, while Paper 2 shifts entirely to test pharmaceutics and clinical therapeutics.' },
    { type: 'h3', id: 'paper-1', text: 'Paper 1 Breakdown' },
    { type: 'p', text: 'In Paper 1, you will encounter complex questions regarding drug metabolism, stereochemistry, and mechanisms of action. A solid understanding of basic sciences is non-negotiable here.' },
    { type: 'cta' }, // Mid-article CTA trigger
    { type: 'h3', id: 'paper-2', text: 'Paper 2 Breakdown' },
    { type: 'p', text: 'Paper 2 is heavily geared towards clinical pharmacy practice in acute and primary care settings. You must be able to interpret patient cases, recognize adverse drug reactions quickly, and select appropriate evidence-based therapies.' },
    { type: 'h2', id: 'preparation', text: 'Key Preparation Strategies' },
    { type: 'p', text: 'Start with the official syllabus provided by the Australian Pharmacy Council. Use standardized reference texts like the AMH (Australian Medicines Handbook) and TG (Therapeutic Guidelines) to ensure your clinical knowledge is entirely up-to-date with Australian standards.' },
  ];

  return {
    title: `Ultimate Guide to ${title}: OPRA Success Strategy`,
    author: "Dr. Sarah Jenkins",
    date: "March 24, 2026",
    readTime: "7 min read",
    content
  };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `OPRA Blog | ${slug}`,
    description: `Read our comprehensive guide and strategies covering ${slug} for OPRA exam preparation.`,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostData(slug);

  return (
    <div className="bg-white min-h-screen py-10 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8 text-sm text-slate-500 font-medium">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span className="mx-2 text-slate-300">/</span>
          <Link href="#" className="hover:text-emerald-600 transition-colors">Blog</Link>
          <span className="mx-2 text-slate-300">/</span>
          <span className="text-slate-800 capitalize truncate">{slug.replace(/-/g, ' ')}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 relative items-start">
          
          {/* Main Article Content */}
          <article className="lg:w-8/12 w-full">
            {/* Post Header */}
            <header className="mb-12 border-b border-slate-100 pb-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight capitalize">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-slate-600 font-medium pb-2">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mr-3 font-extrabold text-lg shadow-inner">
                    {post.author.charAt(0)}
                  </div>
                  <span className="text-slate-900 font-bold">{post.author}</span>
                </div>
                
                <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 mr-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {post.date}
                </div>
                
                <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 mr-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  {post.readTime}
                </div>
              </div>
            </header>

            {/* Prose Content Container (Typography Plugin Required) */}
            <div className="prose prose-lg prose-slate prose-a:text-emerald-600 hover:prose-a:text-emerald-500 prose-headings:text-slate-900 prose-img:rounded-2xl max-w-none pb-20">
              {post.content.map((block, idx) => {
                if (block.type === 'h2') return <h2 key={idx} id={block.id} className="scroll-mt-32">{block.text}</h2>;
                if (block.type === 'h3') return <h3 key={idx} id={block.id} className="scroll-mt-32">{block.text}</h3>;
                if (block.type === 'p') return <p key={idx} className="leading-relaxed text-slate-700">{block.text}</p>;
                if (block.type === 'cta') return <InlineCTA key={idx} />;
                return null;
              })}

              <hr className="my-12 border-slate-100" />
              
              {/* Developer Instruction Block */}
              <div className="p-8 bg-amber-50 rounded-2xl border border-amber-200 shadow-sm not-prose">
                <h4 className="flex items-center text-amber-900 font-bold text-xl mb-3">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Adding Markdown or JSON Data
                </h4>
                <p className="text-amber-800 mb-4 leading-relaxed">
                  To feed this dynamic route with actual markdown data, you should:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-amber-800 mb-4">
                  <li>Use a library like <code>gray-matter</code> to extract frontmatter and markdown strings from local <code>.md</code> files.</li>
                  <li>Pass the string through a compiler like <code>next-mdx-remote</code> or <code>react-markdown</code> instead of the mock JSON loop above.</li>
                  <li>To support inline custom React components (like the CTA), register the <code>&lt;InlineCTA /&gt;</code> component within your MDX compiler&apos;s component map.</li>
                </ol>
                <p className="text-amber-800 text-sm">
                  Example MDX: <code>## Topic Introduction \n Here is some content. \n &lt;InlineCTA /&gt; \n ## Conclusion</code>
                </p>
              </div>
            </div>
          </article>

          {/* Sidebar - Table of Contents */}
          <aside className="lg:w-4/12 relative">
            <TableOfContents />
          </aside>
          
        </div>
      </div>
    </div>
  );
}
