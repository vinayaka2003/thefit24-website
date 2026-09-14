import React, { useState, Suspense } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { SmoothScroller } from './components/layout/SmoothScroller';
import { SEO } from './components/common/SEO';
import { InstagramReminder } from './components/common/InstagramReminder';
import { Trainer } from './types';

// Home Components (Eager loaded for fast initial view, or could be lazy too, but usually home is eager)
import { Hero } from './components/home/Hero';
import { ArchitectSplit } from './components/home/ArchitectSplit';
import { EquipmentStrip } from './components/home/EquipmentStrip';
import { MembershipPreview } from './components/home/MembershipPreview';
import { ReviewsSection } from './components/home/ReviewsSection';
import { GoogleReviewsSection } from './components/home/GoogleReviewsSection';
import { GymLocationSection } from './components/home/GymLocationSection';
import { Button } from './components/common/Button';

// Lazy loaded views
const AboutView = React.lazy(() => import('./components/about/AboutView').then(m => ({ default: m.AboutView })));
const FacilitiesView = React.lazy(() => import('./components/facilities/FacilitiesView').then(m => ({ default: m.FacilitiesView })));
const GalleryView = React.lazy(() => import('./components/gallery/GalleryView').then(m => ({ default: m.GalleryView })));
const MembershipView = React.lazy(() => import('./components/membership/MembershipView').then(m => ({ default: m.MembershipView })));
const TrainersView = React.lazy(() => import('./components/trainers/TrainersView').then(m => ({ default: m.TrainersView })));
const ContactView = React.lazy(() => import('./components/contact/ContactView').then(m => ({ default: m.ContactView })));
const CafeView = React.lazy(() => import('./components/cafe/CafeView').then(m => ({ default: m.CafeView })));

// Loading Fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#09090b]">
    <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
  </div>
);

function HomeView({ onOpenConsult }: { onOpenConsult: (type?: string) => void }) {
  const navigate = useNavigate();
  return (
    <>
      <SEO 
        title="TheFit24 - Yelahanka Bangalore's Premier Fitness Hub" 
        description="Get fit anytime with top-notch equipment and expert trainers. Your fitness journey starts now!"
      />
      <Hero
        onStartBuild={() => onOpenConsult('Start Your Build')}
        onExploreFacilities={() => navigate('/facilities')}
      />
      <ArchitectSplit onSeeBlueprint={() => navigate('/about')} />
      <EquipmentStrip onViewAllEquipment={() => navigate('/facilities')} />
      <MembershipPreview
        onSelectPlan={(planId) => onOpenConsult(`Plan: ${planId}`)}
        onViewAllPlans={() => navigate('/membership')}
      />
      <ReviewsSection />
      <GoogleReviewsSection />
      <GymLocationSection />
      <section className="relative py-24 md:py-32 px-4 sm:px-6 bg-[#070709] border-t border-[#1b1b22] text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#787884] block">
            Train With Purpose
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white uppercase tracking-wide">
            Your Sanctuary Is Open
          </h2>
          <p className="text-sm sm:text-base text-[#8c8c98] max-w-xl mx-auto leading-relaxed">
            Open daily. No ego lifting, no interruptions.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => onOpenConsult('Claim 1-Day Trial')}
                className="px-8 py-3.5 text-xs tracking-[0.18em] uppercase"
              >
                Book A Free Session
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/contact')}
                className="px-8 py-3.5 text-xs tracking-[0.18em] uppercase"
              >
                Contact & Location
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default function App() {
  const whatsappNumber = '918055534824';
  const navigate = useNavigate();

  const handleOpenConsult = (type: string = 'consult') => {
    let msg = 'Hi TheFit24, I would like to inquire about membership and facility access.';
    if (type === 'facility-tour') msg = 'Hi TheFit24, I would like to book a free session.';
    else if (type === 'membership-signup') msg = 'Hi TheFit24, I am interested in joining and would like to sign up for a membership.';
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const handleBookTrainer = (trainer: Trainer) => {
    const msg = `Hi TheFit24, I would like to book a coaching session with ${trainer.name}.`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const handleSelectPlan = (planId: string) => {
    const msg = `Hi TheFit24, I am interested in the ${planId} membership plan.`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#e5e5e8] selection:bg-neutral-200 selection:text-black flex flex-col font-sans">
      <SmoothScroller />
      
      {/* Minimalist Global Navbar */}
      <Navbar onOpenConsult={() => handleOpenConsult('consult')} />

      {/* Main Routed Page Content */}
      <main className="flex-1 relative overflow-hidden">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomeView onOpenConsult={handleOpenConsult} />} />
              <Route path="/about" element={
                <>
                  <SEO title="About Us" description="Learn about the philosophy and master coaches behind TheFit24." />
                  <AboutView onOpenConsult={() => handleOpenConsult('consult')} onNavigate={(path) => navigate(path === 'home' ? '/' : `/${path}`)} />
                </>
              } />
              <Route path="/facilities" element={
                <>
                  <SEO title="Facilities & Equipment" description="Explore our 14 power racks, Olympic platforms, and cold plunge contrast recovery." />
                  <FacilitiesView onOpenConsult={() => handleOpenConsult('facility-tour')} />
                </>
              } />
              <Route path="/gallery" element={
                <>
                  <SEO title="Gallery" description="View the sanctuary. Industrial aesthetics meet elite strength architecture." />
                  <GalleryView />
                </>
              } />
              <Route path="/membership" element={
                <>
                  <SEO title="Membership Plans" description="Select your membership tier and gain access to TheFit24." />
                  <MembershipView onSelectPlan={handleSelectPlan} onOpenConsult={() => handleOpenConsult('membership-signup')} />
                </>
              } />
              <Route path="/trainers" element={
                <>
                  <SEO title="Master Coaches" description="Train with elite strength and conditioning coaches at TheFit24." />
                  <TrainersView onBookTrainer={handleBookTrainer} />
                </>
              } />
              <Route path="/contact" element={
                <>
                  <SEO title="Contact & Location" description="Find our gym in Yelahanka, Bangalore, or reach out to our concierge." />
                  <ContactView />
                </>
              } />
              <Route path="/cafe" element={
                <>
                  <SEO title="The Fit24 Cafe" description="Savor quality food and a warm atmosphere at The Fit24 Cafe in Sathnur." />
                  <CafeView />
                </>
              } />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      {/* Global Footer */}
      <Footer onOpenConsult={() => handleOpenConsult('consult')} />

      {/* Global WhatsApp Concierge */}
      <WhatsAppButton />

      {/* Global Instagram Reminder */}
      <InstagramReminder />
    </div>
  );
}
