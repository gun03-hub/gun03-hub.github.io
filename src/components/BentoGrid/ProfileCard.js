import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function ProfileCard() {
  const getDate = () => {
    var dob = new Date("01/03/2006");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  };

  return (
    <motion.div
      className="bg-[#171717] rounded-3xl border border-white/10 p-6 md:p-8 min-h-[600px] lg:h-full flex flex-col justify-between backdrop-blur-sm shadow-2xl"
      whileHover={{ scale: 1.02, borderColor: "rgba(255, 255, 255, 0.2)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Profile Image */}
        <div className="relative">
          <div className="rounded-full p-1 border border-white/20 inline-block">
            <img
              src={require("../../assets/images/profile-pic.png")}
              alt="Gunjan Arora"
              className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover border-2 border-white/30"
            />
          </div>
        </div>

        {/* Name and Title */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-['Inter']">
            Gunjan Arora
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium font-['Inter']">
            Full Stack Developer
          </p>
        </div>

        {/* Bio */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed font-['Inter']">
          I'm a Full Stack Developer specializing in React.js, Node.js, and modern web technologies. Currently pursuing a BS degree at the University of Delhi, I'm passionate about SQL and Database Management. Seeking opportunities to build scalable applications and contribute to innovative projects.
        </p>

        {/* Social Links */}
        <div className="flex gap-4">
          <motion.a
            href="https://github.com/gun03-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-3 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-white text-xl" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/gunjan-arora-4248462a9/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-3 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="text-white text-xl" />
          </motion.a>
        </div>

        {/* Download CV Button */}
        <motion.a
          href={require("../../assets/files/Resume.pdf")}
          download={"Gunjan's Resume"}
          target="_blank"
          rel="noreferrer"
          className="w-full bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-6 py-3 text-white font-semibold flex items-center justify-center gap-2 transition-colors font-['Inter']"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <HiDownload className="text-lg" />
          Download CV
        </motion.a>
      </div>
    </motion.div>
  );
}

