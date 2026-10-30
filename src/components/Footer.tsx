import React from 'react';
import { GYM_CONTACT } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t-2 border-[#17140f] pt-16 pb-20">
      <div className="wrap">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a href="#" className="flex flex-col leading-none mb-4">
              <div className="font-display font-black text-2xl tracking-tight text-[#17140f] flex items-center">
                <span>la fit</span>
                <span className="bg-[#f2b705] text-[#17140f] px-1.5 py-0.5 ml-1 rounded-sm text-xl uppercase font-extrabold tracking-wider">
                  gym
                </span>
              </div>
              <small className="font-mono-tag text-[0.62rem] tracking-[0.28em] text-[#6f6955] mt-1 uppercase font-bold">
                KOTHRUD · PUNE
              </small>
            </a>

            <p className="text-sm text-[#6f6955] max-w-[340px] leading-relaxed mb-6">
              Strength, cardio, and weight training on an expansive 4th-floor training space.
              Kothrud's trusted gym on Karve Road for people who take their fitness seriously.
            </p>

            {/* Social Pill Circles matching antimatterfit */}
            <div className="flex items-center gap-2">
              <a
                href={GYM_CONTACT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-[1.5px] border-[#17140f] flex items-center justify-center font-mono-tag text-xs font-bold text-[#17140f] hover:bg-[#f2b705] transition-colors"
                title="Google Maps Profile"
              >
                GM
              </a>
              <a
                href={`https://wa.me/${GYM_CONTACT.phoneClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-[1.5px] border-[#17140f] flex items-center justify-center font-mono-tag text-xs font-bold text-[#17140f] hover:bg-[#25D366] hover:text-white transition-colors"
                title="WhatsApp Us"
              >
                WA
              </a>
              <a
                href={`tel:${GYM_CONTACT.phone}`}
                className="w-10 h-10 rounded-full border-[1.5px] border-[#17140f] flex items-center justify-center font-mono-tag text-xs font-bold text-[#17140f] hover:bg-[#f2b705] transition-colors"
                title="Phone Call"
              >
                PH
              </a>
            </div>
          </div>

          {/* Programs Col (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-mono-tag text-xs font-bold uppercase tracking-[0.14em] text-[#6f6955] mb-4">
              TRAINING
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm font-semibold text-[#17140f]">
              <li>
                <button onClick={() => scrollTo('#training')} className="hover:text-[#d99a00] text-left">
                  Strength Training
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#training')} className="hover:text-[#d99a00] text-left">
                  Weight Training
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#training')} className="hover:text-[#d99a00] text-left">
                  Cardio & Stamina
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#training')} className="hover:text-[#d99a00] text-left">
                  Personal Training
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#training')} className="hover:text-[#d99a00] text-left">
                  Fitness Coaching
                </button>
              </li>
            </ul>
          </div>

          {/* Explore Col (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-mono-tag text-xs font-bold uppercase tracking-[0.14em] text-[#6f6955] mb-4">
              EXPLORE
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm font-semibold text-[#17140f]">
              <li>
                <button onClick={() => scrollTo('#about')} className="hover:text-[#d99a00] text-left">
                  About La Fit
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#facilities')} className="hover:text-[#d99a00] text-left">
                  Gym Facilities & Steam
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#membership')} className="hover:text-[#d99a00] text-left">
                  Membership Plans
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#gallery')} className="hover:text-[#d99a00] text-left">
                  Floor Gallery
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#reviews')} className="hover:text-[#d99a00] text-left">
                  Member Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* Timings & Contact Col (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono-tag text-xs font-bold uppercase tracking-[0.14em] text-[#6f6955] mb-4">
              TIMINGS & CONTACT
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-[#3a352b]">
              <li className="font-semibold text-[#17140f]">
                {GYM_CONTACT.timings.weekdays}
              </li>
              <li className="text-xs text-[#6f6955]">
                {GYM_CONTACT.timings.sunday}
              </li>
              <li className="pt-2 border-t border-[#ece3c8]">
                <a
                  href={`tel:${GYM_CONTACT.phone}`}
                  className="font-mono-tag font-bold text-base text-[#17140f] hover:text-[#d99a00]"
                >
                  {GYM_CONTACT.phone}
                </a>
              </li>
              <li className="text-xs text-[#6f6955] leading-relaxed">
                4th Floor, Karve Road, Opp. Karve Putla, Next to HP Petrol Pump, Kothrud, Pune 411038
              </li>
            </ul>
          </div>
        </div>

        {/* Foot Bottom */}
        <div className="pt-6 border-t border-[#ece3c8] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tag text-xs text-[#6f6955]">
          <div>
            © 2026 LA FIT GYM KOTHRUD, PUNE. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href={GYM_CONTACT.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-[#17140f]"
            >
              Google Business Profile
            </a>
            <span className="text-[#ece3c8]">|</span>
            <button onClick={() => scrollTo('#contact')} className="hover:underline hover:text-[#17140f]">
              Location & Directions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
