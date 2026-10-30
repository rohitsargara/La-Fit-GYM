import React, { useState, useEffect } from 'react';
import { X, Send, MessageSquare, CheckCircle } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';
import { validateEnquiry, generateWhatsAppUrl, EnquiryData } from '../utils/gymLogic';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultPlan,
}) => {
  const [formData, setFormData] = useState<EnquiryData>({
    name: '',
    phone: '',
    planDuration: defaultPlan || '12 Months',
    timing: 'Morning (6 AM - 9 AM)',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultPlan) {
      setFormData((prev) => ({ ...prev, planDuration: defaultPlan }));
    }
  }, [defaultPlan]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateEnquiry(formData);
    if (!result.valid) {
      setFormErrors(result.errors);
      return;
    }

    setFormErrors({});
    setSubmitted(true);

    const waUrl = generateWhatsAppUrl(formData);
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#fffdf6] border-2 border-[#17140f] rounded-[20px] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full border border-[#17140f] flex items-center justify-center hover:bg-[#17140f] hover:text-[#f2b705] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 pr-8">
          <span className="font-mono-tag text-xs font-bold text-[#d99a00] uppercase tracking-wider block">
            LA FIT GYM · KOTHRUD, PUNE
          </span>
          <h3 className="font-display font-black text-2xl uppercase text-[#17140f] mt-1">
            Membership Enquiry
          </h3>
          <p className="text-xs text-[#6f6955] mt-1">
            Connect directly with the front desk for current offers, package details, and free floor walkthrough.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 bg-[#fff9e8] border border-[#f2b705] rounded-xl text-center flex flex-col items-center gap-3">
            <CheckCircle className="w-12 h-12 text-[#d99a00]" />
            <h4 className="font-display font-black text-xl uppercase text-[#17140f]">
              Enquiry Sent!
            </h4>
            <p className="text-sm text-[#3a352b]">
              Thank you, <strong>{formData.name}</strong>. We are transferring you to WhatsApp for direct chat with our desk at <strong>{GYM_CONTACT.phone}</strong>.
            </p>
            <button onClick={onClose} className="btn btn-primary text-xs mt-3">
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block font-mono-tag text-xs font-bold uppercase text-[#17140f] mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Amit Patil"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#17140f] bg-white focus:outline-none focus:ring-2 focus:ring-[#f2b705] ${
                  formErrors.name ? 'border-red-500' : 'border-[#ece3c8]'
                }`}
              />
              {formErrors.name && (
                <span className="text-xs text-red-600 mt-1 block">
                  {formErrors.name}
                </span>
              )}
            </div>

            <div>
              <label className="block font-mono-tag text-xs font-bold uppercase text-[#17140f] mb-1">
                Phone Number (WhatsApp) *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 8408804848"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#17140f] bg-white focus:outline-none focus:ring-2 focus:ring-[#f2b705] ${
                  formErrors.phone ? 'border-red-500' : 'border-[#ece3c8]'
                }`}
              />
              {formErrors.phone && (
                <span className="text-xs text-red-600 mt-1 block">
                  {formErrors.phone}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-mono-tag text-xs font-bold uppercase text-[#17140f] mb-1">
                  Plan Duration
                </label>
                <select
                  value={formData.planDuration}
                  onChange={(e) =>
                    setFormData({ ...formData, planDuration: e.target.value })
                  }
                  className="w-full px-3 py-2.5 rounded-lg border border-[#ece3c8] text-sm text-[#17140f] bg-white focus:outline-none focus:ring-2 focus:ring-[#f2b705]"
                >
                  <option value="1 Month">1 Month</option>
                  <option value="3 Months">3 Months</option>
                  <option value="6 Months">6 Months</option>
                  <option value="12 Months">12 Months (Most chosen)</option>
                </select>
              </div>

              <div>
                <label className="block font-mono-tag text-xs font-bold uppercase text-[#17140f] mb-1">
                  Preferred Time
                </label>
                <select
                  value={formData.timing}
                  onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg border border-[#ece3c8] text-sm text-[#17140f] bg-white focus:outline-none focus:ring-2 focus:ring-[#f2b705]"
                >
                  <option value="Morning (6 AM - 9 AM)">Morning (6 AM - 9 AM)</option>
                  <option value="Mid-Day (10 AM - 4 PM)">Mid-Day (10 AM - 4 PM)</option>
                  <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                  <option value="Night (8 PM - 11 PM)">Night (8 PM - 11 PM)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-mono-tag text-xs font-bold uppercase text-[#17140f] mb-1">
                Questions or Fitness Goals (Optional)
              </label>
              <textarea
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Ask about discounts, trainer guidance, timings..."
                className="w-full px-3.5 py-2 rounded-lg border border-[#ece3c8] text-sm text-[#17140f] bg-white focus:outline-none focus:ring-2 focus:ring-[#f2b705]"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full justify-center mt-3 py-3"
            >
              <MessageSquare className="w-4 h-4" />
              <span>CONNECT VIA WHATSAPP & GET DETAILS</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
