import Work from "./work";
import { projects } from "../../constants";

export default function Projects() {
  return (
    <section id="projects" className="py-12 xs:py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 xs:px-6">
        <div className="text-center mb-10 xs:mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="section-heading mb-3 xs:mb-4">Featured Projects</h2>
          <p className="section-subheading mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 md:gap-8">
          {projects.slice(0, 6).map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Work
                title={project.title}
                desc={project.desc}
                img={require(`../../assets/images/${project.img}`)}
                link={project.link}
                code={project.code}
                tags={project.tags}
              />
            </div>
          ))}
        </div>

        {projects.length > 6 && (
          <div className="text-center mt-8 xs:mt-10 md:mt-12" data-aos="fade-up">
            <a
              href="https://github.com/gun03-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline btn-ripple inline-flex items-center gap-2 group"
            >
              View More on GitHub
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
