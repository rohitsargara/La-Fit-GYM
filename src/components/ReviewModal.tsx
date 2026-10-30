import React, { useState } from 'react';
import { X, Star, ExternalLink, CheckCircle } from 'lucide-react';
import { GYM_CONTACT, Testimonial } from '../data/gymData';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddReview: (review: Testimonial) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  onAddReview,
}) => {
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('Member · Kothrud');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || author.trim().length < 2) {
      setError('Please provide your name.');
      return;
    }
    if (!text.trim() || text.trim().length < 10) {
      setError('Please write at least 10 characters describing your experience.');
      return;
    }

    setError('');
    const newRev: Testimonial = {
      id: `custom-${Date.now()}`,
      author: author.trim(),
      role: role.trim() || 'Member · Pune',
      rating,
      date: 'Just now',
      text: text.trim(),
      isGoogleVerified: false,
    };

    onAddReview(newRev);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#fffdf6] border-2 border-[#17140f] rounded-[20px] shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full border border-[#17140f] flex items-center justify-center hover:bg-[#17140f] hover:text-[#f2b705] transition-colors"
          aria-label="Close review modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 pr-8">
          <span className="font-mono-tag text-xs font-bold text-[#d99a00] uppercase tracking-wider block">
            MEMBER FEEDBACK
          </span>
          <h3 className="font-display font-black text-2xl uppercase text-[#17140f] mt-1">
            Write a Review
          </h3>
          <p className="text-xs text-[#6f6955] mt-1">
            Share your training experience at La Fit Gym Kothrud with the community.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 bg-[#fff9e8] border border-[#f2b705] rounded-xl text-center flex flex-col items-center gap-3">
            <CheckCircle className="w-12 h-12 text-[#d99a00]" />
            <h4 className="font-display font-black text-xl uppercase text-[#17140f]">
              Review Added!
            </h4>
            <p className="text-xs text-[#3a352b]">
              Thank you, <strong>{author}</strong>! Your review is now visible on the website.
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5 mt-2 w-full">
              <a
                href={GYM_CONTACT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-xs flex-1 justify-center"
              >
                <span>Also Post to Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button onClick={onClose} className="btn btn-ghost text-xs">
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {error && (
              <div className="p-3 bg-red-50 border border-red-300 rounded-lg text-xs text-red-700">
                {error}
              </div>
            )}

            {/* Rating Stars */}
            <div>
              <label className="block font-mono-tag text-xs font-bold uppercase text-[#17140f] mb-1.5">
                Star Rating
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 text-2xl focus:outline-none transition-transform hover:scale-110"
                    title={`${star} Star`}
                  >
                    <span
                      className={star <= rating ? 'text-[#f2b705]' : 'text-[#ece3c8]'}
                    >
                      ★
                    </span>
                  </button>
                ))}
                <span className="font-mono-tag text-xs font-bold text-[#17140f] ml-2">
                  {rating} / 5 Stars
                </span>
              </div>
            </div>

            <div>
              <label className="block font-mono-tag text-xs font-bold uppercase text-[#17140f] mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="e.g. Rahul Kulkarni"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#ece3c8] text-sm text-[#17140f] bg-white focus:outline-none focus:ring-2 focus:ring-[#f2b705]"
              />
            </div>

            <div>
              <label className="block font-mono-tag text-xs font-bold uppercase text-[#17140f] mb-1">
                Area / Role
              </label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="e.g. Member · Mayur Colony"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#ece3c8] text-sm text-[#17140f] bg-white focus:outline-none focus:ring-2 focus:ring-[#f2b705]"
              />
            </div>

            <div>
              <label className="block font-mono-tag text-xs font-bold uppercase text-[#17140f] mb-1">
                Your Review *
              </label>
              <textarea
                required
                rows={3}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="How was the equipment, trainers, and atmosphere?..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#ece3c8] text-sm text-[#17140f] bg-white focus:outline-none focus:ring-2 focus:ring-[#f2b705]"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                className="btn btn-primary flex-1 justify-center py-2.5"
              >
                Submit Feedback
              </button>
              <a
                href={GYM_CONTACT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost text-xs justify-center py-2.5"
              >
                <span>Google Maps Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
