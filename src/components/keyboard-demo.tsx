"use client";
import React from "react";
import { Keyboard } from "@/src/components/ui/keyboard";

export default function KeyboardDemo() {
  return (
    <div className="flex min-h-96 w-full items-center justify-center py-10 md:min-h-180 bg-white dark:bg-[#0B0B0F] relative z-10">
      <Keyboard enableSound />
    </div>
  );
}
