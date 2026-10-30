import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';

interface HeroProps {
  onJoinClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick, onExploreClick }) => {
  return (
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background radial gold glow matching antimatterfit */}
      <div
        className="absolute -right-24 -top-32 w-[650px] h-[650px] rounded-full pointer-events-none opacity-60"
        style={{
          background: 'radial-gradient(circle, #ffe07a 0%, rgba(255, 224, 122, 0) 68%)',
        }}
      />

      <div className="wrap relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-14 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <div className="eyebrow">
              BEST GYM IN KOTHRUD, PUNE
            </div>

            {/* Main Headline */}
            <h1 className="display text-[#17140f] tracking-tight">
              YOUR FITNESS.<br />
              YOUR STRENGTH.<br />
              <span className="hl">YOUR JOURNEY.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#6f6955] max-w-[520px] my-5 leading-relaxed">
              Push your limits. Build strength. Transform your lifestyle. Discover your
              fitness journey at La Fit Gym, Kothrud, Pune.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onJoinClick}
                className="btn btn-primary"
                aria-label="Join La Fit Gym"
              >
                <span>JOIN LA FIT</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onExploreClick}
                className="btn btn-ghost"
                aria-label="Explore Our Gym Facilities"
              >
                <Compass className="w-4 h-4 stroke-[2]" />
                <span>EXPLORE OUR GYM</span>
              </button>
            </div>

            {/* Hero Meta Stats Strip */}
            <div className="grid grid-cols-3 gap-4 pt-8 mt-9 border-t border-[#ece3c8] text-[#3a352b] font-mono-tag text-[0.72rem] tracking-wider uppercase">
              <div>
                <b className="font-display font-black text-2xl lg:text-3xl text-[#17140f] block tracking-normal normal-case">
                  4.9 ★
                </b>
                <span className="text-[#6f6955] block mt-0.5">50+ GOOGLE REVIEWS</span>
              </div>
              <div>
                <b className="font-display font-black text-2xl lg:text-3xl text-[#17140f] block tracking-normal normal-case">
                  6:00 AM
                </b>
                <span className="text-[#6f6955] block mt-0.5">MON–SAT TO 11 PM</span>
              </div>
              <div>
                <b className="font-display font-black text-2xl lg:text-3xl text-[#17140f] block tracking-normal normal-case">
                  4TH FLR
                </b>
                <span className="text-[#6f6955] block mt-0.5">KARVE RD, KOTHRUD</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with signature offset gold backdrop & badges */}
          <div className="relative mx-auto lg:mr-0 max-w-[480px] w-full pt-4 lg:pt-0">
            <div className="hero-media">
              <div className="media-inner aspect-4/5 w-full relative">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80"
                  alt="La Fit Gym Kothrud modern training floor with strength equipment and members"
                  className="w-full h-full object-cover"
                  loading="eager"
                />

                {/* Subtle dark gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge A (Top Right): First Session Time */}
              <div className="badge badge-light -top-4 -right-2 md:-right-4">
                <b>6 AM</b>
                <span className="font-mono-tag text-[0.65rem] text-[#6f6955] block tracking-widest">
                  FIRST SESSION DAILY
                </span>
              </div>

              {/* Floating Badge B (Bottom Left): Location & Landmark */}
              <div className="badge badge-dark -bottom-4 -left-2 md:-left-4">
                <b>4TH FLOOR</b>
                <span className="font-mono-tag text-[0.65rem] text-[#ded7c4] block tracking-wider">
                  OPP. KARVE PUTLA, KOTHRUD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
