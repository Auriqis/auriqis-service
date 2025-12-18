"use client";

import { ShaderAnimation } from "@/components/ui/shader-animation";
import { useEffect } from "react";
import { HeroHeader } from "@/components/blocks/hero-section-5";

export default function AIHero() {

    useEffect(() => {
      const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  
      const applyTheme = (isDarkMode: boolean) => {
        if (isDarkMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      };
  
      // Apply the initial theme
      applyTheme(darkModeMediaQuery.matches);
  
      // Listen for changes to the theme
      const handleChange = (event: MediaQueryListEvent) => {
        applyTheme(event.matches);
      };
  
      darkModeMediaQuery.addEventListener("change", handleChange);
  
      return () => {
        darkModeMediaQuery.removeEventListener("change", handleChange);
      };
    }, []);
  return (
    <>
    <HeroHeader />
      <div className="relative flex h-[650px] w-full flex-col items-center justify-center overflow-hidden rounded-xl ">
      <ShaderAnimation/>
      <span className="absolute pointer-events-none z-10 text-center text-7xl leading-none font- tracking-tighter whitespace-pre-wrap text-white">
        Auriqis & Artificial Intelligence
      </span>
    </div>
    </>

  )
}