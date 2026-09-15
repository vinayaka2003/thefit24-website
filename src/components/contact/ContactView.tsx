import React, { useState } from 'react';
import { motion } from 'motion/react';
import { gymData } from '../../data/gym';
import { Button } from '../common/Button';
import { CheckCircle2 } from 'lucide-react';
import {
  SvglWhatsApp,
  SvglInstagram,
  SvglPhone,
  SvglGmail,
  SvglGoogleMaps,
} from '../common/SvglIcons';

export const ContactView: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Membership Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = '919740262746';
    const message = `FIT24 Website Enquiry

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}

Please contact me regarding my enquiry.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } }
  };

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 bg-[#050507] min-h-screen text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive Typographic Hero */}
        <motion.div 
          className="mb-24 md:mb-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 mb-8">
            GET IN TOUCH
          </motion.div>
          <motion.h1 
            variants={itemVariants}
            className="whitespace-nowrap text-[9vw] sm:text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tighter leading-[0.85] uppercase text-white"
          >
            LET'S TALK <span style={{ color: '#FF5500' }}>.</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="mt-12 text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl font-light leading-relaxed tracking-wide"
          >
            No automated bots. No outsourced call centers. Reach out directly to the architects of the facility to arrange a walkthrough, request a day pass, or discuss membership.
          </motion.p>
        </motion.div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Contact Info */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-16"
          >
            {/* Headquarters */}
            <motion.div variants={itemVariants}>
              <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mb-6 pb-4 border-b border-white/[0.06]">
                Headquarters
              </h4>
              <p className="text-lg sm:text-xl font-medium tracking-tight leading-relaxed mb-4">
                TheFit24<br />
                BSF Circle, Bagalur Main Road
              </p>
              <p className="text-sm text-neutral-400 font-light mb-6">
                Yelahanka, Bengaluru,<br />
                Karnataka 560063
              </p>
              <a
                href={gymData.coordinates.mapsSearchUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-white hover:text-neutral-400 transition-colors"
              >
                <SvglGoogleMaps size={14} />
                <span>Launch Coordinates</span>
              </a>
            </motion.div>

            {/* Direct Lines */}
            <motion.div variants={itemVariants}>
              <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mb-6 pb-4 border-b border-white/[0.06]">
                Direct Lines
              </h4>
              <div className="space-y-6">
                <a
                  href="tel:+919740262746"
                  className="flex items-center gap-4 text-lg font-medium hover:text-neutral-400 transition-colors group"
                >
                  <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                    <SvglPhone size={12} />
                  </span>
                  <span>+91 97402 62746</span>
                </a>
                <a
                  href="mailto:iron@thefit24.in"
                  className="flex items-center gap-4 text-lg font-medium hover:text-neutral-400 transition-colors group"
                >
                  <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                    <SvglGmail size={12} />
                  </span>
                  <span>iron@thefit24.in</span>
                </a>
              </div>
            </motion.div>

            {/* Network */}
            <motion.div variants={itemVariants}>
              <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 mb-6 pb-4 border-b border-white/[0.06]">
                Network
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/919740262746"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                  aria-label="WhatsApp"
                >
                  <SvglWhatsApp size={16} />
                </a>
                <a
                  href="https://www.instagram.com/thefit24.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                  aria-label="Instagram"
                >
                  <SvglInstagram size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Minimalist Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] as any }}
            className="lg:col-span-7 lg:pl-12 lg:border-l border-white/[0.06]"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="h-full flex flex-col justify-center items-center text-center py-20 lg:py-0"
              >
                <CheckCircle2 className="w-16 h-16 text-white mb-8" strokeWidth={1} />
                <h3 className="text-2xl sm:text-4xl font-medium tracking-tight mb-4 uppercase">
                  Transmission Received
                </h3>
                <p className="text-sm text-neutral-400 font-light max-w-md mx-auto mb-12">
                  Your enquiry is ready on WhatsApp. Please tap Send to complete your enquiry.
                </p>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono uppercase tracking-widest"
                >
                  Send Another
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                
                {/* Minimal Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  <div className="relative group">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-white/20 pb-4 text-lg text-white placeholder-transparent focus:ring-0 focus:border-white focus:outline-none transition-colors peer"
                      placeholder="Name"
                    />
                    <label className="absolute left-0 -top-6 text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 transition-all peer-focus:-top-6 peer-focus:text-white peer-placeholder-shown:top-0 peer-placeholder-shown:text-lg peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-sans pointer-events-none">
                      Full Name
                    </label>
                  </div>

                  <div className="relative group">
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-white/20 pb-4 text-lg text-white placeholder-transparent focus:ring-0 focus:border-white focus:outline-none transition-colors peer"
                      placeholder="Phone"
                    />
                    <label className="absolute left-0 -top-6 text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 transition-all peer-focus:-top-6 peer-focus:text-white peer-placeholder-shown:top-0 peer-placeholder-shown:text-lg peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-sans pointer-events-none">
                      Phone Number
                    </label>
                  </div>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-white/20 pb-4 text-lg text-white placeholder-transparent focus:ring-0 focus:border-white focus:outline-none transition-colors peer"
                    placeholder="Email"
                  />
                  <label className="absolute left-0 -top-6 text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 transition-all peer-focus:-top-6 peer-focus:text-white peer-placeholder-shown:top-0 peer-placeholder-shown:text-lg peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-sans pointer-events-none">
                    Email Address
                  </label>
                </div>

                <div className="relative group pt-6">
                  <label className="absolute left-0 -top-2 text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-white/20 pb-4 text-lg text-white focus:ring-0 focus:border-white focus:outline-none transition-colors appearance-none cursor-pointer rounded-none"
                  >
                    <option className="bg-[#050507] text-white">Membership Inquiry</option>
                    <option className="bg-[#050507] text-white">Personal Training</option>
                    <option className="bg-[#050507] text-white">Group Classes</option>
                    <option className="bg-[#050507] text-white">General Question</option>
                  </select>
                </div>

                <div className="relative group pt-6">
                  <textarea
                    rows={1}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-white/20 pb-4 text-lg text-white placeholder-transparent focus:ring-0 focus:border-white focus:outline-none resize-none transition-colors peer"
                    placeholder="Message"
                  />
                  <label className="absolute left-0 top-0 text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 transition-all peer-focus:top-0 peer-focus:text-white peer-placeholder-shown:top-6 peer-placeholder-shown:text-lg peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-sans pointer-events-none">
                    Your Message
                  </label>
                </div>

                <div className="pt-8">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center text-xs font-mono uppercase tracking-widest bg-white text-black hover:bg-neutral-200"
                  >
                    Transmit
                  </Button>
                </div>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
};
