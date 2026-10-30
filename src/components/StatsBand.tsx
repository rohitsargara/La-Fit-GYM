import React from 'react';
import { GYM_CONTACT } from '../data/gymData';

export const StatsBand: React.FC = () => {
  return (
    <section className="bg-[#17140f] py-14 border-y border-[#3a352b]">
      <div className="wrap">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          <div>
            <b className="block font-display font-black text-3xl md:text-5xl text-[#f2b705] tracking-tight">
              4.9 ★
            </b>
            <span className="font-mono-tag text-xs tracking-[0.14em] uppercase text-[#cfc8b2] block mt-1 font-bold">
              GOOGLE BUSINESS RATING
            </span>
          </div>

          <div>
            <b className="block font-display font-black text-3xl md:text-5xl text-[#f2b705] tracking-tight">
              50+
            </b>
            <span className="font-mono-tag text-xs tracking-[0.14em] uppercase text-[#cfc8b2] block mt-1 font-bold">
              VERIFIED REVIEWS
            </span>
          </div>

          <div>
            <b className="block font-display font-black text-3xl md:text-5xl text-[#f2b705] tracking-tight">
              6:00 AM
            </b>
            <span className="font-mono-tag text-xs tracking-[0.14em] uppercase text-[#cfc8b2] block mt-1 font-bold">
              MON–SAT OPEN TO 11 PM
            </span>
          </div>

          <div>
            <b className="block font-display font-black text-3xl md:text-5xl text-[#f2b705] tracking-tight">
              4TH FLR
            </b>
            <span className="font-mono-tag text-xs tracking-[0.14em] uppercase text-[#cfc8b2] block mt-1 font-bold">
              KARVE ROAD, KOTHRUD
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
