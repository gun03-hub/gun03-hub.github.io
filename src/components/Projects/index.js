import Work from "./work";
import { projects } from "../../constants";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div
      id="projects"
      className="min-h-screen flex flex-col justify-center text-center gap-8 md:gap-10 px-4 py-12 md:py-16"
    >
      <div
        className="font-extrabold py-5 mt-6 md:mt-10 text-4xl md:text-5xl text-white"
        data-aos="fade-down"
        data-aos-duration="600"
        data-aos-easing="ease-out-cubic"
      >
        Projects
      </div>
      <div className="flex flex-wrap flex-row justify-center w-full p-2 md:p-4 gap-6 md:gap-8 lg:gap-12 max-w-7xl mx-auto">
        {projects.map((project, ind) => {
          return (
            <div
              key={ind}
              data-aos="fade-up"
              data-aos-offset="150"
              data-aos-delay={ind * 100}
              data-aos-duration="800"
              data-aos-easing="ease-out-cubic"
              className="w-full sm:w-[calc(50%-1rem)] lg:w-auto"
            >
              <Work
                title={project.title}
                desc={project.desc}
                img={require(`../../assets/images/${project.img}`)}
                code={project.code}
                tags={project.tags}
              />
            </div>
          );
        })}
      </div>
      <div 
        className="flex justify-center pb-10 mt-8"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-duration="800"
        data-aos-easing="ease-out-cubic"
      >
        <a
          href="https://github.com/gun03-hub"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 text-base md:text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-colors duration-300"
        >
          <FaGithub className="text-xl md:text-2xl" />
          View More Projects
        </a>
      </div>
    </div>
  );
}
