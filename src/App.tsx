/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { AboutSection } from './components/AboutSection';
import { TrainingSection } from './components/TrainingSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { StatsBand } from './components/StatsBand';
import { MembershipSection } from './components/MembershipSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { CtaBand } from './components/CtaBand';
import { Footer } from './components/Footer';

import { EnquiryModal } from './components/EnquiryModal';
import { LightboxModal } from './components/LightboxModal';
import { ReviewModal } from './components/ReviewModal';
import { ProgramModal } from './components/ProgramModal';

import {
  GYM_CONTACT,
  INITIAL_REVIEWS,
  PlanItem,
  GalleryPhoto,
  ServiceProgram,
  Testimonial,
} from './data/gymData';
import { Phone, MessageSquare } from 'lucide-react';

export default function App() {
  // Modal states
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedPlanDuration, setSelectedPlanDuration] = useState<string | undefined>();
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<ServiceProgram | null>(null);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  // Reviews state initialized with genuine Google reviews
  const [reviews, setReviews] = useState<Testimonial[]>(INITIAL_REVIEWS);

  // Handlers
  const handleOpenEnquiry = (planDuration?: string) => {
    setSelectedPlanDuration(planDuration);
    setEnquiryOpen(true);
  };

  const handlePlanEnquire = (plan: PlanItem) => {
    setSelectedPlanDuration(`${plan.durationNumber} ${plan.durationUnit}`);
    setEnquiryOpen(true);
  };

  const handleProgramSelect = (program: ServiceProgram) => {
    setSelectedProgram(program);
  };

  const handleProgramEnquire = (program: ServiceProgram) => {
    setSelectedPlanDuration(undefined);
    setEnquiryOpen(true);
  };

  const handleAddReview = (newReview: Testimonial) => {
    setReviews([newReview, ...reviews]);
  };

  const handleExploreClick = () => {
    const el = document.querySelector('#facilities') || document.querySelector('#about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fffdf6] text-[#17140f] antialiased selection:bg-[#f2b705] selection:text-[#17140f]">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>

      {/* Header Navigation */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <Hero
          onJoinClick={() => handleOpenEnquiry()}
          onExploreClick={handleExploreClick}
        />

        {/* Marquee Ticker */}
        <MarqueeTicker />

        {/* About Section */}
        <AboutSection onGetStarted={() => handleOpenEnquiry()} />

        {/* Training & Fitness Programs */}
        <TrainingSection onSelectProgram={handleProgramSelect} />

        {/* Gym Facilities & Amenities */}
        <FacilitiesSection />

        {/* Stats Band */}
        <StatsBand />

        {/* Membership Section */}
        <MembershipSection onEnquirePlan={handlePlanEnquire} />

        {/* Gallery Section */}
        <GallerySection onPhotoClick={(photo) => setSelectedPhoto(photo)} />

        {/* Reviews Section */}
        <ReviewsSection
          reviews={reviews}
          onOpenAddReview={() => setReviewModalOpen(true)}
        />

        {/* Location & Contact Section */}
        <LocationSection />

        {/* Call to Action Band */}
        <CtaBand onJoinClick={() => handleOpenEnquiry()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Quick Action Dock */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 bg-[#17140f]/95 backdrop-blur-md border border-[#3a352b] rounded-full p-2 px-3 shadow-2xl flex items-center justify-between">
        <a
          href={`tel:${GYM_CONTACT.phone}`}
          className="flex items-center gap-2 text-xs font-mono-tag font-bold text-white px-3 py-2 hover:text-[#f2b705]"
        >
          <Phone className="w-4 h-4 text-[#f2b705]" />
          <span>Call Desk</span>
        </a>

        <div className="h-4 w-px bg-[#3a352b]" />

        <button
          onClick={() => handleOpenEnquiry()}
          className="btn btn-primary py-2 px-4 text-xs"
        >
          <span>JOIN LA FIT</span>
        </button>

        <div className="h-4 w-px bg-[#3a352b]" />

        <a
          href={`https://wa.me/${GYM_CONTACT.phoneClean}?text=${encodeURIComponent(
            'Hi La Fit Gym Kothrud, I would like to enquire about membership details.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs font-mono-tag font-bold text-[#25D366] px-3 py-2"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Modals */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultPlan={selectedPlanDuration}
      />

      <LightboxModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />

      <ReviewModal
        isOpen={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
        onAddReview={handleAddReview}
      />

      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onEnquire={handleProgramEnquire}
      />
    </div>
  );
}
