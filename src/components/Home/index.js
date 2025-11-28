import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import "../../App.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  const scroll = (section) => {
    if (section === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 gap-7 name content-center text-center px-4 py-16">
      <div 
        className="glass-card glass-card-strong max-w-4xl mx-auto p-8 md:p-12" 
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-out-cubic"
      >
        <h1
          className="head text-4xl md:text-5xl lg:text-6xl font-bold tracking-[2px] md:tracking-[3px] pb-4 text-white"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="800"
          data-aos-easing="ease-out-cubic"
        >
          Welcome
        </h1>
        <div
          className="text-2xl md:text-3xl lg:text-4xl text-yellow-400 pb-8 md:pb-12"
          data-aos-delay="400"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-out-cubic"
        >
          {" "}
          <Typewriter
            options={{
              strings: [
                "✋I'm Gunjan Arora",
                "I'm an enthusiast Full Stack 🌐developer",
                "I'm a 3rd year Bsc. CS 👨‍🎓 in University of Delhi",
                "You can 📲 me through linkedln or ✉️",
              ],
              delay: 150,
              pauseFor: 1500,
              autoStart: true,
              loop: true,
              stringSplitter: stringSplitter,
            }}
          />
        </div>
        <button
          className="py-3 px-8 mx-auto bg-transparent border-2 w-fit border-blue-400 rounded-lg hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-500/20 hover:border-blue-300 text-white font-semibold backdrop-blur-sm"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="800"
          data-aos-easing="ease-out-cubic"
        >
          <NavLink
            to="#contact"
            onClick={() => {
              scroll("contact");
            }}
          >
            <p title="Contact"> Contact Me</p>
          </NavLink>
        </button>
      </div>
      <div
        className="cursor-pointer w-fit mx-auto mt-8"
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="800"
        data-aos-duration="800"
        data-aos-easing="ease-out-cubic"
      >
        <NavLink
          to="#about"
          onClick={() => {
            scroll("about");
          }}
        >
          <div className="glass-card p-3 rounded-full inline-block">
            <div className="text-white">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="currentColor"
                className="motion-safe:animate-bounce"
              >
                <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z" />
              </svg>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
