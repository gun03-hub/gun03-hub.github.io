import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import VerifiedIcon from "@mui/icons-material/Verified";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { experiences } from "../../constants";

export default function Resume() {
  const getTypeColor = (type) => {
    switch(type) {
      case 'current': return 'from-green-500 to-emerald-500';
      case 'leadership': return 'from-purple-500 to-pink-500';
      case 'internship': return 'from-cyan-500 to-blue-500';
      default: return 'from-primary-500 to-primary-600';
    }
  };

  const getTypeBadge = (type) => {
    switch(type) {
      case 'current': return { text: 'Current', bg: 'bg-green-500/20 text-green-400 border-green-500/30' };
      case 'leadership': return { text: 'Leadership', bg: 'bg-purple-500/20 text-purple-400 border-purple-500/30' };
      case 'internship': return { text: 'Internship', bg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' };
      default: return { text: 'Experience', bg: 'bg-primary-500/20 text-primary-400 border-primary-500/30' };
    }
  };

  const skills = [
    { name: "JavaScript / TypeScript", level: 90, color: "from-yellow-500 to-orange-500" },
    { name: "React / Next.js", level: 88, color: "from-cyan-500 to-blue-500" },
    { name: "Node.js / Express", level: 82, color: "from-green-500 to-emerald-500" },
    { name: "Python / Django", level: 75, color: "from-blue-500 to-indigo-500" },
    { name: "MongoDB / PostgreSQL", level: 80, color: "from-purple-500 to-pink-500" },
    { name: "HTML / CSS / Tailwind", level: 92, color: "from-pink-500 to-rose-500" },
  ];

  const certifications = [
    {
      title: "React Frontend Developer",
      issuer: "HackerRank",
      date: "July 2024",
      link: "https://www.hackerrank.com/certificates/1cd15de5ff41",
      description: "Proficiency in React.js, CSS, JavaScript, state management, and Node.js backend development.",
    },
    {
      title: "Generative AI Fundamentals",
      issuer: "Google Cloud",
      date: "February 2024",
      link: "https://www.cloudskillsboost.google/public_profiles/f23dded4-ad03-4b42-842c-b10f4de2862d/badges/8031342",
      description: "Building generative AI applications with Python and TensorFlow, developing AI models for various tasks.",
    },
    {
      title: "Python Data Libraries",
      issuer: "HackerRank",
      date: "July 2024",
      link: "https://www.hackerrank.com/certificates/5da32f7b75e6",
      description: "Working with Pandas, NumPy, and Matplotlib for data manipulation and visualization.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Delhi",
      period: "2023 - Present",
      description: "Currently in 2nd year, focusing on software development, data structures, and algorithms.",
    },
  ];

  return (
    <section id="resume" className="py-12 xs:py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 xs:px-6">
        <div className="text-center mb-10 xs:mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="section-heading mb-3 xs:mb-4">Resume</h2>
          <p className="section-subheading mx-auto">
            My educational background, work experience, and technical expertise
          </p>
        </div>

        {/* Work Experience Section - Full Width */}
        <div className="mb-12 xs:mb-16" data-aos="fade-up">
          <div className="flex items-center gap-2.5 xs:gap-3 mb-6 xs:mb-8">
            <div className="w-10 h-10 xs:w-12 xs:h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center text-primary-400 animate-glow-pulse">
              <BusinessCenterIcon className="text-xl xs:text-2xl" />
            </div>
            <div>
              <h3 className="text-xl xs:text-2xl font-display font-bold text-white">Work Experience</h3>
              <p className="text-xs xs:text-sm text-dark-400">Professional journey & achievements</p>
            </div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 xs:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-purple to-accent-cyan hidden md:block" />
            
            <div className="space-y-4 xs:space-y-6">
              {experiences.map((exp, index) => {
                const badge = getTypeBadge(exp.type);
                const color = getTypeColor(exp.type);
                return (
                  <div
                    key={index}
                    className="relative pl-0 md:pl-16"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-0 top-6 w-12 h-12 items-center justify-center">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${color} timeline-dot z-10`} />
                    </div>

                    <div className="glass-card p-4 xs:p-6 group hover:border-primary-500/30 transition-all duration-500 hover-lift card-tilt">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 xs:gap-3 mb-3 xs:mb-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                            <h4 className="text-lg xs:text-xl font-semibold text-white group-hover:text-shimmer transition-colors">
                              {exp.role}
                            </h4>
                            <span className={`px-2 xs:px-3 py-0.5 xs:py-1 text-[10px] xs:text-xs font-medium rounded-full border ${badge.bg}`}>
                              {badge.text}
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-2 xs:gap-4 text-xs xs:text-sm">
                            <span className="text-primary-400 font-medium">{exp.company}</span>
                            <span className="flex items-center gap-1 text-dark-400">
                              <LocationOnIcon className="text-xs xs:text-sm" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 xs:gap-2 text-dark-300 text-xs xs:text-sm whitespace-nowrap bg-dark-800/50 px-2 xs:px-3 py-1 xs:py-1.5 rounded-full">
                          <WorkIcon className="text-xs xs:text-sm text-primary-400" />
                          {exp.period}
                        </div>
                      </div>

                      <ul className="space-y-1.5 xs:space-y-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <li 
                            key={hIndex} 
                            className="flex items-start gap-2 xs:gap-3 text-dark-300 text-xs xs:text-sm"
                          >
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${color} flex-shrink-0`} />
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 xs:gap-10 lg:gap-12">
          <div className="space-y-6 xs:space-y-8">
            <div data-aos="fade-right">
              <div className="flex items-center gap-2.5 xs:gap-3 mb-4 xs:mb-6">
                <div className="w-9 h-9 xs:w-10 xs:h-10 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-400 icon-bounce">
                  <SchoolIcon className="text-lg xs:text-xl" />
                </div>
                <h3 className="text-xl xs:text-2xl font-display font-bold text-white">Education</h3>
              </div>

              {education.map((edu, index) => (
                <div
                  key={index}
                  className="glass-card p-4 xs:p-5 md:p-6 border-l-4 border-primary-500 hover-lift animate-border-flow"
                >
                  <h4 className="text-base xs:text-lg font-semibold text-white mb-1">{edu.degree}</h4>
                  <div className="text-primary-400 text-sm xs:text-base font-medium mb-1.5 xs:mb-2">{edu.institution}</div>
                  <div className="text-xs xs:text-sm text-dark-400 mb-2 xs:mb-3">{edu.period}</div>
                  <p className="text-dark-300 text-xs xs:text-sm">{edu.description}</p>
                </div>
              ))}
            </div>

            <div data-aos="fade-right" data-aos-delay="100">
              <div className="flex items-center gap-2.5 xs:gap-3 mb-4 xs:mb-6">
                <div className="w-9 h-9 xs:w-10 xs:h-10 rounded-lg bg-accent-purple/20 flex items-center justify-center text-accent-purple icon-bounce">
                  <VerifiedIcon className="text-lg xs:text-xl" />
                </div>
                <h3 className="text-xl xs:text-2xl font-display font-bold text-white">Certifications</h3>
              </div>

              <div className="space-y-3 xs:space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="glass-card p-4 xs:p-5 md:p-6 group hover:border-primary-500/30 transition-all hover-lift"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex flex-col xs:flex-row xs:justify-between xs:items-start gap-1 xs:gap-0 mb-1.5 xs:mb-2">
                      <h4 className="text-base xs:text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                        {cert.title}
                      </h4>
                      <span className="text-xs text-dark-400 whitespace-nowrap">{cert.date}</span>
                    </div>
                    <div className="text-primary-400 text-xs xs:text-sm font-medium mb-1.5 xs:mb-2">{cert.issuer}</div>
                    <p className="text-dark-400 text-xs xs:text-sm mb-3 xs:mb-4 line-clamp-2 xs:line-clamp-none">{cert.description}</p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 xs:gap-2 text-xs xs:text-sm text-primary-400 hover:text-primary-300 transition-colors touch-manipulation py-1 group/link"
                    >
                      <DownloadIcon className="text-sm xs:text-base group-hover/link:animate-bounce" />
                      View Certificate
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="flex items-center gap-2.5 xs:gap-3 mb-4 xs:mb-6">
              <div className="w-9 h-9 xs:w-10 xs:h-10 rounded-lg bg-accent-cyan/20 flex items-center justify-center text-accent-cyan icon-bounce">
                <WorkIcon className="text-lg xs:text-xl" />
              </div>
              <h3 className="text-xl xs:text-2xl font-display font-bold text-white">Technical Skills</h3>
            </div>

            <div className="glass-card p-4 xs:p-6 md:p-8 space-y-4 xs:space-y-6 hover-glow transition-all">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="space-y-1.5 xs:space-y-2"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white text-sm xs:text-base font-medium">{skill.name}</span>
                    <span className="text-dark-400 text-xs xs:text-sm">{skill.level}%</span>
                  </div>
                  <div className="skill-bar relative overflow-hidden">
                    <div
                      className={`skill-bar-fill bg-gradient-to-r ${skill.color}`}
                      style={{ width: `${skill.level}%` }}
                    />
                    <div className="absolute inset-0 animate-shimmer" />
                  </div>
                </div>
              ))}

              <div className="pt-4 xs:pt-6 mt-4 xs:mt-6 border-t border-dark-700">
                <h4 className="text-base xs:text-lg font-semibold text-white mb-3 xs:mb-4">Other Skills</h4>
                <div className="flex flex-wrap gap-1.5 xs:gap-2">
                  {["Git", "Docker", "AWS", "Firebase", "REST APIs", "GraphQL", "Agile", "CI/CD"].map((skill, index) => (
                    <span 
                      key={index} 
                      className="tech-tag hover:scale-110 transition-transform cursor-default"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={require("../../assets/files/Resume.pdf")}
              download="Gunjan_Arora_Resume"
              className="btn-primary btn-ripple w-full mt-6 xs:mt-8 flex items-center justify-center gap-2"
              data-aos="fade-up"
            >
              <DownloadIcon className="text-lg xs:text-xl" />
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
