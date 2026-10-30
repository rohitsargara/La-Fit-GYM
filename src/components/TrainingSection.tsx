import React, { useState } from 'react';
import { PROGRAMS_DATA, ServiceProgram } from '../data/gymData';
import { ArrowRight, Check } from 'lucide-react';

interface TrainingSectionProps {
  onSelectProgram: (program: ServiceProgram) => void;
}

export const TrainingSection: React.FC<TrainingSectionProps> = ({ onSelectProgram }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section id="training" className="section-tint py-20 md:py-28">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-12 lg:gap-14 items-start">
          {/* Left Column: Photo & Context */}
          <div className="lg:sticky lg:top-28">
            <div className="relative border-2 border-[#17140f] rounded-[18px] overflow-hidden bg-white shadow-md">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=80"
                alt="La Fit Gym trainer creating custom workout plan with member"
                className="w-full aspect-3/4 object-cover object-center"
                loading="lazy"
              />
              <div className="p-5 bg-white border-t border-[#17140f]">
                <span className="font-mono-tag text-xs font-bold text-[#6f6955] uppercase tracking-wider block">
                  PERSONALIZED COACHING ON THE FLOOR
                </span>
                <p className="font-display font-black text-xl uppercase text-[#17140f] mt-1">
                  WORKOUT & DIET TAILORED FOR YOU
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Section Header & 6 Programs Grid */}
          <div>
            <div className="sec-head mb-8">
              <div className="eyebrow">PROGRAMS</div>
              <h2 className="text-[#17140f] tracking-tight">
                FIND YOUR STRENGTH.
              </h2>
              <p className="text-[#6f6955] text-base sm:text-lg mt-3 max-w-[580px]">
                A comprehensive fitness floor designed around your personal ambitions.
                Pick a discipline, or combine them all under certified guidance.
              </p>
            </div>

            {/* 6 Programs Grid matching antimatterfit svc-grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROGRAMS_DATA.map((prog) => {
                const isSelected = selectedId === prog.id;
                return (
                  <article
                    key={prog.id}
                    onClick={() => {
                      setSelectedId(isSelected ? null : prog.id);
                      onSelectProgram(prog);
                    }}
                    className={`svc-card cursor-pointer group ${
                      isSelected ? 'ring-2 ring-[#f2b705] bg-[#fff9e8]' : ''
                    }`}
                  >
                    <div>
                      <span className="num">{prog.number}</span>
                      <h3 className="font-display font-extrabold text-xl text-[#17140f] mt-3 mb-2 uppercase">
                        {prog.title}
                      </h3>
                      <p className="text-sm text-[#6f6955] leading-relaxed">
                        {prog.shortDesc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#ece3c8] flex items-center justify-between text-xs font-mono-tag font-bold uppercase tracking-wider text-[#3a352b] group-hover:text-[#17140f]">
                      <span>View Program Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#f2b705]" />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
