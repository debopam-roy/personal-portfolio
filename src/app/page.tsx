"use client";

import { useState, useEffect } from "react";
import HomeSection from "@/sections/HomeSection";
import AboutSection from "@/sections/AboutSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ServicesSection from "@/sections/ServicesSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ["home", "about", "projects", "services"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <div className="font-sans">
      <main className="mx-auto">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
      </main>

      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
    </div>
  );
}
