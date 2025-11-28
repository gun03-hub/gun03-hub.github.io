import "../App.css";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import ScrollToTop from "./ScrollToTop";

export default function Display() {
  return (
    <div className="w-full text-white">
      <Navigation />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <ScrollToTop />
    </div>
  );
}
