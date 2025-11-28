import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ["home", "about", "resume", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-dark-900/90 backdrop-blur-xl border-b border-dark-700/50 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 xs:px-6 flex items-center justify-between">
          <NavLink
            to="/"
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 xs:gap-3 group"
          >
            <div className="w-8 h-8 xs:w-10 xs:h-10 rounded-lg xs:rounded-xl bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center text-white font-bold text-base xs:text-lg">
              G
            </div>
            <span className="text-lg xs:text-xl font-display font-semibold text-white group-hover:text-primary-400 transition-colors">
              Gunjan<span className="text-primary-400">.</span>
            </span>
          </NavLink>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${activeSection === item.id ? "active text-primary-400" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <a
              href="https://github.com/gun03-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-dark-400 hover:text-primary-400 transition-colors touch-manipulation"
              title="GitHub"
              aria-label="GitHub profile"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/gunjan-arora-4248462a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-dark-400 hover:text-primary-400 transition-colors touch-manipulation"
              title="LinkedIn"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon />
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-primary text-sm"
            >
              Let's Talk
            </button>
          </div>

          <button
            className="md:hidden p-2.5 text-white z-50 touch-manipulation active:scale-95 transition-transform"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <CloseIcon className="text-2xl" /> : <MenuIcon className="text-2xl" />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-40 bg-dark-950/98 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <div 
            className="flex flex-col items-center justify-center h-full gap-6 xs:gap-8 px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xl xs:text-2xl font-display font-semibold transition-all duration-300 py-2 px-4 touch-manipulation active:scale-95 ${
                  activeSection === item.id
                    ? "text-primary-400"
                    : "text-white hover:text-primary-400"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
            
            <div className="flex items-center gap-5 xs:gap-6 mt-6 xs:mt-8">
              <a
                href="https://github.com/gun03-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-dark-300 hover:text-primary-400 transition-colors touch-manipulation active:scale-95"
                aria-label="GitHub profile"
              >
                <GitHubIcon className="text-2xl xs:text-3xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/gunjan-arora-4248462a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-dark-300 hover:text-primary-400 transition-colors touch-manipulation active:scale-95"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon className="text-2xl xs:text-3xl" />
              </a>
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="btn-primary mt-4"
            >
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </>
  );
}
