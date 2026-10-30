import React from 'react';
import {
  Wind,
  Dumbbell,
  Cpu,
  Activity,
  Scale,
  Droplets,
  Lock,
  Sparkles,
  Music,
  Eye,
  Check,
} from 'lucide-react';
import { FACILITIES_DATA } from '../data/gymData';

export const FacilitiesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-4 h-4 text-[#17140f] stroke-[2.2]' };
    switch (iconName) {
      case 'Wind':
        return <Wind {...props} />;
      case 'Dumbbell':
        return <Dumbbell {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      case 'Activity':
        return <Activity {...props} />;
      case 'Scale':
        return <Scale {...props} />;
      case 'Droplets':
        return <Droplets {...props} />;
      case 'Lock':
        return <Lock {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Music':
        return <Music {...props} />;
      case 'Eye':
        return <Eye {...props} />;
      default:
        return <Check {...props} />;
    }
  };

  return (
    <section id="facilities" className="py-20 md:py-28">
      <div className="wrap">
        <div className="sec-head mb-12">
          <div className="eyebrow">AMENITIES & FLOOR</div>
          <h2 className="text-[#17140f] tracking-tight">
            BUILT FOR YOUR FITNESS GOALS.
          </h2>
          <p className="text-[#6f6955] text-base sm:text-lg mt-3 max-w-[620px]">
            Experience a clean, spacious 4th-floor training space on Karve Road, Kothrud.
            Equipped with modern biomechanical machines, free weights, and restorative amenities.
          </p>
        </div>

        {/* Antimatter-style Amenities Grid (5 columns on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-14">
          {FACILITIES_DATA.map((facility) => (
            <div
              key={facility.id}
              className="bg-white border border-[#ece3c8] rounded-[14px] p-4 sm:p-5 flex flex-col gap-3 font-semibold text-sm text-[#17140f] transition-all hover:border-[#f2b705] hover:-translate-y-1 hover:shadow-xs group"
            >
              <div className="w-[34px] h-[34px] rounded-[9px] bg-[#f2b705] grid place-items-center shrink-0">
                {getIcon(facility.icon)}
              </div>
              <div>
                <span className="block font-bold text-sm leading-snug text-[#17140f]">
                  {facility.title}
                </span>
                <span className="block text-xs font-normal text-[#6f6955] mt-1 line-clamp-2">
                  {facility.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Showcase: 3 High-Impact Real Equipment Zones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="interactive-card overflow-hidden flex flex-col">
            <div className="aspect-16/10 relative overflow-hidden border-b border-[#17140f]">
              <img
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80"
                alt="Strength Training Deck with heavy dumbbells and benches"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex flex-col gap-2">
              <span className="font-mono-tag text-[0.68rem] font-bold text-[#d99a00] uppercase tracking-wider">
                FREE WEIGHTS & PLATFORMS
              </span>
              <h3 className="font-display font-extrabold text-lg uppercase text-[#17140f]">
                Heavy Dumbbell & Barbell Deck
              </h3>
              <p className="text-xs text-[#6f6955] leading-relaxed">
                Full weight range for hypertrophy and strength conditioning, flat and incline benches, Olympic bars, and safety squat stations.
              </p>
            </div>
          </div>

          <div className="interactive-card overflow-hidden flex flex-col">
            <div className="aspect-16/10 relative overflow-hidden border-b border-[#17140f]">
              <img
                src="https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80"
                alt="Cardio zone with treadmills and natural light"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex flex-col gap-2">
              <span className="font-mono-tag text-[0.68rem] font-bold text-[#d99a00] uppercase tracking-wider">
                ENDURANCE & CALORIE BURN
              </span>
              <h3 className="font-display font-extrabold text-lg uppercase text-[#17140f]">
                4th Floor Cardio Line
              </h3>
              <p className="text-xs text-[#6f6955] leading-relaxed">
                High-end treadmills, spin cycles, and cross-trainers positioned by large windows with refreshing natural daylight.
              </p>
            </div>
          </div>

          <div className="interactive-card overflow-hidden flex flex-col">
            <div className="aspect-16/10 relative overflow-hidden border-b border-[#17140f]">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80"
                alt="Plate-loaded machines and functional workout zone"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex flex-col gap-2">
              <span className="font-mono-tag text-[0.68rem] font-bold text-[#d99a00] uppercase tracking-wider">
                ISOLATION & RECOVERY
              </span>
              <h3 className="font-display font-extrabold text-lg uppercase text-[#17140f]">
                Machinery & Steam Recovery
              </h3>
              <p className="text-xs text-[#6f6955] leading-relaxed">
                Biomechanical cable systems, pin-selected stacks, sanitized lockers, and dedicated steam bath cubicles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
