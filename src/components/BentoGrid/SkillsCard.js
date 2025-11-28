import { motion } from "framer-motion";

export default function SkillsCard() {
  const skills = [
    { name: "JavaScript", percent: 65 },
    { name: "React", percent: 75 },
    { name: "Next.js", percent: 70 },
    { name: "UI/UX Design", percent: 60 },
    { name: "SQL", percent: 65 },
    { name: "HTML/CSS", percent: 85 },
    { name: "Node.js", percent: 70 },
    { name: "Database Management", percent: 65 },
  ];

  return (
    <motion.div
      className="bg-[#171717] rounded-3xl border border-white/10 p-6 md:p-8 backdrop-blur-sm shadow-2xl"
      whileHover={{ scale: 1.01, borderColor: "rgba(255, 255, 255, 0.2)" }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Inter']">
        Skills & Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-medium text-sm md:text-base font-['Inter']">
                {skill.name}
              </span>
              <span className="text-gray-400 text-xs md:text-sm font-['Inter']">
                {skill.percent}%
              </span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.percent}%` }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

