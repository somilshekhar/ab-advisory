"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What happens after i submit the form?",
    answer: "A partner reviews your note and contacts you within one business day to scope the conversation with no obligation."
  },
  {
    question: "Do you take smaller or one off engagements",
    answer: "Yes, we handle select one-off advisory and structuring mandates depending on the complexity of the matter and partner availability."
  },
  {
    question: "Can we talk before i share detailed documents",
    answer: "Absolutely. We are happy to have an initial high-level discussion and can sign a Non-Disclosure Agreement (NDA) before any sensitive information is shared."
  },
  {
    question: "What time zones do you cover?",
    answer: "We primarily operate across India, UAE, and European time zones, but our global desk is highly flexible to accommodate calls across most major international time zones."
  }
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-brand-primary py-20 md:py-28 px-6 md:px-16 lg:px-28 flex flex-col items-center">
      <h2 className="text-[2.2rem] md:text-[3rem] font-bold text-white text-center mb-4 tracking-tight">
        Before You Reach Out
      </h2>
      <p className="text-[1.1rem] md:text-[1.2rem] text-white/90 text-center mb-16 font-medium">
        A few things people usually ask before their first call
      </p>

      <div className="w-full max-w-4xl mx-auto flex flex-col">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div 
              key={index} 
              className="border-b border-white/20 last:border-b-0 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between py-6 md:py-8 text-left focus:outline-none group"
              >
                <span className="text-[16px] md:text-[18px] font-medium text-white group-hover:text-white/90 transition-colors pr-8">
                  {faq.question}
                </span>
                <span className="text-white flex-shrink-0 relative w-6 h-6 flex items-center justify-center">
                  <motion.div
                    initial={false}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </motion.div>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="pb-8 pr-12">
                      <p className="text-[14px] md:text-[15px] text-white/70 leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
