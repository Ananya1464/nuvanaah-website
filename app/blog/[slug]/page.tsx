import MastectomyRecoveryTimeline from '../articles/MastectomyRecoveryTimeline';
import ChoosingProsthesis from '../articles/ChoosingProsthesis';
import ManagingChemoSideEffects from '../articles/ManagingChemoSideEffects';
import HairLossSolutions from '../articles/HairLossSolutions';
import LymphedemaManagement from '../articles/LymphedemaManagement';
import { notFound } from 'next/navigation';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  switch (slug) {
    case 'mastectomy-recovery-timeline':
      return <MastectomyRecoveryTimeline />;
    case 'choosing-prosthesis':
      return <ChoosingProsthesis />;
    case 'managing-chemo-side-effects':
      return <ManagingChemoSideEffects />;
    case 'hair-loss-solutions':
      return <HairLossSolutions />;
    case 'lymphedema-management':
      return <LymphedemaManagement />;
    case 'mental-wellness-cancer':
      return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 md:px-8 max-w-7xl mx-auto text-center space-y-6">
            <h1 className="font-serif text-3xl md:text-5xl text-teal-900">Finding Quiet Strength</h1>
            <p className="font-sans text-gray-600 text-lg">This article is currently being written and will be published soon.</p>
            <a href="/blog" className="inline-block mt-8 px-6 py-3 bg-teal-700 text-white rounded-full hover:bg-teal-800 transition-colors">
                Return to Journal
            </a>
        </div>
      );
    default:
      notFound();
  }
}
