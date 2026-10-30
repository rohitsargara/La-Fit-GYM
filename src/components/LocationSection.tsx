import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Navigation,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';
import {
  validateEnquiry,
  generateWhatsAppUrl,
  isGymOpen,
  EnquiryData,
} from '../utils/gymLogic';

export const LocationSection: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryData>({
    name: '',
    phone: '',
    goal: 'Strength & Muscle Building',
    timing: 'Morning (6 AM - 9 AM)',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Live status
  const now = new Date();
  const gymStatus = isGymOpen(now.getDay(), now.getHours());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateEnquiry(formData);
    if (!result.valid) {
      setFormErrors(result.errors);
      return;
    }

    setFormErrors({});
    setSubmitted(true);

    // Optional direct trigger to WhatsApp
    const waUrl = generateWhatsAppUrl(formData);
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="section-tint py-20 md:py-28">
      <div className="wrap">
        <div className="sec-head mb-12">
          <div className="eyebrow">LOCATION & CONTACT</div>
          <h2 className="text-[#17140f] tracking-tight">
            FIND US. <span className="hl">START TRAINING.</span>
          </h2>
          <p className="text-[#6f6955] text-base sm:text-lg mt-3 max-w-[620px]">
            Located on Karve Road, right opposite the historic Karve Putla in Kothrud, Pune.
            Drop in for a walk-through tour or contact us below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Business Details & Map (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Info Card */}
            <div className="bg-white border-[1.5px] border-[#17140f] rounded-[18px] p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-[#ece3c8]">
                <div>
                  <h3 className="font-display font-black text-2xl uppercase text-[#17140f]">
                    LA FIT GYM
                  </h3>
                  <span className="font-mono-tag text-xs font-bold text-[#6f6955] uppercase tracking-wider block mt-0.5">
                    Kothrud, Pune · 4th Floor
                  </span>
                </div>

                {/* Live Open / Closed Badge */}
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono-tag text-xs font-bold uppercase tracking-wider ${
                    gymStatus.open
                      ? 'bg-[#dcfce7] text-[#166534] border border-[#86efac]'
                      : 'bg-[#fee2e2] text-[#991b1b] border border-[#fca5a5]'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      gymStatus.open ? 'bg-[#22c55e] animate-pulse' : 'bg-[#ef4444]'
                    }`}
                  />
                  <span>{gymStatus.message}</span>
                </div>
              </div>

              {/* Detail Items */}
              <div className="flex flex-col gap-5 text-sm sm:text-base">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#f2b705] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#17140f]" />
                  </div>
                  <div>
                    <strong className="block font-display font-extrabold uppercase text-[#17140f] text-sm">
                      Address & Landmark
                    </strong>
                    <p className="text-[#3a352b] text-sm mt-0.5 leading-relaxed">
                      {GYM_CONTACT.address}
                    </p>
                    <span className="inline-block mt-1 text-xs font-mono-tag text-[#d99a00] font-bold">
                      ★ Landmark: Next to HP Petrol Pump, Above Domino's Pizza
                    </span>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#f2b705] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-[#17140f]" />
                  </div>
                  <div>
                    <strong className="block font-display font-extrabold uppercase text-[#17140f] text-sm">
                      Opening Hours
                    </strong>
                    <p className="text-[#3a352b] text-sm mt-0.5">
                      {GYM_CONTACT.timings.weekdays}
                    </p>
                    <p className="text-[#6f6955] text-xs mt-0.5">
                      {GYM_CONTACT.timings.sunday}
                    </p>
                  </div>
                </div>

                {/* Phone & Direct Contacts */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#f2b705] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-[#17140f]" />
                  </div>
                  <div>
                    <strong className="block font-display font-extrabold uppercase text-[#17140f] text-sm">
                      Direct Inquiries & Call
                    </strong>
                    <p className="text-[#3a352b] text-sm mt-0.5 font-mono-tag font-bold">
                      {GYM_CONTACT.phone}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 pt-6 border-t border-[#ece3c8]">
                <a
                  href={GYM_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-xs justify-center py-2.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${GYM_CONTACT.phone}`}
                  className="btn btn-ghost text-xs justify-center py-2.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Click to Call</span>
                </a>

                <a
                  href={`https://wa.me/${GYM_CONTACT.phoneClean}?text=${encodeURIComponent(
                    'Hello La Fit Gym Kothrud, I would like to visit the gym and know more about membership packages.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn text-xs justify-center py-2.5 bg-[#25D366] text-white border-0 hover:bg-[#1EBE5D]"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-[18px] overflow-hidden border-[1.5px] border-[#17140f] bg-white h-[280px] shadow-xs relative">
              <iframe
                title="La Fit Gym Kothrud Pune Location Map"
                src={GYM_CONTACT.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Free Trial / Membership Enquiry Form (5 cols) */}
          <div className="lg:col-span-5 bg-white border-[1.5px] border-[#17140f] rounded-[18px] p-6 sm:p-8 shadow-xs">
            <div className="mb-6">
              <span className="font-mono-tag text-xs font-bold text-[#d99a00] uppercase tracking-wider block">
                FREE 1-DAY PASS & CONSULTATION
              </span>
              <h3 className="font-display font-extrabold text-2xl uppercase text-[#17140f] mt-1">
                Book a Visit
              </h3>
              <p className="text-xs text-[#6f6955] mt-1 leading-relaxed">
                Fill in your details to reserve a complimentary tour and speak directly with a floor coach.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-[#fff9e8] border border-[#f2b705] rounded-xl text-center flex flex-col items-center gap-3 animate-in fade-in">
                <CheckCircle className="w-10 h-10 text-[#d99a00]" />
                <h4 className="font-display font-black text-lg uppercase text-[#17140f]">
                  Enquiry Submitted!
                </h4>
                <p className="text-xs text-[#3a352b]">
                  Thank you, <strong>{formData.name}</strong>. We are opening WhatsApp to connect you directly with the front desk.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-ghost text-xs mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name */}
                <div>
                  <label className="block font-mono-tag text-xs font-bold uppercase text-[#17140f] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rohit Sharma"
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm text-[#17140f] bg-[#fffdf6] focus:outline-none focus:ring-2 focus:ring-[#f2b705] ${
                      formErrors.name ? 'border-red-500' : 'border-[#ece3c8]'
                    }`}
                  />
                  {formErrors.name && (
                    <span className="text-xs text-red-600 mt-1 block">
                      {formErrors.name}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-mono-tag text-xs font-bold uppercase text-[#17140f] mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9822012345"
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm text-[#17140f] bg-[#fffdf6] focus:outline-none focus:ring-2 focus:ring-[#f2b705] ${
                      formErrors.phone ? 'border-red-500' : 'border-[#ece3c8]'
                    }`}
                  />
                  {formErrors.phone && (
                    <span className="text-xs text-red-600 mt-1 block">
                      {formErrors.phone}
                    </span>
                  )}
                </div>

                {/* Primary Fitness Goal */}
                <div>
                  <label className="block font-mono-tag text-xs font-bold uppercase text-[#17140f] mb-1.5">
                    Primary Fitness Goal
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#ece3c8] text-sm text-[#17140f] bg-[#fffdf6] focus:outline-none focus:ring-2 focus:ring-[#f2b705]"
                  >
                    <option value="Strength & Muscle Building">Strength & Muscle Building</option>
                    <option value="Weight Loss & Fat Reduction">Weight Loss & Fat Reduction</option>
                    <option value="General Health & Stamina">General Health & Stamina</option>
                    <option value="Personal Training Coaching">Personal Training Coaching</option>
                  </select>
                </div>

                {/* Preferred Time */}
                <div>
                  <label className="block font-mono-tag text-xs font-bold uppercase text-[#17140f] mb-1.5">
                    Preferred Workout Timing
                  </label>
                  <select
                    value={formData.timing}
                    onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#ece3c8] text-sm text-[#17140f] bg-[#fffdf6] focus:outline-none focus:ring-2 focus:ring-[#f2b705]"
                  >
                    <option value="Morning (6 AM - 9 AM)">Morning (6 AM - 9 AM)</option>
                    <option value="Mid-Day (10 AM - 4 PM)">Mid-Day (10 AM - 4 PM)</option>
                    <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                    <option value="Night (8 PM - 11 PM)">Night (8 PM - 11 PM)</option>
                  </select>
                </div>

                {/* Optional Message */}
                <div>
                  <label className="block font-mono-tag text-xs font-bold uppercase text-[#17140f] mb-1.5">
                    Message or Questions (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you are looking for..."
                    className="w-full px-4 py-2.5 rounded-lg border border-[#ece3c8] text-sm text-[#17140f] bg-[#fffdf6] focus:outline-none focus:ring-2 focus:ring-[#f2b705]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full justify-center mt-2 py-3"
                >
                  <Send className="w-4 h-4" />
                  <span>REQUEST PASS & CONNECT</span>
                </button>

                <p className="text-[0.68rem] font-mono-tag text-[#6f6955] text-center mt-1">
                  We respect your privacy. No spam. Instant direct WhatsApp connection.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
