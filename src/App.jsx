import React from "react";
import Cube from "./components/Cube";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <ShowcaseSection />
    </main>
  );
}
