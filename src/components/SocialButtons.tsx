import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function SocialButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Call Button */}
      <motion.a
        href="tel:+9101724505902"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-indigo-600 via-violet-600 to-purple-500 text-white rounded-full shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.7)] transition-all duration-300 group"
        aria-label="Call Us"
      >
        <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping" />
        <Phone className="w-7 h-7 relative z-10 group-hover:animate-bounce" />
      </motion.a>
    </div>
  );
}
