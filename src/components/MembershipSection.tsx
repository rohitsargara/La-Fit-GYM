import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { MEMBERSHIP_PLANS, PlanItem } from '../data/gymData';

interface MembershipSectionProps {
  onEnquirePlan: (plan: PlanItem) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onEnquirePlan }) => {
  const inclusions = [
    'Strength & Cardio Access',
    'Personalized Workout Routine',
    'Nutritional & Diet Guidelines',
    'Certified Floor Trainer Assistance',
    'Steam & Hot Shower Access',
    'Personal Locker & Changing Room',
    'Periodic Fitness & Form Assessments',
  ];

  return (
    <section id="membership" className="py-20 md:py-28">
      <div className="wrap">
        <div className="sec-head mb-12">
          <div className="eyebrow">MEMBERSHIP PLANS</div>
          <h2 className="text-[#17140f] tracking-tight">
            TAKE THE <span className="hl">FIRST STEP.</span>
          </h2>
          <p className="text-[#6f6955] text-base sm:text-lg mt-3 max-w-[620px]">
            Four flexible plan lengths tailored for every stage of your fitness journey.
            Pricing moves with ongoing seasonal gym offers, so contact our desk for today's best rate.
          </p>
        </div>

        {/* 4 Plans Grid matching antimatterfit plan-grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const isFeat = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative rounded-[18px] p-7 flex flex-col justify-between border-[1.5px] transition-all duration-200 ${
                  isFeat
                    ? 'bg-[#17140f] text-white border-[#17140f] shadow-xl md:-translate-y-2'
                    : 'bg-white text-[#17140f] border-[#17140f] hover:border-[#f2b705] hover:-translate-y-1'
                }`}
              >
                {/* Most Chosen Star Badge */}
                {isFeat && (
                  <div className="plan-badge">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>Most chosen</span>
                  </div>
                )}

                <div>
                  <div className="flex items-baseline gap-1.5 leading-none">
                    <span
                      className={`font-display font-black text-5xl ${
                        isFeat ? 'text-[#f2b705]' : 'text-[#17140f]'
                      }`}
                    >
                      {plan.durationNumber}
                    </span>
                    <span
                      className={`font-mono-tag text-xs font-bold tracking-widest ${
                        isFeat ? 'text-[#cfc8b2]' : 'text-[#6f6955]'
                      }`}
                    >
                      {plan.durationUnit}
                    </span>
                  </div>

                  <span
                    className={`inline-block mt-3 px-2 py-0.5 rounded-full text-[0.65rem] font-mono-tag font-bold uppercase tracking-wider ${
                      isFeat
                        ? 'bg-[#3a352b] text-[#ffe07a]'
                        : 'bg-[#fff3d1] text-[#3a352b]'
                    }`}
                  >
                    {plan.idealFor}
                  </span>

                  <p
                    className={`text-sm mt-4 leading-relaxed ${
                      isFeat ? 'text-[#cfc8b2]' : 'text-[#6f6955]'
                    }`}
                  >
                    {plan.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-current/15">
                  <button
                    onClick={() => onEnquirePlan(plan)}
                    className={`btn w-full justify-center text-xs ${
                      isFeat ? 'btn-primary' : 'btn-ghost'
                    }`}
                  >
                    <span>GET MEMBERSHIP DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Inclusions pill strip matching antimatterfit ul.incl */}
        <div className="mt-12 pt-8 border-t border-[#ece3c8]">
          <span className="font-mono-tag text-xs font-bold uppercase tracking-widest text-[#3a352b] block mb-3.5">
            ALL MEMBERSHIPS INCLUDE:
          </span>
          <div className="flex flex-wrap gap-2.5">
            {inclusions.map((inc, idx) => (
              <span
                key={idx}
                className="font-mono-tag text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white border border-[#17140f] text-[#17140f]"
              >
                {inc}
              </span>
            ))}
          </div>
          <p className="font-mono-tag text-xs text-[#6f6955] mt-5">
            * Personal training is charged separately based on 1-on-1 sessions. No hidden admission or surprise fees.
          </p>
        </div>
      </div>
    </section>
  );
};
