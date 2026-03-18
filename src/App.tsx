/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnimatedTooltipPreview from './components/animated-tooltip-demo';
import About from './components/About';
import Courses from './components/Courses';
import FollowingPointerDemo from './components/following-pointer-demo';
import Testimonials from './components/Testimonials';
import ThreeDMarqueeDemo from './components/3d-marquee-demo';
import Contact from './components/Contact';
import LampDemo from './components/lamp-demo';
import MacbookScrollDemo from './components/macbook-scroll-demo';
import KeyboardDemo from './components/keyboard-demo';
import BackgroundBeamsWithCollisionDemo from './components/background-beams-with-collision-demo';
import { TracingBeam } from './components/ui/tracing-beam';
import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from './components/ui/text-reveal-card';
import HeroScrollDemo from './components/container-scroll-animation-demo';
import Footer from './components/Footer';
import SocialButtons from './components/SocialButtons';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-50 transition-colors duration-300 relative overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]"></div>
      
      <div className="relative z-10">
        <Navbar />
        <TracingBeam className="w-full">
          <main>
            <Hero />
            <div className="py-8 md:py-16 flex flex-col items-center justify-center">
              <h2 className="text-center text-3xl md:text-5xl font-display font-bold mb-4 dark:text-white">
                Meet Our <span className="text-gradient">World-Class Educators</span>
              </h2>
              <p className="text-center text-sm md:text-base text-slate-600 dark:text-slate-400 mb-8 md:mb-12 max-w-2xl px-4">
                Learn directly from industry veterans who have worked on blockbuster films, AAA games, and award-winning campaigns.
              </p>
              <AnimatedTooltipPreview />
              
              <div className="mt-8 md:mt-12 flex flex-col items-center justify-center w-full px-4">
                {/* Desktop view: Interactive Hover Card */}
                <div className="hidden md:block">
                  <TextRevealCard
                    text="Experience over"
                    revealText="20+ years"
                  >
                    <TextRevealCardTitle>
                      Decades of Industry Knowledge
                    </TextRevealCardTitle>
                    <TextRevealCardDescription>
                      Hover over the card to reveal the combined experience of our instructors.
                    </TextRevealCardDescription>
                  </TextRevealCard>
                </div>
                
                {/* Mobile view: Static Text Card */}
                <div className="md:hidden bg-[#1d1c20] border border-white/[0.08] w-full max-w-[40rem] rounded-lg p-8 text-center shadow-lg">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    Experience over <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-300">20+ years</span>
                  </h3>
                  <p className="text-[#a9a9a9] text-sm">
                    Decades of Industry Knowledge
                  </p>
                </div>
              </div>
            </div>
            <About />
            <HeroScrollDemo />
            <Courses />
            <FollowingPointerDemo />
            <Testimonials />
            <ThreeDMarqueeDemo />
            <div className="h-20 md:h-40" />
            <Contact />
            <LampDemo />
            <div className="h-40 md:h-60 bg-white dark:bg-[#0B0B0F] relative z-10" />
            <MacbookScrollDemo />
            <KeyboardDemo />
          </main>
        </TracingBeam>
        <div className="relative z-10 bg-white dark:bg-[#0B0B0F] pt-10 md:pt-20">
          <BackgroundBeamsWithCollisionDemo>
            <Footer />
          </BackgroundBeamsWithCollisionDemo>
        </div>
        <SocialButtons />
      </div>
    </div>
  );
}
