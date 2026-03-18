import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';
import { PointerHighlight } from './ui/pointer-highlight';

const skills = [
  { text: "Animation", color: "from-pink-500 to-rose-500" },
  { text: "Video Editing", color: "from-blue-500 to-cyan-500" },
  { text: "Graphic Design", color: "from-purple-500 to-indigo-500" },
  { text: "IT Skills", color: "from-orange-500 to-amber-500" }
];

export default function Hero() {
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 transition-colors duration-300">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
              Master
              <span 
                className="block relative h-[1.1em] sm:h-[1.3em] w-full my-2 overflow-hidden"
                style={{ perspective: '1000px' }}
              >
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={currentSkill}
                    initial={{ y: 40, opacity: 0, rotateX: -90, scale: 0.8, filter: "blur(8px)" }}
                    animate={{ y: 0, opacity: 1, rotateX: 0, scale: 1, filter: "blur(0px)" }}
                    exit={{ y: -40, opacity: 0, rotateX: 90, scale: 0.8, filter: "blur(8px)" }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                    className={`absolute left-0 right-0 lg:right-auto text-center lg:text-left origin-center bg-clip-text text-transparent bg-gradient-to-r ${skills[currentSkill].color} pb-2 drop-shadow-sm`}
                  >
                    {skills[currentSkill].text}
                  </motion.span>
                </AnimatePresence>
              </span>
              with <PointerHighlight rectangleClassName="border-primary-500" pointerClassName="text-primary-500">WRF Academy</PointerHighlight>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
              Join the leading computer training institute and transform your creative passion into a successful career with industry-expert mentors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#courses"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30"
              >
                Join Now <ChevronRight className="w-5 h-5" />
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass text-slate-900 dark:text-white font-medium hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
              >
                <Play className="w-5 h-5 text-primary-600 dark:text-primary-400" /> Watch Demo
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-accent-500/20 rounded-3xl transform rotate-6 scale-105 glass"></div>
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Digital art and animation studio"
                className="relative rounded-3xl object-cover w-full h-full shadow-2xl"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 glass-card p-4 rounded-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <img
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 object-cover"
                        src={`https://images.unsplash.com/photo-${i === 1 ? '1534528741775-53994a69daeb' : i === 2 ? '1506794778202-cad84cf45f1d' : '1507003211169-0a1dd7228f2d'}?q=80&w=100&auto=format&fit=crop`}
                        alt="Student"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">500+ Students</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Currently enrolled</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
