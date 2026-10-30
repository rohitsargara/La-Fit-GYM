import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryPhoto } from '../data/gymData';
import { Maximize2 } from 'lucide-react';

interface GallerySectionProps {
  onPhotoClick: (photo: GalleryPhoto) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onPhotoClick }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredPhotos =
    activeTab === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="section-tint py-20 md:py-28">
      <div className="wrap">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="eyebrow">GALLERY & FLOOR</div>
            <h2 className="text-[#17140f] tracking-tight">
              THE LA FIT EXPERIENCE.
            </h2>
            <p className="text-[#6f6955] text-base mt-2 max-w-[540px]">
              Take a visual tour inside our 4th floor gym located on Karve Road, Kothrud.
              Spacious training bays, natural light, and premium strength gear.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Floor Views' },
              { id: 'strength', label: 'Strength Zone' },
              { id: 'cardio', label: 'Cardio Deck' },
              { id: 'machines', label: 'Machines & Turf' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-mono-tag text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full border transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#17140f] text-[#ffe07a] border-[#17140f]'
                    : 'bg-white text-[#3a352b] border-[#ece3c8] hover:border-[#17140f]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onPhotoClick(photo)}
              className="group cursor-pointer rounded-[18px] overflow-hidden border-[1.5px] border-[#17140f] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[6px_6px_0px_#f2b705]"
            >
              <div className="aspect-4/3 relative overflow-hidden bg-black/5">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#f2b705] text-[#17140f] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3">
                  <span className="font-mono-tag text-[0.65rem] font-bold uppercase tracking-wider bg-[#fffdf6]/90 backdrop-blur-xs text-[#17140f] px-2.5 py-1 rounded-full border border-[#ece3c8]">
                    {photo.categoryLabel}
                  </span>
                </div>
              </div>

              <div className="p-4 border-t border-[#17140f]">
                <h3 className="font-display font-extrabold text-base text-[#17140f] uppercase line-clamp-1">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
