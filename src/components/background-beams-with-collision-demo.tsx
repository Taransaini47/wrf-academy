import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

export default function BackgroundBeamsWithCollisionDemo({ children }: { children?: React.ReactNode }) {
  return (
    <BackgroundBeamsWithCollision className="h-auto flex-col items-stretch justify-start bg-slate-950 dark:bg-slate-950 bg-none md:h-auto">
      {children}
    </BackgroundBeamsWithCollision>
  );
}
