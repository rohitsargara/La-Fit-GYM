import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onGetStarted: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onGetStarted }) => {
  const highlights = [
    'Get to learn about your body, mechanics and exercise posture',
    'A tailored workout and nutrition plan that fits your personal body type',
    'Progressive training programs prepared for every fitness level and age group',
    'Comprehensive guidance for functional body toning, endurance, and strength development',
    'Certified floor trainers genuinely committed to helping you reach your goals in a welcoming space',
  ];

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div>
            <div className="eyebrow">ABOUT LA FIT</div>
            <h2 className="text-[#17140f] tracking-tight mb-5">
              MORE THAN A WORKOUT.
            </h2>
            <p className="text-base sm:text-lg text-[#3a352b] leading-relaxed mb-8">
              Welcome to <strong>La Fit Gym, Kothrud, Pune</strong>. Your space to focus
              on fitness, build strength and work towards your personal goals. Whether you're
              starting your fitness journey or looking to take your training further, we're
              here to help you take the next step.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={onGetStarted} className="btn btn-primary">
                <span>GET STARTED</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Highlights Cards with antimatterfit rotated gold diamond bullet */}
          <div className="flex flex-col gap-3.5">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 sm:p-5 bg-white border border-[#ece3c8] rounded-[14px] text-[#17140f] font-semibold text-sm sm:text-base hover:border-[#f2b705] transition-colors shadow-xs"
              >
                <span
                  className="shrink-0 w-3 h-3 mt-1.5 bg-[#f2b705] rotate-45 block"
                  aria-hidden="true"
                />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
