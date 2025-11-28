import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import SkillsCard from "./SkillsCard";
import ProjectsGrid from "./ProjectsGrid";

export default function BentoGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-4 md:p-8">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          {/* Profile Card - Large square on the left */}
          <motion.div
            className="lg:col-span-4"
            variants={itemVariants}
          >
            <ProfileCard />
          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-8 flex flex-col gap-4 md:gap-6">
            {/* Skills Card - Wide rectangular at the top */}
            <motion.div variants={itemVariants}>
              <SkillsCard />
            </motion.div>

            {/* Projects Grid - Square cards below */}
            <motion.div variants={itemVariants}>
              <ProjectsGrid />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

