import React from "react";
import { Compare } from "./ui/compare";

export default function CompareDemo() {
  return (
    <div className="w-full h-[250px] md:h-[400px] flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
      <div
        style={{
          transform: "rotateX(15deg) translateZ(80px)",
        }}
        className="p-1 md:p-4 border rounded-2xl md:rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 mx-auto w-full h-full"
      >
        <Compare
          firstImage="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Abstract sketch/base
          secondImage="https://images.unsplash.com/photo-1633167606207-d840b5070fc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Final 3D render
          firstImageClassName="object-cover object-left-top w-full"
          secondImageClassname="object-cover object-left-top w-full"
          className="w-full h-full rounded-[14px] md:rounded-lg"
          slideMode="hover"
          autoplay={true}
        />
      </div>
    </div>
  );
}
