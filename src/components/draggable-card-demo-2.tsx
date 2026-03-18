import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "./ui/draggable-card";

export default function DraggableCardDemo() {
  const items = [
    {
      title: "3D Character Design",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
      className: "absolute top-10 left-[10%] rotate-[-5deg]",
    },
    {
      title: "Video Editing Suite",
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800&auto=format&fit=crop",
      className: "absolute top-40 left-[15%] rotate-[-7deg]",
    },
    {
      title: "Creative Coding",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop",
      className: "absolute top-5 left-[35%] rotate-[8deg]",
    },
    {
      title: "Digital Illustration",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
      className: "absolute top-32 left-[50%] rotate-[10deg]",
    },
    {
      title: "Modern IT Labs",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
      className: "absolute top-20 right-[25%] rotate-[2deg]",
    },
    {
      title: "UI/UX Prototyping",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800&auto=format&fit=crop",
      className: "absolute top-24 left-[40%] rotate-[-7deg]",
    },
    {
      title: "Blockbuster VFX",
      image: "https://images.unsplash.com/photo-1535016120720-40c646be4480?q=80&w=800&auto=format&fit=crop",
      className: "absolute top-8 left-[25%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-[80vh] md:min-h-screen w-full items-center justify-center overflow-clip py-20">
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl text-center text-xl font-black text-neutral-400/50 md:text-4xl dark:text-neutral-800/50 pointer-events-none px-6 z-0">
        Nurturing Creativity, Building Careers: Your Future Starts at WRF Academy.
      </p>
      {items.map((item, index) => (
        <div key={index} className={`${item.className} scale-75 md:scale-100`}>
          <DraggableCardBody>
            <img
              src={item.image}
              alt={item.title}
              className="pointer-events-none relative z-10 h-48 w-48 md:h-80 md:w-80 object-cover"
              referrerPolicy="no-referrer"
            />
            <h3 className="mt-4 text-center text-xl md:text-2xl font-bold text-neutral-700 dark:text-neutral-300">
              {item.title}
            </h3>
          </DraggableCardBody>
        </div>
      ))}
    </DraggableCardContainer>
  );
}
