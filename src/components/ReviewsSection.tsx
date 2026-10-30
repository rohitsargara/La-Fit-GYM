import React from 'react';
import { Star, ExternalLink, PlusCircle, CheckCircle2 } from 'lucide-react';
import { GYM_CONTACT, Testimonial } from '../data/gymData';

interface ReviewsSectionProps {
  reviews: Testimonial[];
  onOpenAddReview: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  reviews,
  onOpenAddReview,
}) => {
  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className="wrap">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div className="eyebrow">GOOGLE BUSINESS REVIEWS</div>
            <h2 className="text-[#17140f] tracking-tight">
              REAL PEOPLE. <span className="hl">REAL EXPERIENCES.</span>
            </h2>
            <p className="text-[#6f6955] text-base sm:text-lg mt-3 max-w-[560px]">
              Genuine feedback from dedicated members who train at La Fit Gym, 4th Floor,
              Karve Road, Kothrud.
            </p>
          </div>

          {/* Rating Summary Card with Direct Google Maps Link */}
          <div className="flex flex-wrap items-center gap-4 bg-white border-[1.5px] border-[#17140f] rounded-[18px] p-5 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#f2b705] flex items-center justify-center font-display font-black text-2xl text-[#17140f]">
                4.9
              </div>
              <div>
                <div className="flex text-[#f2b705] text-sm">
                  {'★★★★★'}
                </div>
                <span className="font-mono-tag text-xs font-bold text-[#17140f] block mt-0.5">
                  50+ Google Reviews
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 border-t sm:border-t-0 sm:border-l border-[#ece3c8] pt-3 sm:pt-0 sm:pl-4">
              <a
                href={GYM_CONTACT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost text-xs py-2 px-3.5 inline-flex items-center gap-1.5"
                title="View on Google Maps"
              >
                <span>Google Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenAddReview}
                className="btn btn-primary text-xs py-2 px-3.5 inline-flex items-center gap-1.5"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Add Review</span>
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Grid matching antimatterfit voice-grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border-[1.5px] border-[#17140f] rounded-[18px] p-6 flex flex-col justify-between hover:border-[#f2b705] hover:shadow-[4px_4px_0px_#f2b705] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[#f2b705] text-sm tracking-widest">
                    {'★'.repeat(rev.rating)}
                  </div>
                  {rev.isGoogleVerified && (
                    <span className="inline-flex items-center gap-1 font-mono-tag text-[0.62rem] font-bold text-[#3a352b] bg-[#fff3d1] px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-[#d99a00]" />
                      <span>Google Verified</span>
                    </span>
                  )}
                </div>

                <p className="text-sm text-[#17140f] leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ece3c8]">
                <strong className="block font-display font-extrabold text-sm uppercase text-[#17140f]">
                  {rev.author}
                </strong>
                <small className="font-mono-tag text-[0.68rem] text-[#6f6955] uppercase tracking-wider block mt-0.5">
                  {rev.role} · {rev.date}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
