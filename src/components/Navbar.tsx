import React, { useState } from 'react';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';

interface NavbarProps {
  onOpenEnquiry: (planDuration?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[rgba(255,253,246,0.92)] backdrop-blur-md border-b border-[#ece3c8]">
      <div className="wrap flex items-center justify-between h-[74px]">
        {/* Brand Logo matching antimatterfit */}
        <a
          href="#"
          className="flex flex-col leading-none select-none group"
          aria-label="LA FIT GYM Kothrud Home"
        >
          <div className="font-display font-black text-2xl tracking-tight text-[#17140f] flex items-center">
            <span>la fit</span>
            <span className="bg-[#f2b705] text-[#17140f] px-1.5 py-0.5 ml-1 rounded-sm text-xl uppercase font-extrabold tracking-wider">
              gym
            </span>
          </div>
          <small className="font-mono-tag text-[0.62rem] tracking-[0.28em] text-[#6f6955] mt-1 uppercase font-bold">
            KOTHRUD · PUNE
          </small>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-[0.88rem] font-semibold text-[#3a352b]">
          <button
            onClick={() => handleNavClick('#about')}
            className="hover:text-[#17140f] py-2 transition-colors relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#f2b705]"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('#training')}
            className="hover:text-[#17140f] py-2 transition-colors relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#f2b705]"
          >
            Training
          </button>
          <button
            onClick={() => handleNavClick('#facilities')}
            className="hover:text-[#17140f] py-2 transition-colors relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#f2b705]"
          >
            Facilities
          </button>
          <button
            onClick={() => handleNavClick('#membership')}
            className="hover:text-[#17140f] py-2 transition-colors relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#f2b705]"
          >
            Membership
          </button>
          <button
            onClick={() => handleNavClick('#gallery')}
            className="hover:text-[#17140f] py-2 transition-colors relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#f2b705]"
          >
            Gallery
          </button>
          <button
            onClick={() => handleNavClick('#reviews')}
            className="hover:text-[#17140f] py-2 transition-colors relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#f2b705]"
          >
            Reviews
          </button>
          <button
            onClick={() => handleNavClick('#contact')}
            className="hover:text-[#17140f] py-2 transition-colors relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#f2b705]"
          >
            Contact
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${GYM_CONTACT.phone}`}
            className="flex items-center gap-1.5 text-xs font-mono-tag font-bold text-[#17140f] px-3 py-2 border border-[#17140f] rounded-full hover:bg-[#17140f] hover:text-[#ffe07a] transition-all"
            title="Call La Fit Gym"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>84088 04848</span>
          </a>
          <button
            onClick={() => onOpenEnquiry()}
            className="btn btn-primary"
            aria-label="Join La Fit Gym"
          >
            <span>JOIN LA FIT</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-11 h-11 rounded-xl border-[1.5px] border-[#17140f] flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`w-5 h-0.5 bg-[#17140f] transition-transform duration-200 ${
              mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-[#17140f] transition-opacity duration-200 ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-[#17140f] transition-transform duration-200 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fffdf6] border-b border-[#ece3c8] px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4 text-base font-bold text-[#17140f]">
            <button
              onClick={() => handleNavClick('#about')}
              className="text-left py-2 border-b border-[#ece3c8]/60"
            >
              About La Fit
            </button>
            <button
              onClick={() => handleNavClick('#training')}
              className="text-left py-2 border-b border-[#ece3c8]/60"
            >
              Training Programs
            </button>
            <button
              onClick={() => handleNavClick('#facilities')}
              className="text-left py-2 border-b border-[#ece3c8]/60"
            >
              Gym Facilities
            </button>
            <button
              onClick={() => handleNavClick('#membership')}
              className="text-left py-2 border-b border-[#ece3c8]/60"
            >
              Membership Plans
            </button>
            <button
              onClick={() => handleNavClick('#gallery')}
              className="text-left py-2 border-b border-[#ece3c8]/60"
            >
              Floor Gallery
            </button>
            <button
              onClick={() => handleNavClick('#reviews')}
              className="text-left py-2 border-b border-[#ece3c8]/60"
            >
              Member Reviews
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="text-left py-2 border-b border-[#ece3c8]/60"
            >
              Find Us & Contact
            </button>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="btn btn-primary w-full justify-center"
            >
              <span>JOIN LA FIT NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${GYM_CONTACT.phone}`}
                className="btn btn-ghost text-xs justify-center py-2.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Gym</span>
              </a>
              <a
                href={`https://wa.me/${GYM_CONTACT.phoneClean}?text=${encodeURIComponent(
                  'Hi La Fit Gym Kothrud, I would like to enquire about gym membership.'
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
        </div>
      )}
    </header>
  );
};
