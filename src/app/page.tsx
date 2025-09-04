"use client";

import { useState, useEffect } from "react";
import HomeSection from "@/components/sections/HomeSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";

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

    const sections = ["home", "experience", "projects", "services"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
  ];

  return (
    <div className="font-sans">
      <main>
        <HomeSection />
        <ExperienceSection />
        <ProjectsSection />
        <ServicesSection />
      </main>

      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full shadow-lg">
        <ul className="flex gap-6 px-6 py-3">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`transition-colors cursor-pointer text-sm font-medium ${
                activeSection === item.id
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
