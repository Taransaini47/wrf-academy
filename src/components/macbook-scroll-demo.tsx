import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";

export default function MacbookScrollDemo() {
  return (
    <div className="w-full overflow-hidden bg-white dark:bg-[#0B0B0F] -mt-48 sm:-mt-24 md:mt-0 pt-0">
      <MacbookScroll
        src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=1200&auto=format&fit=crop"
        showGradient={false}
        title={
          <div className="flex flex-col items-center gap-2 px-4">
            <span className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-medium tracking-widest uppercase">Final Note</span>
            <span className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white text-center">
              Thanks for visiting <span className="text-gradient">WRF Academy</span>
            </span>
          </div>
        }
      />
    </div>
  );
}
