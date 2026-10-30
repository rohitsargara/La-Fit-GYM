import React from 'react';
import { X } from 'lucide-react';
import { GalleryPhoto } from '../data/gymData';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-[#17140f] border-2 border-[#f2b705] rounded-[20px] overflow-hidden shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#17140f]/80 text-white border border-[#f2b705] flex items-center justify-center hover:bg-[#f2b705] hover:text-[#17140f] transition-colors"
          aria-label="Close image"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-16/10 max-h-[70vh] bg-black">
          <img
            src={photo.url}
            alt={photo.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="p-5 bg-[#17140f] text-white flex items-center justify-between border-t border-[#3a352b]">
          <div>
            <span className="font-mono-tag text-xs font-bold text-[#f2b705] uppercase tracking-wider block">
              {photo.categoryLabel}
            </span>
            <h3 className="font-display font-extrabold text-lg text-white uppercase mt-0.5">
              {photo.title}
            </h3>
          </div>
          <span className="font-mono-tag text-xs text-[#cfc8b2]">
            La Fit Gym · Kothrud, Pune
          </span>
        </div>
      </div>
    </div>
  );
};
