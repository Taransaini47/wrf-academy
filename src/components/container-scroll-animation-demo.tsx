"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">
              Unleash your creative potential <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-gradient">
                Master the Arts
              </span>
            </h1>
          </>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1400&auto=format&fit=crop"
          alt="WRF Academy Creative Studio"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
          referrerPolicy="no-referrer"
        />
      </ContainerScroll>
    </div>
  );
}
