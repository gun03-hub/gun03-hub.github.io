import { motion } from "framer-motion";
import { projects } from "../../constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectsGrid() {
  return (
    <motion.div 
      className="bg-[#171717] rounded-3xl border border-white/10 p-6 md:p-8 backdrop-blur-sm shadow-2xl"
      whileHover={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Inter']">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projects.slice(0, 6).map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#0a0a0a] rounded-3xl border border-white/10 p-4 md:p-6 flex flex-col group hover:border-white/20 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            {/* Project Image */}
            <div className="relative mb-4 rounded-2xl overflow-hidden">
              <img
                src={require(`../../assets/images/${project.img}`)}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {project.code && (
                  <motion.a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm rounded-lg p-2 hover:bg-white/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub className="text-white text-sm" />
                  </motion.a>
                )}
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm rounded-lg p-2 hover:bg-white/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExternalLinkAlt className="text-white text-sm" />
                  </motion.a>
                )}
              </div>
            </div>

            {/* Project Title */}
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-['Inter']">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="text-gray-400 text-sm md:text-base mb-4 font-['Inter'] overflow-hidden" style={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}>
              {project.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.slice(0, 3).map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 font-['Inter']"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* View More Button */}
      <motion.div className="mt-6 flex justify-center">
        <motion.a
          href="https://github.com/gun03-hub"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold flex items-center gap-2 transition-colors font-['Inter']"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub />
          View More Projects
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

