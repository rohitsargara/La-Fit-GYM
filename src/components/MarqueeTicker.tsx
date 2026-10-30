import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    'STRENGTH TRAINING',
    'WEIGHT TRAINING',
    'CARDIO & ENDURANCE',
    'PERSONAL TRAINING',
    'FITNESS COACHING',
    'STEAM & SHOWER',
    'KOTHRUD, PUNE',
    '4TH FLOOR GYM',
    'MODERN EQUIPMENT',
  ];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track select-none py-3.5">
        {items.concat(items).map((item, idx) => (
          <span key={idx} className="font-display font-black tracking-wider text-[#17140f]">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
