interface NavbarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Navbar({ activeSection, scrollToSection }: NavbarProps) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-white backdrop-blur-md border border-gray-200 rounded-full shadow-lg">
      <ul className="flex gap-6 px-6 py-3">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`transition-colors cursor-pointer text-sm font-medium ${
              activeSection === item.id
                ? "text-black font-semibold"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}