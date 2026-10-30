import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';

interface CtaBandProps {
  onJoinClick: () => void;
}

export const CtaBand: React.FC<CtaBandProps> = ({ onJoinClick }) => {
  return (
    <section className="bg-[#17140f] py-20 md:py-24 text-center border-t border-[#3a352b] relative overflow-hidden">
      {/* Decorative radial background glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, #f2b705 0%, rgba(242, 183, 5, 0) 70%)',
        }}
      />

      <div className="wrap relative z-10 flex flex-col items-center">
        <div className="eyebrow text-[#ffe07a] mb-3 before:bg-[#f2b705]">
          READY TO START?
        </div>

        <h2 className="!text-white font-display font-black text-3xl sm:text-5xl uppercase tracking-tight max-w-[760px] mx-auto mb-4 leading-tight">
          YOUR TRANSFORMATION STARTS ON THE{' '}
          <span className="text-[#f2b705]">4TH FLOOR.</span>
        </h2>

        <p className="text-[#cfc8b2] text-base sm:text-lg max-w-[540px] mx-auto mb-8 leading-relaxed">
          Walk in today, inspect the machinery, meet the floor trainers, and experience
          why La Fit Gym is Kothrud's trusted training destination.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button onClick={onJoinClick} className="btn btn-primary">
            <span>JOIN LA FIT NOW</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <a
            href={`tel:${GYM_CONTACT.phone}`}
            className="btn btn-dark border border-[#cfc8b2]/40"
          >
            <Phone className="w-4 h-4" />
            <span>CALL +91 84088 04848</span>
          </a>
        </div>
      </div>
    </section>
  );
};
