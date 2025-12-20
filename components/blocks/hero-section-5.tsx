"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronRight } from "lucide-react";
import { useScroll, motion } from "motion/react";
import Image from "next/image";
import { Scene } from "@/components/ui/scene"; // Import the Scene component
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { Cloud, Layout, Brain } from "lucide-react";

// import { UniqueAccordion } from "@/components/ui/interactive-accordion";

export function HeroSection() {
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

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
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Scene for the first section only */}
        <div className="absolute inset-0 -z-10">
          <Scene />
        </div>

        {/* Hero Content */}
        <HeroHeader />
        <main className="overflow-x-hidden">
          <section>
            <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
              <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                  <h1 className="mt-8 max-w-2xl text-balance text-5xl lg:mt-16 xl:text-5xl">
                    Certified Expertise. Unmatched Velocity.{" "}
                  </h1>
                  <h1 className=" max-w-2xl text-balance text-5xl md:text-6xl lg:mt-4 xl:text-3xl">
                    Your Digital Transformation Starts Now.{" "}
                  </h1>
                  <p className="mt-8 max-w-2xl text-balance text-lg">
                    We build and deliver high-quality, innovative AI and Cloud
                    systems quicker than traditional agencies.{" "}
                  </p>

                  <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                    <Button
                      asChild
                      size="lg"
                      className="h-12 rounded-full pl-5 pr-3 text-base"
                    >
                      <Link href="#link">
                        <span className="text-nowrap">
                          Start Your 1-Week MVP Discovery
                        </span>
                        <ChevronRight className="ml-1" />
                      </Link>
                    </Button>
                    <Button
                      key={2}
                      asChild
                      size="lg"
                      variant="ghost"
                      className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5"
                    >
                      <Link href="#link">
                        <span className="text-nowrap">Request a demo</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="aspect-2/3 absolute inset-1 overflow-hidden rounded-3xl border border-black/10 sm:aspect-video lg:rounded-[3rem] dark:border-white/5">
                <video
                  autoPlay
                  loop
                  className="size-full object-cover opacity-50 invert dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
                  src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
                ></video>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* InfiniteSlider Section */}
      <section className="relative bg-background pb-2">
        <div className="group relative m-auto max-w-7xl px-6">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:border-r md:pr-6">
              <p className="text-end text-sm">
                Certified Expertise & Integrations
              </p>
            </div>
            <div className="relative w-full max-w-full overflow-hidden">
              <InfiniteSlider
                speedOnHover={20}
                speed={40}
                gap={112}
              >
                <div className="flex items-center justify-center">
                  <svg
                    className="h-12 w-auto fill-black dark:fill-white"
                    viewBox="0 0 128 128"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M108.59 26.148c-1.852 0-3.622.211-5.305.715-1.684.504-3.117 1.223-4.379 2.188a10.829 10.829 0 0 0-3.031 3.453c-.757 1.348-1.137 2.906-1.137 4.676 0 2.187.716 4.25 2.106 6.105 1.386 1.895 3.66 3.324 6.734 4.293l6.106 1.895c2.062.675 3.496 1.391 4.254 2.191.757.801 1.136 1.765 1.136 2.945 0 1.726-.758 3.074-2.191 4-1.43.925-3.492 1.391-6.145 1.391-1.687 0-3.328-.168-5.011-.504a23.102 23.102 0 0 1-4.633-1.476c-.421-.168-.801-.336-1.051-.418a2.357 2.357 0 0 0-.758-.13c-.634 0-.969.423-.969 1.305v2.149a2.919 2.919 0 0 0 .254 1.18c.168.38.629.8 1.305 1.18 1.094.628 2.734 1.179 4.84 1.683 2.105.504 4.297.758 6.484.758 2.15 0 4.129-.297 6.024-.883 1.808-.551 3.367-1.309 4.672-2.36 1.304-1.01 2.316-2.273 3.074-3.707.714-1.429 1.094-3.07 1.094-4.882 0-2.188-.633-4.168-1.938-5.895-1.304-1.727-3.491-3.074-6.523-4.043l-5.98-1.895c-2.23-.713-3.79-1.516-4.634-2.316-.84-.797-1.261-1.808-1.261-2.988 0-1.726.671-2.95 1.98-3.746 1.305-.801 3.199-1.18 5.598-1.18 2.988 0 5.683.547 8.086 1.64.714.337 1.261.508 1.597.508.633 0 .969-.463.969-1.347v-1.98c0-.59-.125-1.051-.379-1.391-.25-.378-.672-.715-1.262-1.051-.422-.254-1.011-.504-1.77-.758a32.528 32.528 0 0 0-2.398-.676c-.886-.168-1.769-.336-2.738-.46a21.347 21.347 0 0 0-2.82-.169zm-86.822.082c-2.316 0-4.508.254-6.57.801-2.063.505-3.831 1.137-5.303 1.895-.59.297-.97.59-1.18.883-.211.296-.293.8-.293 1.476v2.063c0 .882.293 1.304.883 1.304.168 0 .378-.043.674-.125.293-.086.796-.254 1.472-.547a33.416 33.416 0 0 1 4.547-1.433A19.176 19.176 0 0 1 20.547 32c3.242 0 5.513.633 6.863 1.938 1.304 1.303 1.98 3.534 1.98 6.734v3.074c-1.683-.379-3.283-.715-4.843-.926-1.558-.21-3.031-.336-4.461-.336-4.34 0-7.75 1.094-10.316 3.286-2.571 2.187-3.832 5.093-3.832 8.671 0 3.368 1.05 6.063 3.113 8.086 2.066 2.02 4.887 3.032 8.422 3.032 4.97 0 9.097-1.938 12.379-5.813a34.153 34.153 0 0 0 1.304 2.484 13.28 13.28 0 0 0 1.516 1.98c.422.38.844.59 1.266.59.334 0 .714-.128 1.093-.378l2.653-1.77c.546-.42.8-.843.8-1.261a1.86 1.86 0 0 0-.293-.97 22.469 22.469 0 0 1-1.347-3.03c-.297-.925-.465-2.19-.465-3.75h-.086V40c0-4.633-1.176-8.086-3.492-10.36-2.36-2.273-6.025-3.41-11.033-3.41zm19.58 1.012c-.676 0-1.012.379-1.012 1.051 0 .297.129.844.379 1.687l9.894 32.547c.254.8.547 1.387.887 1.641.336.297.84.422 1.598.422h3.62c.759 0 1.347-.125 1.684-.422.34-.293.591-.84.801-1.684l6.485-27.117 6.527 27.16c.168.84.46 1.387.8 1.684.337.292.883.422 1.684.422h3.621c.715 0 1.262-.167 1.598-.422.34-.253.633-.8.887-1.64L90.949 30.02c.168-.46.25-.797.293-1.051.043-.254.086-.466.086-.676 0-.715-.379-1.05-1.055-1.05H86.36c-.757 0-1.308.166-1.644.421-.293.25-.59.8-.84 1.64L76.59 57.517l-6.653-28.211c-.166-.8-.464-1.39-.8-1.64-.336-.298-.884-.423-1.684-.423h-3.367c-.758 0-1.348.167-1.688.422-.335.25-.588.8-.796 1.64l-6.57 27.876-7.075-27.875c-.25-.8-.504-1.39-.84-1.64-.297-.298-.844-.423-1.644-.423h-4.125zM21.64 47.496a31.816 31.816 0 0 1 3.96.25 34.401 34.401 0 0 1 3.872.719v1.765c0 1.435-.168 2.653-.422 3.665-.25 1.01-.758 1.895-1.43 2.695-1.137 1.262-2.484 2.187-4 2.695-1.516.504-2.949.758-4.336.758-1.937 0-3.41-.508-4.422-1.559-1.054-1.01-1.558-2.484-1.558-4.464 0-2.106.675-3.704 2.062-4.84 1.391-1.137 3.454-1.684 6.274-1.684zM118 73.348c-4.432.063-9.664 1.052-13.621 3.832-1.223.883-1.012 2.062.336 1.894 4.508-.547 14.44-1.726 16.21.547 1.77 2.23-1.976 11.62-3.663 15.79-.504 1.26.59 1.769 1.726.8 7.41-6.231 9.348-19.242 7.832-21.137-.757-.925-4.388-1.79-8.82-1.726zM1.63 75.859c-.926.116-1.347 1.236-.368 2.121 16.508 14.902 38.359 23.872 62.613 23.872 17.305 0 37.43-5.43 51.281-15.66 2.273-1.689.298-4.254-2.02-3.204-15.533 6.57-32.421 9.77-47.788 9.77-22.778 0-44.8-6.273-62.653-16.633-.39-.231-.755-.304-1.064-.266z"
                    ></path>
                  </svg>
                </div>
                <div className="flex items-center">
                  <img
                    className="mx-auto h-5 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/vercel.svg"
                    alt="Nvidia Logo"
                    height="20"
                    width="auto"
                  />
                </div>

                <div className="flex items-center">
                  <img
                    className="mx-auto h-4 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/tailwindcss.svg"
                    alt="Column Logo"
                    height="16"
                    width="auto"
                  />
                </div>
                <div className="flex items-center">
                  <img
                    className="mx-auto h-4 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/github.svg"
                    alt="GitHub Logo"
                    height="16"
                    width="auto"
                  />
                </div>


                <div className="flex items-center justify-center">
                  <svg
                    className="h-30 w-auto pb-4 fill-black dark:fill-white"
                    viewBox="0 0 124 124"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="currentColor">
                      {/* <path d="M68.7 37.9h1.1l3.1-3.1.2-1.3c-2.4-2.2-5.7-3.5-9.3-3.5-6.4 0-11.9 4.4-13.5 10.3.3-.2 1.1-.1 1.1-.1l6.2-1s.3-.5.5-.5c2.8-3 7.4-3.3 10.6-.8z"></path> */}
                      {/* <path d="M77.4 40.3c-.8-2.6-2.2-5-4.3-6.8l-4.4 4.4c1.9 1.5 2.9 3.7 2.9 6.1v.8c2.1 0 3.9 1.7 3.9 3.9 0 2.1-1.7 3.8-3.9 3.8h-7.8l-.8.8V58l.8.8h7.8c5.6 0 10.1-4.5 10.1-10.1 0-3.4-1.7-6.5-4.4-8.3z"></path> */}
                      {/* <path d="M56.1 58.7h7.8v-6.2h-7.8c-.6 0-1.1-.1-1.6-.3l-1.1.3-3.1 3.1-.3 1c1.7 1.4 3.9 2.1 6.1 2.1z"></path> */}
                      {/* <path d="M56.1 38.5C50.5 38.5 46 43 46 48.6c0 3.2 1.5 6.2 4 8.1l4.5-4.5c-1.4-.7-2.3-2-2.3-3.6 0-2.1 1.7-3.9 3.9-3.9 1.5.1 2.9 1 3.5 2.3l4.5-4.5c-1.8-2.4-4.8-4-8-4z"></path> */}
                      <path d="M15.9 78.3c-2.1 0-3.9-.8-5.5-2.3s-2.3-3.2-2.3-5.4.8-3.9 2.3-5.4 3.4-2.3 5.5-2.3c1.9.1 3.8.8 5.2 2.2l-1.5 1.5c-1-1-2.3-1.5-3.8-1.5s-2.8.5-3.9 1.6c-1 1-1.6 2.5-1.5 3.9 0 1.5.5 2.9 1.6 3.9 1 1.2 2.4 1.7 3.8 1.7 1.6 0 2.8-.5 3.9-1.5.6-.6 1-1.5 1.1-2.6h-4.9V70h7c.1.4.1.8.1 1.3 0 2.1-.6 3.7-1.8 4.9-1.4 1.4-3.1 2.2-5.3 2.2zm16.4-1.4c-1 .9-2.1 1.4-3.5 1.4s-2.6-.5-3.5-1.4-1.4-2.1-1.4-3.5.5-2.6 1.4-3.5 2.1-1.4 3.5-1.4 2.6.5 3.5 1.4 1.4 2.1 1.4 3.5-.5 2.6-1.4 3.5zm-5.5-1.4c.5.6 1.2.9 1.9.9.8 0 1.4-.3 2-.9s.8-1.3.8-2.1c0-.9-.3-1.6-.8-2.2s-1.2-.8-2-.8c-.7 0-1.5.3-2 .8-.5.6-.8 1.3-.8 2.2 0 .9.3 1.6.8 2.1zm16.3 1.4c-1 .9-2.1 1.4-3.5 1.4s-2.6-.5-3.5-1.4-1.4-2.1-1.4-3.5.5-2.6 1.4-3.5 2.1-1.4 3.5-1.4 2.6.5 3.5 1.4 1.4 2.1 1.4 3.5-.5 2.6-1.4 3.5zm-5.5-1.4c.5.6 1.2.9 1.9.9.8 0 1.4-.3 2-.9s.8-1.3.8-2.1c0-.9-.3-1.6-.8-2.2s-1.2-.8-2-.8c-.7 0-1.5.3-2 .8-.5.6-.8 1.3-.8 2.2 0 .9.3 1.6.8 2.1zm12.6 7.2c-1.1 0-2-.3-2.8-.9s-1.3-1.3-1.6-2l1.9-.8c.2.5.5.9.9 1.2s.9.5 1.6.5c.8 0 1.5-.3 1.9-.7s.7-1.2.7-2.2v-.7h-.1c-.6.7-1.5 1.1-2.6 1.1-1.3 0-2.4-.5-3.3-1.4-1-.8-1.5-2.1-1.4-3.4-.1-1.3.4-2.6 1.4-3.5.9-1 2-1.4 3.3-1.4.6 0 1.1.1 1.5.3s.8.5 1.1.8h.1v-.8h2.1v8.9c0 1.7-.4 3-1.3 3.9-.9.8-2 1.3-3.4 1.3zm.1-6.4c.7.1 1.4-.2 1.8-.8.5-.6.8-1.3.8-2.1 0-.9-.3-1.6-.8-2.2-.4-.5-1.1-.8-1.8-.8-.8 0-1.4.3-1.9.9s-.8 1.3-.8 2.2c0 .8.3 1.6.8 2.1s1.2.9 1.9.9zm8.2-12.9v14.5h-2.2V63.4zm5.9 14.8c-1.4 0-2.6-.5-3.5-1.4s-1.4-2.1-1.4-3.5.5-2.6 1.4-3.6c.8-.8 2-1.3 3.3-1.3.6 0 1.2.1 1.7.3.4.3.8.5 1.2.9.3.3.6.6.8 1 .2.3.4.6.5 1l.2.6-6.6 2.7c.5 1 1.3 1.5 2.4 1.5 1 0 1.8-.5 2.4-1.4l1.7 1.1c-.4.6-.9 1.1-1.6 1.5s-1.5.7-2.5.7zm-2.7-5.1l4.4-1.8c-.1-.3-.4-.6-.7-.8-.4-.1-.8-.2-1.2-.2-.6 0-1.2.3-1.8.8s-.8 1.2-.8 2.1zM80 78.2c-2 0-3.6-.7-5-2s-2-3-2-5 .7-3.7 2-5 3-2 5-2 3.7.7 4.9 2.2l-1.2 1.2c-.9-1.1-2.2-1.7-3.7-1.7s-2.7.5-3.7 1.5-1.5 2.3-1.5 3.9.5 2.9 1.5 3.9 2.2 1.5 3.7 1.5c1.6 0 3-.6 4.1-1.9l1.2 1.2c-.6.7-1.4 1.3-2.3 1.7-1 .4-2 .6-3 .6zm8.6-.3h-1.7V64.6h1.7zm2.8-8.1c.9-.9 2-1.4 3.4-1.4s2.5.5 3.4 1.4 1.3 2.1 1.3 3.5-.4 2.6-1.3 3.5-2 1.4-3.4 1.4-2.5-.5-3.4-1.4-1.3-2.1-1.3-3.5.4-2.6 1.3-3.5zm1.3 5.9c.6.6 1.3.9 2.1.9s1.5-.3 2.1-.9.9-1.4.9-2.4-.3-1.8-.9-2.4-1.3-.9-2.1-.9-1.5.3-2.1.9-.9 1.4-.9 2.4.3 1.8.9 2.4zm16.3 2.2h-1.6v-1.3h-.1c-.3.4-.7.8-1.2 1.1s-1.1.5-1.7.5c-1.1 0-2-.3-2.6-1s-.9-1.6-.9-2.8v-5.6h1.7v5.3c0 1.7.8 2.6 2.3 2.6.6 0 1.3-.3 1.7-.8.4-.6.6-1.3.6-2v-5h1.7v9.2zm5.8.3c-1.2 0-2.2-.5-3.1-1.4s-1.3-2.1-1.3-3.5.4-2.5 1.3-3.5 1.9-1.4 3.1-1.4c.7 0 1.3.2 1.9.4s1 .7 1.2 1.1h.1l-.1-1.3v-4.2h1.7v13.4H118v-1.3h-.1c-.3.4-.7.8-1.2 1.1-.6.3-1.2.4-1.9.4zm.3-1.6c.7.1 1.5-.2 2-.8.6-.6.8-1.4.8-2.4s-.3-1.8-.8-2.4c-.5-.5-1.3-.9-2-.9-.8 0-1.5.3-2.1.9s-.9 1.4-.9 2.4.3 1.8.9 2.4c.5.6 1.3 1 2.1 1z"></path>
                    </g>
                  </svg>
                </div>


                <div className="flex items-center">
                  <img
                    className="mx-auto h-6 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/openai.svg"
                    alt="OpenAI Logo"
                    height="24"
                    width="auto"
                  />
                </div>
              </InfiniteSlider>

              <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
              <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
              <ProgressiveBlur
                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                direction="left"
                blurIntensity={1}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                direction="right"
                blurIntensity={1}
              />
            </div>
          </div>
        </div>
      </section>

      {/* UniqueAccordion Section */}
      {/* <section className="min-h-screen flex items-center justify-center p-8">
                <div className="w-full max-w-2xl">
                    <div className="mb-12">
                        <h1 className="text-4xl font-medium tracking-tight mb-3 text-balance">What we do</h1>
                        <p className="text-muted-foreground text-lg">Transforming ideas into exceptional digital experiences.</p>
                    </div>
                    <UniqueAccordion />
                </div>
            </section> */}
    </>
  );
}

