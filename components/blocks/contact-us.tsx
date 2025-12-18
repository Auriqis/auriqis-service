'use client';

import { LetsWorkTogether } from "@/components/ui/lets-work-section";
import { HeroHeader } from "@/components/blocks/hero-section-5";
import { useEffect } from "react";

export default function ContactUs() {
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
    <main className="w-full">
      <HeroHeader />
      <LetsWorkTogether />
    </main>
  );
}
