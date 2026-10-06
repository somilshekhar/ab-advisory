"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFAQ from "../../components/ContactFAQ";
import MapSection from "../../components/MapSection";
import CTASection from "../../components/CTASection";
import FadeIn from "../../components/FadeIn";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("idle");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("service", formData.service || "General Inquiry");
    formDataToSend.append("subject", "New Contact Form Submission - AB Advisory Group");
    formDataToSend.append("message", formData.message);

    // FormSubmit Configuration Flags
    formDataToSend.append("_captcha", "false");
    formDataToSend.append("_subject", "New Contact Form Submission - AB Advisory Group");

    fetch("https://formsubmit.co/ajax/abhiishhek@abadvisorygroup.in", {
      method: "POST",
      body: formDataToSend,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success || data.ok || res.status === 200) {
          setFormStatus("sent");
          setFormData({ fullName: "", email: "", phone: "", service: "", message: "" });
          setTimeout(() => setFormStatus("idle"), 4000);
        } else {
          setFormStatus("idle");
        }
      })
      .catch(() => {
        setFormStatus("idle");
      });
  };

  return (
    <main className="flex flex-col w-full min-h-screen bg-white">
      <Header />

      {/* Contact Content */}
      <section className="flex-1 w-full px-6 md:px-16 lg:px-28 py-12 lg:py-24 flex items-center justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, filter: "blur(15px)", x: -50 }}
            animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full bg-white border border-gray-200 rounded-[24px] p-8 md:p-12 lg:p-16 flex flex-col">
            <h1 className="text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] font-bold text-brand-primary leading-[1.15] mb-8 tracking-tight">
              Let&apos;s Start With a<br />Conversation.
            </h1>
            <p className="text-gray-700 text-[15px] md:text-[16px] leading-[1.6] mb-12 max-w-[90%] font-medium">
              The first call is straightforward, no-obligation, and useful whether you have a mandate or want to learn how we help.
            </p>

            <div className="space-y-10 mt-2">
              {/* Office */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-5 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-brand-primary">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[1.5rem] font-bold text-brand-primary mb-3">Our Office</h3>
                  <p className="text-brand-primary/90 text-[15px] leading-[1.6] max-w-[280px] font-semibold">
                    407, Fourth Floor, Nobles Trade Center, Opp. B D Rao Hall, Bhuyangdev, Memnagar, Ahmedabad, Gujarat, India-380052
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-5 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-brand-primary mt-0.5">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[1.5rem] font-bold text-brand-primary mb-2">Phone</h3>
                  <div className="flex flex-col gap-2">
                    <p className="text-brand-primary/90 text-[15px] font-semibold">
                      +91 9773037381
                    </p>
                    <a href="https://wa.me/919773037381" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#25D366] hover:text-[#128C7E] font-medium text-[14px]">
                      <svg className="w-5 h-5 mr-1.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-5 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-9 h-9 text-brand-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[1.5rem] font-bold text-brand-primary mb-2">Email</h3>
                  <p className="text-brand-primary/90 text-[15px] font-semibold break-all">
                    abhiishhek@abadvisorygroup.in
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, filter: "blur(15px)", x: 50 }}
            animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full bg-brand-primary rounded-[24px] p-8 md:p-12 lg:p-14 flex flex-col justify-center shadow-lg">
            <h2 className="text-[1.7rem] md:text-[2.2rem] font-bold text-white mb-8 tracking-tight">
              Send Us a message
            </h2>

            <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-6">
              {/* Full Name */}
              <div className="flex flex-col">
                <label htmlFor="fullName" className="text-white font-semibold text-[15px] mb-2">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-white rounded-[10px] px-4 py-[14px] text-[14px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-white font-semibold text-[15px] mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full bg-white rounded-[10px] px-4 py-[14px] text-[14px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all text-center"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-white font-semibold text-[15px] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 xxxxxxxxxx"
                    className="w-full bg-white rounded-[10px] px-4 py-[14px] text-[14px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all text-center"
                  />
                </div>
              </div>

              {/* Service */}
              <div className="flex flex-col">
                <label htmlFor="service" className="text-white font-semibold text-[15px] mb-2">Select Service</label>
                <div className="relative">
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-white rounded-[10px] px-4 py-[14px] text-[14px] text-gray-800 focus:text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                  >
                    <option value="" disabled>Transfer pricing/Investment Banking/Other</option>
                    <option value="transfer-pricing" className="text-gray-800">Transfer Pricing</option>
                    <option value="investment-banking" className="text-gray-800">Investment Banking</option>
                    <option value="other" className="text-gray-800">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-white font-semibold text-[15px] mb-2">Message</label>
                <textarea
                  id="message"
                  rows="3"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirement"
                  className="w-full bg-white rounded-[10px] px-4 py-[14px] text-[14px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full bg-brand-accent hover:bg-[#c9a130] disabled:opacity-70 text-brand-primary font-bold text-[16px] py-[14px] rounded-[10px] transition-colors"
                >
                  {formStatus === "sending" ? "Sending..." : formStatus === "sent" ? "Message Sent!" : "Request a Callback"}
                </button>
                {formStatus === "sent" && (
                  <p className="text-emerald-400 font-semibold text-center text-[14px] mt-3">
                    ✓ Thank you! Your message has been sent successfully.
                  </p>
                )}
                <p className="text-center text-white/50 text-[13px] mt-4 font-medium">
                  Your information is secure and confidential
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <FadeIn delay={0.2}>
        <ContactFAQ />
      </FadeIn>
      <FadeIn delay={0.4}>
        <MapSection />
      </FadeIn>
      <FadeIn delay={0.6}>
        <CTASection />
      </FadeIn>

      <Footer />
    </main>
  );
}

