import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-transparent text-slate-300 py-16 border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-3 group">
              <Logo className="w-10 h-10 shadow-lg rounded-xl" />
              <span className="text-xl font-display font-bold text-white tracking-tight">
                WRF <span className="text-primary-400">Academy</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering the next generation of digital creators and IT professionals with industry-leading education and practical training.
              <br /><br />
              <span className="text-white font-medium">Contact:</span> +91 01724 505902
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-primary-400 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Home</a></li>
              <li><a href="#about" className="hover:text-primary-400 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> About Us</a></li>
              <li><a href="#courses" className="hover:text-primary-400 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> All Courses</a></li>
              <li><a href="#testimonials" className="hover:text-primary-400 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Success Stories</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Contact Us</a></li>
            </ul>
          </div>

          {/* Top Courses */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Top Courses</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-primary-400 transition-colors">2D & 3D Animation</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Video Editing Pro</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Full Stack Web Dev</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Graphic Design</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">Subscribe to get the latest updates on new courses and offers.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary-500 transition-colors text-white"
              />
              <button 
                type="submit" 
                className="bg-primary-600 hover:bg-primary-700 text-white rounded-xl px-4 py-3 text-sm font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} WRF Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
