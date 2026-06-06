import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import "../../App.css";
/*import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";*/

export default function Home() {
  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToExperience = () => {
    const section = document.getElementById("experience-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16 xs:pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 py-8 xs:py-12 md:py-20  -mt-5">
        <div className="flex flex-col lg:flex-row items-center gap-8 xs:gap-10 lg:gap-20">
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div
              className="inline-flex items-center gap-2 px-3 xs:px-4 py-1.5 xs:py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-4 xs:mb-6"
              data-aos="fade-up"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs xs:text-sm text-primary-300">Open to Software Engineering Opportunities</span>
            </div>

            <h1
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4 xs:mb-6 leading-tight"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="text-accent-cyan">Gunjan Arora</span>
            </h1>

            <div
              className="text-lg xs:text-xl sm:text-2xl lg:text-3xl text-dark-300 mb-6 xs:mb-8 h-[60px] xs:h-[70px] md:h-[80px]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Typewriter
                options={{
                  strings: [
                      "AI Product Engineer",
                      "Full-Stack Developer",
                      "Next.js & TypeScript Developer",
                      "LLM & Automation Builder",
                    ],
                  delay: 80,
                  deleteSpeed: 50,
                  pauseFor: 2000,
                  autoStart: true,
                  loop: true,
                  stringSplitter: stringSplitter,
                }}
              />
            </div>

            <p
              className="text-base xs:text-lg text-dark-400 max-w-xl mb-6 xs:mb-8 md:mb-10 leading-relaxed mx-auto lg:mx-0 px-2 xs:px-0 -mt-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              I build AI-enabled web applications using Next.js, TypeScript, Node.js, and modern LLM workflows. Passionate about creating scalable products, automation systems, and real-world solutions.
            </p>

            <div
              className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <button onClick={scrollToContact} className="btn-primary w-full xs:w-auto">
                Get In Touch
              </button>
              <button 
  onClick={scrollToExperience} 
  className="btn-outline w-full xs:w-auto"
>
  Work Experience
</button>
            </div>

            <div
              className="flex items-center gap-4 xs:gap-6 md:gap-8 mt-8 xs:mt-10 md:mt-12 justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="500"
            >
            </div>
          </div>

          <div
            className="flex-1 relative order-1 lg:order-2"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto -mt-10">
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-primary-500/15 to-accent-purple/15 blur-md" />
            <div className="absolute inset-2 xs:inset-4 rounded-full bg-gradient-to-r from-primary-600/20 to-accent-purple/20 border border-primary-500/30" />
              <img
                src={require("../../assets/images/profile-pic.jpeg")}
                alt="Gunjan Arora"
                className="relative z-10 w-full h-full object-cover rounded-full border-2 xs:border-6 border-dark-700 shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 xs:-bottom-4 xs:-right-4 
w-16 h-16 xs:w-20 xs:h-20 md:w-24 md:h-24 
rounded-xl xs:rounded-2xl bg-dark-800 border border-dark-700 
flex items-center justify-center shadow-xl z-20">
<div className="text-center">
                  <div className="text-lg xs:text-xl md:text-2xl font-bold text-primary-400">4+</div>
                  <div className="text-[10px] xs:text-xs text-dark-400">Internships</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*<button
        onClick={scrollToAbout}
        className="absolute bottom-2 xs:bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-dark-400 hover:text-primary-400 transition-colors animate-bounce p-2 touch-manipulation"
        data-aos="fade-up"
        data-aos-delay="600"
        aria-label="Scroll to about section"
      >
        <KeyboardArrowDownIcon className="text-3xl xs:text-4xl" />
      </button>*/}
    </section>
  );
}
