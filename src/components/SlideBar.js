import "../App.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Slidebar() {
  const [select, setSelect] = useState(0);

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
    <div className="flex-none hidden lg:block glass-card-strong h-screen min-w-[25%] fixed border-r border-white/20">
      <div className="nav flex text-white text-lg mt-10 flex-col align-middle justify-center text-center w-full gap-5 overflow-hidden px-4">
        <div data-aos="slide-down">
          <NavLink to={"/activity"}>
            <div className="glass-card rounded-full p-1 inline-block">
              <img
                src={require("../assets/images/profile-pic.png")}
                alt="Gunjan Arora"
                title="Discord Activity"
                className="rounded-full border-solid cursor-pointer border-[4px] border-white/30 min-h-fit mx-auto max-w-[190px]"
              />
            </div>
            <h3 className="text-white name py-4 font-medium ">
              Gunjan Arora
            </h3>
          </NavLink>
        </div>
        <p
          onClick={() => setSelect(0)}
          className={`cursor-pointer hover:text-blue-400 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 0 ? "text-blue-400 " : "text-white"
          }`}
          data-aos="slide-right"
          data-aos-delay="200"
        >
          <NavLink
            to="#"
            onClick={() => {
              scroll("#");
            }}
          >
            <p title="Home Page"> Home</p>
          </NavLink>
        </p>
        <p
          onClick={() => setSelect(1)}
          className={`cursor-pointer hover:text-blue-400 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 1 ? "text-blue-400 " : "text-white"
          }`}
          data-aos-delay="600"
          data-aos="slide-left"
        >
          <NavLink
            to="#about"
            onClick={() => {
              scroll("about");
            }}
          >
            <p title="About me"> About Me</p>
          </NavLink>
        </p>
        <p
          onClick={() => setSelect(2)}
          className={`cursor-pointer hover:text-blue-400 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 2 ? "text-blue-400 " : "text-white"
          }`}
          data-aos="slide-right"
          data-aos-delay="1000"
        >
          <NavLink
            to="#resume"
            onClick={() => {
              scroll("resume");
            }}
          >
            <p title="Resume"> Resume</p>
          </NavLink>
        </p>
        <p
          onClick={() => setSelect(3)}
          className={`cursor-pointer hover:text-blue-400 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 3 ? "text-blue-400 " : "text-white"
          }`}
          data-aos="slide-left"
          data-aos-delay="1400"
        >
          <NavLink
            to="#projects"
            onClick={() => {
              scroll("projects");
            }}
          >
            <p title="Projects"> Projects</p>
          </NavLink>
        </p>
        <p
          onClick={() => setSelect(4)}
          className={`cursor-pointer hover:text-blue-400 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 4 ? "text-blue-400 " : "text-white"
          }`}
          data-aos="slide-left"
          data-aos-delay="1800"
        >
          <NavLink
            to="#blog"
            onClick={() => {
              scroll("blog");
            }}
          >
            <p title="Blog"> Blogs</p>
          </NavLink>
        </p>
        <p
          onClick={() => setSelect(5)}
          className={`cursor-pointer hover:text-blue-400 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            select === 5 ? "text-blue-400 " : "text-white"
          }`}
          data-aos="slide-right"
          data-aos-delay="2200"
        >
          <NavLink
            to="#contact"
            onClick={() => {
              scroll("contact");
            }}
          >
            <p title="Contact"> Contact</p>
          </NavLink>
        </p>
      </div>
      <div
        className="text-white flex flex-row gap-5 w-fit mx-auto pt-7"
        data-aos="slide-up"
        data-aos-delay="2300"
      >
        <div
          title="Github"
          onClick={() =>
            window.open("https://github.com/gun03-hub", "_blank")
          }
          className="glass-card p-2 rounded-full cursor-pointer hover:bg-white/20 transition-colors"
        >
          <FaGithub className="hover:scale-110 transition-transform text-xl" />
        </div>
        <div
          title="Linkedin"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/gunjan-arora-4248462a9/",
              "_blank"
            )
          }
          className="glass-card p-2 rounded-full cursor-pointer hover:bg-white/20 transition-colors"
        >
          <FaLinkedin className="hover:scale-110 transition-transform text-xl" />
        </div>
      </div>
    </div>
  );
}