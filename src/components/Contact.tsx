import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [result, setResult] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setResult("Sending...");

    const formData = new FormData(event.currentTarget);

    // Add your Web3Forms Access Key here
    formData.append("access_key", "4338f7ad-40c1-4886-a7dc-1057503dcf08");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Form Submitted Successfully");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setStatus("error");
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission error", error);
      setStatus("error");
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-transparent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
              Ready to start your journey? Visit our campus or drop us a message. Our counselors are here to guide you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Our Location</h4>
                  <p className="text-slate-600 dark:text-slate-400">WRF Academy, Creative Hub<br />Guwahati, Assam, India 781001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Phone Number</h4>
                  <p className="text-slate-600 dark:text-slate-400">+91 01724 505902<br />+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Email Address</h4>
                  <p className="text-slate-600 dark:text-slate-400">admissions@wrfacademy.edu<br />info@wrfacademy.edu</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Working Hours</h4>
                  <p className="text-slate-600 dark:text-slate-400">Mon - Fri: 9:00 AM - 8:00 PM<br />Sat - Sun: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card p-8 rounded-3xl shadow-2xl relative z-10 bg-white dark:bg-slate-900">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send us a Message</h3>
              
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">Thank you for reaching out. We'll get back to you shortly.</p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-4" onSubmit={onSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">First Name</label>
                      <input type="text" id="firstName" name="first_name" required className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white" placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Last Name</label>
                      <input type="text" id="lastName" name="last_name" required className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Interested Course</label>
                    <select id="course" name="course" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white">
                      <option>2D & 3D Animation</option>
                      <option>Video Editing Pro</option>
                      <option>Full Stack Web Dev</option>
                      <option>Graphic Design</option>
                      <option>IT Fundamentals</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                    <textarea id="message" name="message" required rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                  
                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <AlertCircle className="w-4 h-4" />
                      {result}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="w-full py-4 rounded-xl bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"} 
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
            
            {/* Decorative Map Background (Abstract) */}
            <div className="absolute -bottom-10 -right-10 w-full h-full bg-slate-100 dark:bg-slate-800 rounded-3xl -z-10 overflow-hidden opacity-50">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
