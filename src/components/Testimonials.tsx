import { motion } from 'motion/react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "3D Animator at Pixar",
    image: "https://i.pravatar.cc/150?img=1",
    quote: "WRF Academy gave me the foundation I needed to break into the animation industry. The instructors are top-notch and the labs are incredible."
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Freelance Video Editor",
    image: "https://i.pravatar.cc/150?img=11",
    quote: "The video editing course was intense but totally worth it. I learned not just the software, but the art of storytelling through editing."
  },
  {
    id: 3,
    name: "Emily Davis",
    title: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=5",
    quote: "I went from zero coding knowledge to landing my first tech job in 6 months. The practical, project-based approach makes all the difference."
  },
  {
    id: 4,
    name: "David Smith",
    title: "VFX Artist",
    image: "https://i.pravatar.cc/150?img=12",
    quote: "The VFX pipeline taught here is exactly what studios use. I was able to hit the ground running on my first day at work."
  },
  {
    id: 5,
    name: "Jessica Wong",
    title: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=9",
    quote: "The design principles I learned at WRF Academy completely changed how I approach user interfaces. Highly recommended!"
  },
  {
    id: 6,
    name: "Alex Rodriguez",
    title: "Full Stack Developer",
    image: "https://i.pravatar.cc/150?img=14",
    quote: "The instructors genuinely care about your success. The mentorship I received was invaluable for my career growth."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-24 bg-slate-100/50 dark:bg-slate-900/50 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4"
          >
            What Our <span className="text-gradient">Students Say</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            Don't just take our word for it. Hear from the people who have transformed their careers with us.
          </motion.p>
        </div>

        <div className="flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}
