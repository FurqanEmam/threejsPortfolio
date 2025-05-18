import React from "react";
import Cube from "./components/Cube";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import { LogoSection } from "./components/LogoSection";
import { FeatureCards } from "./sections/FeatureCards";
import { ExperienceSection } from "./sections/ExperienceSection";

export default function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
    </main>
  );
}
