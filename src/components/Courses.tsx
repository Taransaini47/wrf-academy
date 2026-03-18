import { motion } from 'motion/react';
import { MonitorPlay, Palette, Code, Video, Cpu, Globe } from 'lucide-react';
import { ImagesBadge } from './ui/images-badge';

const courses = [
  {
    id: 1,
    title: "2D & 3D Animation",
    description: "Master industry-standard software like Maya, Blender, and After Effects. Create stunning visual effects and character animations.",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    duration: "6 Months",
    level: "Beginner to Pro"
  },
  {
    id: 2,
    title: "Video Editing Pro",
    description: "Learn Premiere Pro, DaVinci Resolve, and Final Cut. Edit like a professional for YouTube, films, and commercials.",
    icon: Video,
    color: "from-blue-500 to-cyan-500",
    duration: "4 Months",
    level: "Intermediate"
  },
  {
    id: 3,
    title: "Full Stack Web Dev",
    description: "Build modern, responsive websites using React, Node.js, and modern CSS frameworks. Become a complete web developer.",
    icon: Code,
    color: "from-emerald-500 to-teal-500",
    duration: "8 Months",
    level: "Beginner to Pro"
  },
  {
    id: 4,
    title: "Graphic Design",
    description: "Master Photoshop, Illustrator, and InDesign. Create compelling brand identities, UI designs, and digital art.",
    icon: MonitorPlay,
    color: "from-purple-500 to-indigo-500",
    duration: "3 Months",
    level: "Beginner"
  },
  {
    id: 5,
    title: "IT Fundamentals",
    description: "Essential computer skills, networking basics, and hardware troubleshooting for a solid foundation in tech.",
    icon: Cpu,
    color: "from-orange-500 to-amber-500",
    duration: "2 Months",
    level: "Beginner"
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Learn SEO, social media marketing, and content strategy to grow brands and businesses online.",
    icon: Globe,
    color: "from-primary-500 to-blue-600",
    duration: "3 Months",
    level: "Intermediate"
  }
];

export default function Courses() {
  return (
    <section id="courses" className="py-12 md:py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4 flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <ImagesBadge
              text=""
              images={[
                "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=500&auto=format&fit=crop", // Animation
                "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=500&auto=format&fit=crop", // Video Editing
                "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=500&auto=format&fit=crop", // Web Dev
              ]}
              folderSize={{ width: 64, height: 48 }}
              teaserImageSize={{ width: 40, height: 28 }}
              hoverImageSize={{ width: 96, height: 64 }}
              hoverTranslateY={-50}
              hoverSpread={30}
            />
            <span>Explore Our <span className="text-gradient">Premium Courses</span></span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            Industry-aligned curriculum designed to make you job-ready from day one.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl md:rounded-3xl p-4 md:p-6 group relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${course.color} opacity-10 rounded-bl-full transition-transform group-hover:scale-110`}></div>
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-6 text-white shadow-lg`}>
                <course.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {course.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                {course.description}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 dark:text-slate-500 uppercase font-semibold tracking-wider">Duration</span>
                  <span className="text-sm font-medium text-slate-900 dark:text-slate-300">{course.duration}</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs text-slate-500 dark:text-slate-500 uppercase font-semibold tracking-wider">Level</span>
                  <span className="text-sm font-medium text-slate-900 dark:text-slate-300">{course.level}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
