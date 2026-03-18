import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function CallButton() {
  return (
    <motion.a
      href="tel:+9101724505902"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-primary-600 text-white rounded-full shadow-2xl hover:bg-primary-700 transition-colors duration-300"
      aria-label="Call Us"
    >
      <Phone className="w-6 h-6 animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
    </motion.a>
  );
}