const menuItems = [
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  {
    name: "Solution",
    dropdown: [
      {
        label: "Artificial Intelligence",
        href: "/ai",
        Icon: <Brain className="h-4 w-4 text-black dark:text-white" />, // Adjusted color for light/dark mode
      },
      {
        label: "Cloud",
        href: "/cloud",
        Icon: <Cloud className="h-4 w-4 text-black dark:text-white" />, // Adjusted color for light/dark mode
      },
      {
        label: "UI / UX",
        href: "/ui-ux",
        Icon: <Layout className="h-4 w-4 text-black dark:text-white" />, // Adjusted color for light/dark mode
      },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.05);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="group fixed z-20 w-full pt-2"
      >
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12",
            scrolled && "bg-background/50 backdrop-blur-2xl"
          )}
        >
          <motion.div
            key={1}
            className={cn(
              "relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6",
              scrolled && "lg:py-4"
            )}
          >
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>

              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index} className="relative group">
                      {item.dropdown ? (
                        <DropdownMenu
                          options={item.dropdown.map((dropdownItem) => ({
                            label: dropdownItem.label,
                            href: dropdownItem.href,
                            Icon: dropdownItem.Icon,
                          }))}
                        >
                          {item.name}
                        </DropdownMenu>
                      ) : (
                        <Link href={item.href}>{item.name}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      {item.dropdown ? (
                        <DropdownMenu
                          options={item.dropdown.map((dropdownItem) => ({
                            label: dropdownItem.label,
                            href: dropdownItem.href,
                            Icon: dropdownItem.Icon,
                          }))}
                        >
                          {item.name}
                        </DropdownMenu>
                      ) : (
                        <Link href={item.href}>{item.name}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm">
                                    <Link href="#">
                                        <span>Login</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm">
                                    <Link href="#">
                                        <span>Sign Up</span>
                                    </Link>
                                </Button>
                            </div> */}
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  );
};

const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/images/logo.jpeg" // Path to the image in the public folder
      alt="Logo"
      width={58} // Set the width of the image
      height={58} // Set the height of the image
      className={className} // Add your styles here
    />
  );
};
