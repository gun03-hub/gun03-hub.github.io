import BarGraph from "./BarGraph";
import { HiDownload } from "react-icons/hi";

export default function Resume() {
  const skills = [
    { name: "JavaScript", percent: 65 },
    { name: "React", percent: 75 },
    { name: "Next", percent: 70 },
    { name: "User-Interface Design", percent: 60 },
    { name: "Matplotlib", percent: 80 },
    { name: "HTML/CSS", percent: 85 },
    { name: "SQL", percent: 65 },
    { name: "FireBase", percent: 40 },
    { name: "Django", percent: 30 },
  ];

  return (
    <div id="resume" className="min-h-screen flex-col text-center px-4 py-12 md:py-16">
      <div 
        className="text-4xl md:text-5xl font-bold py-6 md:py-8 text-white" 
        data-aos="fade-down"
        data-aos-duration="600"
        data-aos-easing="ease-out-cubic"
      >
        Resume
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 max-w-7xl mx-auto">
        <div 
          className="glass-card glass-card-strong p-6 md:p-8"
          data-aos="fade-right"
          data-aos-offset="150"
          data-aos-duration="800"
          data-aos-easing="ease-out-cubic"
        >
          <ol className="relative border-l border-white/30 ml-6 md:ml-9 mb-6">
          {/* === TIMELINE ITEM 1 === */}
          <li 
            className="mb-10" 
            data-aos="fade-up" 
            data-aos-offset="50"
            data-aos-delay="100"
            data-aos-duration="600"
          >
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-4 ring-white/20 bg-blue-500 backdrop-blur-sm">
              <svg
                className="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-white">
              Deloitte Job Simulation (Forage)
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-300">
              Completed on June 2024
            </time>
            <p className="text-base font-normal text-gray-200">
              Completed Deloitte’s job simulation via Forage, gaining
              hands-on experience in transforming client requirements into
              a functional software proposal.
              <br /><br />
              <strong>Skills Applied:</strong> Data Structures, Formal
              Communication, Planning, Programming, Python, Software
              Development Processes
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_PYAsRaAGNGisYdjzN_1750740333481_completion_certificate.pdf"
              className="inline-flex items-center px-4 py-2 mt-5 text-sm font-medium border rounded-lg focus:z-10 focus:ring-4 focus:outline-none bg-white/10 backdrop-blur-sm text-white border-white/20 hover:text-white hover:bg-white/20 focus:ring-white/30"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                ></path>
              </svg>
              Download Certificate
            </a>
          </li>

          {/* === TIMELINE ITEM 2 === */}
          <li 
            className="mb-10" 
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="200"
            data-aos-duration="600"
          >
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-4 ring-white/20 bg-blue-500 backdrop-blur-sm">
              <svg
                className="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-white">
              React Frontend Developer
            </h3>
            <time className="block mb-2 text-sm font-normal text-gray-300">
              Completed on July 11th, 2024
            </time>
            <p className="text-base font-normal text-gray-200">
              Validated proficiency in React.js, CSS, and JavaScript. Covered
              backend development with Node.js and Express and built
              various mini-projects.
            </p>
            <a
              href="https://www.hackerrank.com/certificates/1cd15de5ff41"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 mt-2 text-sm font-medium border rounded-lg bg-white/10 backdrop-blur-sm text-white border-white/20 hover:text-white hover:bg-white/20 focus:ring-white/30"
            >
              <HiDownload className="w-4 h-4 mr-2" />
              Download Certificate
            </a>
          </li>

          {/* === TIMELINE ITEM 3 === */}
          <li 
            className="mb-10" 
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="300"
            data-aos-duration="600"
          >
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-4 ring-white/20 bg-blue-500 backdrop-blur-sm">
              <svg
                className="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-white">
              Generative AI by Google
            </h3>
            <time className="block mb-2 text-sm font-normal text-gray-300">
              Completed on February 14th, 2024
            </time>
            <p className="text-base font-normal text-gray-200">
              Learned how to build generative AI applications using Python
              and TensorFlow. Created multiple AI mini-projects.
            </p>
            <a
              href="https://www.cloudskillsboost.google/public_profiles/f23dded4-ad03-4b42-842c-b10f4de2862d/badges/8031342"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 mt-5 text-sm font-medium border rounded-lg bg-white/10 backdrop-blur-sm text-white border-white/20 hover:text-white hover:bg-white/20 focus:ring-white/30"
            >
              <HiDownload className="w-4 h-4 mr-2" />
              Download Certificate
            </a>
          </li>
        </ol>
        </div>

        {/* === SKILLS BAR GRAPH === */}
        <div 
          className="glass-card glass-card-strong flex flex-col text-center p-6 md:p-8" 
          data-aos="fade-left"
          data-aos-offset="150"
          data-aos-duration="800"
          data-aos-easing="ease-out-cubic"
        >
          <div className="text-2xl md:text-3xl font-bold py-3 text-white">My Skills</div>
          <div className="ml-4 md:ml-16 flex flex-col gap-6 md:gap-8 mt-4 md:mt-6">
            {skills.map((skill) => (
              <BarGraph key={skill.name} name={skill.name} percent={skill.percent} />
            ))}
          </div>

          <a
            href={require("../../assets/files/Resume.pdf")}
            download={"Gunjan's Resume"}
            className="inline-flex items-center px-6 py-2 mt-8 md:mt-12 mx-auto w-fit text-sm font-medium border rounded-lg bg-white/10 backdrop-blur-sm text-white border-white/20 hover:text-white hover:bg-white/20 focus:ring-white/30"
          >
            Download CV <HiDownload className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}
