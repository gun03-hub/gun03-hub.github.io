import "../App.css";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import Blog from "./Blog";

export default function Display() {
  return (
    <div className="lg:pl-[25%] pt-16 lg:pt-0 w-screen back text-white">
      <section id="home-section">
        <Home />
      </section>
      <section id="about-section">
        <About />
      </section>
      <section id="resume-section">
        <Resume />
      </section>
      <section id="projects-section">
        <Projects />
      </section>
      <section id="blog-section">
        <Blog />
      </section>
      <section id="contact-section">
        <Contact />
      </section>
    </div>
  );
}
