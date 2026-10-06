"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openContactModal", handleOpen);
    return () => window.removeEventListener("openContactModal", handleOpen);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-brand-primary rounded-[32px] p-8 sm:p-12 shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Send Us a message</h2>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block text-white font-medium text-sm">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email Address */}
                <div className="space-y-2">
                  <label className="block text-white font-medium text-sm">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="block text-white font-medium text-sm">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 xxxxxxxxxx"
                    className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                  />
                </div>
              </div>

              {/* Select Service */}
              <div className="space-y-2">
                <label className="block text-white font-medium text-sm">Select Service</label>
                <div className="relative">
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-gray-400">Transfer pricing/Investment Banking/Other</option>
                    <option value="transfer_pricing">Transfer Pricing</option>
                    <option value="investment_banking">Investment Banking</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="block text-white font-medium text-sm">Message</label>
                <textarea
                  required
                  placeholder="Tell us about your requirement"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#DFB329] hover:bg-[#c9a124] text-[#1a361e] font-bold text-lg rounded-xl transition-colors mt-4"
              >
                Request a Callback
              </button>

              <p className="text-center text-white/60 text-sm mt-4">
                Your information is secure and confidential
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
