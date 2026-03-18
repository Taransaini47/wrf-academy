import { motion } from 'motion/react';
import { Award, Users, Monitor, Zap } from 'lucide-react';
import { PointerHighlight } from './ui/pointer-highlight';
import CompareDemo from './compare-autoplay-demo';

const features = [
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Learn from industry veterans with years of practical experience in animation and IT."
  },
  {
    icon: Monitor,
    title: "Modern Labs",
    description: "State-of-the-art computer labs equipped with the latest hardware and software."
  },
  {
    icon: Zap,
    title: "Practical Training",
    description: "100% project-based learning. Build a strong portfolio while you learn."
  },
  {
    icon: Award,
    title: "Affordable Fees",
    description: "Premium education that doesn't break the bank. Flexible payment options available."
  }
];

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 bg-slate-100/50 dark:bg-slate-900/50 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <CompareDemo />
            {/* Decorative blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 rounded-full blur-3xl opacity-50"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
              Why Choose <PointerHighlight rectangleClassName="border-primary-500" pointerClassName="text-primary-500"><span className="text-gradient">WRF Academy?</span></PointerHighlight>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              We don't just teach software; we nurture creativity and build careers. Our environment is designed to bring out the best in every student, preparing them for the competitive tech and media industry.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
