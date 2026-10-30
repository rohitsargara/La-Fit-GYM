import React from 'react';
import { X, ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { ServiceProgram, GYM_CONTACT } from '../data/gymData';
import { generateWhatsAppUrl } from '../utils/gymLogic';

interface ProgramModalProps {
  program: ServiceProgram | null;
  onClose: () => void;
  onEnquire: (program: ServiceProgram) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({
  program,
  onClose,
  onEnquire,
}) => {
  if (!program) return null;

  const handleWhatsApp = () => {
    const url = generateWhatsAppUrl({
      goal: program.title,
    });
    window.open(url, '_blank');
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-[#fffdf6] border-2 border-[#17140f] rounded-[20px] shadow-2xl p-6 sm:p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full border border-[#17140f] flex items-center justify-center hover:bg-[#17140f] hover:text-[#f2b705] transition-colors"
          aria-label="Close program details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4">
          <span className="font-mono-tag text-xs font-bold text-[#d99a00] tracking-widest uppercase">
            PROGRAM {program.number}
          </span>
          <h3 className="font-display font-black text-3xl uppercase text-[#17140f] mt-1">
            {program.title}
          </h3>
          <p className="text-sm font-semibold text-[#6f6955] mt-1">
            {program.shortDesc}
          </p>
        </div>

        <div className="my-6 p-5 bg-white border border-[#ece3c8] rounded-[14px]">
          <h4 className="font-mono-tag text-xs font-bold uppercase tracking-wider text-[#17140f] mb-2">
            What You Can Expect
          </h4>
          <p className="text-sm text-[#3a352b] leading-relaxed">
            {program.details}
          </p>

          <div className="mt-4 pt-3 border-t border-[#ece3c8] flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#17140f]">
              <CheckCircle2 className="w-4 h-4 text-[#d99a00] shrink-0" />
              <span>Full access to 4th floor equipment & floor trainers</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#17140f]">
              <CheckCircle2 className="w-4 h-4 text-[#d99a00] shrink-0" />
              <span>Form inspection & posture correction to prevent injury</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#17140f]">
              <CheckCircle2 className="w-4 h-4 text-[#d99a00] shrink-0" />
              <span>Periodic body composition check-ups</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              onEnquire(program);
            }}
            className="btn btn-primary flex-1 justify-center py-2.5 text-xs"
          >
            <span>Enquire For This Program</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleWhatsApp}
            className="btn text-xs justify-center py-2.5 bg-[#25D366] text-white border-0 hover:bg-[#1EBE5D]"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
