import {HeroSection} from "@/components/blocks/hero-section-5"
import { WhyArq } from "@/components/blocks/why-arq";
import { UniqueAccordion } from "@/components/ui/interactive-accordion";
import RuixenBentoCards from "@/components/ui/ruixen-bento-cards";
import { Component } from "@/components/ui/flickering-footer";


export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="lg:mt-16">
      <WhyArq />
      </div>
      <div className="lg:mt-16">
      <RuixenBentoCards />
      </div>
      {/* <UniqueAccordion /> */}
      <Component/>
    </>
  );
}
