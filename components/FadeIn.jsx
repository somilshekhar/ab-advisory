"use client";
import { motion } from "framer-motion";

export default function FadeIn({ children, delay = 0, className = "w-full" }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(15px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
