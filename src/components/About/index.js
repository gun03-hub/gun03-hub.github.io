import "../../App.css";
import { HiDownload } from "react-icons/hi";

export default function About() {
  const getDate = () => {
    var dob = new Date("01/03/2006");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  };

  return (
    <div
      id="about"
      className="min-h-screen flex flex-col text-center gap-8 text-white text-sm lg:text-lg font-normal px-4 py-12 md:py-16"
    >
      <div
        className="head text-3xl lg:text-5xl mt-8 md:mt-12 font-bold text-white"
        data-aos="fade-down"
        data-aos-duration="600"
        data-aos-easing="ease-out-cubic"
      >
        About Me
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto w-full px-4">
        <div 
          className="glass-card glass-card-strong flex-col mt-8 lg:mt-14 flex flex-auto p-6 md:p-8 gap-6" 
          data-aos="fade-right"
          data-aos-offset="150"
          data-aos-duration="800"
          data-aos-easing="ease-out-cubic"
        >
          <h3 className="text-xl lg:text-3xl font-semibold text-white">
            I'm <span className="text-yellow-400">Gunjan Arora,</span> a Full Stack Developer
          </h3>
          <p className="pt-2 leading-7 text-slate-100 text-justify">
            I'm a Full Stack Developer specializing in React.js, Node.js, and modern web technologies. Currently pursuing a BS degree at the University of Delhi, I'm passionate about SQL and Database Management. Seeking opportunities to build scalable applications and contribute to innovative projects.
          </p>
        </div>

        <div
          className="glass-card glass-card-strong relative flex-auto flex flex-col items-center justify-center p-6 md:p-8"
          data-aos="fade-left"
          data-aos-offset="150"
          data-aos-duration="800"
          data-aos-easing="ease-out-cubic"
        >
          <div className="motion-safe:animate-zoomy">
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
              style={{ width: "100%", maxWidth: "350px" }}
            />
          </div>

          <a
            href={require("../../assets/files/Resume.pdf")}
            download={"Gunjan's Resume"}
            target="_blank" 
            rel="noreferrer"
            className="py-2 md:py-3 lg:py-3 mt-4 lg:mt-6 text-white mx-auto px-6 lg:px-9 bg-blue-500/30 backdrop-blur-sm border-2 border-blue-400 w-fit rounded-xl hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-500/40 hover:border-blue-300 hover:scale-[1.05] focus:bg-blue-500/40 text-base md:text-lg font-semibold flex items-center gap-2"
          >
            Download CV
            <HiDownload className="text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
}
