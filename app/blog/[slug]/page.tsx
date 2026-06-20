import MastectomyRecoveryTimeline from '../articles/MastectomyRecoveryTimeline';
import ChoosingProsthesis from '../articles/ChoosingProsthesis';
import ManagingChemoSideEffects from '../articles/ManagingChemoSideEffects';
import HairLossSolutions from '../articles/HairLossSolutions';
import LymphedemaManagement from '../articles/LymphedemaManagement';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import ReadingProgressBar from '@/components/ui/ReadingProgressBar';
import { Flower, CalendarHeart } from 'lucide-react';
import Link from 'next/link';

const ARTICLE_META: Record<string, { title: string; description: string; image?: string }> = {
  'mastectomy-recovery-timeline': {
    title: 'Mastectomy Recovery Timeline: What to Expect Week by Week | Nuvanaah',
    description: 'A detailed week-by-week mastectomy recovery guide — pain management, drain care, returning to daily activities, and products that help at each stage.',
    image: '/images/blog/bamboo-cotton.png',
  },
  'choosing-prosthesis': {
    title: 'How to Choose the Right Breast Prosthesis in India | Nuvanaah',
    description: 'Your complete guide to finding a breast prosthesis after mastectomy — shapes, weights, materials, sizing, and where to buy in India.',
    image: '/images/blog/silicone-prosthesis.png',
  },
  'managing-chemo-side-effects': {
    title: 'Managing Chemotherapy Side Effects on Your Skin | Nuvanaah',
    description: 'Safe, gentle skincare routines for chemotherapy patients. Learn which ingredients to avoid, how to soothe sensitive skin, and products that help.',
    image: '/images/blog/applying-lotion.png',
  },
  'hair-loss-solutions': {
    title: 'Navigating Hair Loss During Cancer Treatment | Nuvanaah',
    description: 'Practical and emotional guidance for hair loss during chemotherapy — wigs, headwear, timing, and tips for maintaining confidence and comfort.',
    image: '/images/blog/dark-wig.png',
  },
  'lymphedema-management': {
    title: 'Understanding and Managing Lymphedema After Breast Cancer | Nuvanaah',
    description: 'Comprehensive guide to lymphedema after breast cancer surgery — symptoms, early detection, treatment, compression sleeves, and daily management strategies.',
    image: '/images/blog/compression-sleeve.png',
  },
}

export function generateStaticParams() {
  return Object.keys(ARTICLE_META).map(slug => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const meta = ARTICLE_META[params.slug]
  if (!meta) return { title: 'Article | Nuvanaah' }

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://www.nuvanaah.com/blog/${params.slug}`,
    },
    openGraph: {
      type: 'article',
      title: meta.title,
      description: meta.description,
      url: `https://www.nuvanaah.com/blog/${params.slug}`,
      siteName: 'Nuvanaah',
      images: meta.image ? [{ url: `https://www.nuvanaah.com${meta.image}`, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  let ArticleContent = null;
  switch (slug) {
    case 'mastectomy-recovery-timeline':
      ArticleContent = <MastectomyRecoveryTimeline />;
      break;
    case 'choosing-prosthesis':
      ArticleContent = <ChoosingProsthesis />;
      break;
    case 'managing-chemo-side-effects':
      ArticleContent = <ManagingChemoSideEffects />;
      break;
    case 'hair-loss-solutions':
      ArticleContent = <HairLossSolutions />;
      break;
    case 'lymphedema-management':
      ArticleContent = <LymphedemaManagement />;
      break;
    case 'mental-wellness-cancer':
      ArticleContent = (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 md:px-8 max-w-7xl mx-auto text-center space-y-6">
            <h1 className="font-display text-3xl md:text-5xl text-primary-700 font-bold">Finding Quiet Strength</h1>
            <p className="font-ui text-text-secondary text-lg">This article is currently being written and will be published soon.</p>
            <Link href="/blog" className="inline-block mt-8 px-6 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors">
                Return to Journal
            </Link>
        </div>
      );
      break;
    default:
      notFound();
  }

  return (
    <>
      <ReadingProgressBar />
      {ArticleContent}
      
      {/* Global CTAs for all articles */}
      <section className="bg-surface border-t border-border py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-border rounded-card p-8 text-center flex flex-col items-center justify-center">
            <Flower className="text-primary-600 w-10 h-10 mb-4" strokeWidth={1} />
            <h4 className="font-display text-2xl font-bold text-dark mb-2">Subscribe to Journal</h4>
            <p className="font-ui text-sm text-text-secondary mb-6">Gentle guidance and stories, delivered weekly.</p>
            <form className="flex w-full gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email address" className="flex-1 rounded-full border border-border px-4 py-2 font-ui text-sm focus:border-primary-600 focus:outline-none" />
              <button type="submit" className="rounded-full bg-primary-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-primary-700">Subscribe</button>
            </form>
          </div>
          <div className="bg-primary-fixed rounded-card p-8 text-center flex flex-col items-center justify-center">
            <CalendarHeart className="text-primary-700 w-10 h-10 mb-4" strokeWidth={1} />
            <h4 className="font-display text-2xl font-bold text-primary-700 mb-2">Need Guidance?</h4>
            <p className="font-ui text-sm text-primary-700/80 mb-6">Reach out to our care team via WhatsApp for personalized help.</p>
            <a href="https://wa.me/919076041779" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-8 py-3 text-sm font-bold text-primary-700 transition hover:bg-white/90">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
