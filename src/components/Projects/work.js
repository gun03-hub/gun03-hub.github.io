import Tilt from "react-parallax-tilt";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Work({ title, desc, tags, link, code, img }) {
  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  
  return (
    <Tilt
      tiltMaxAngleX={isTouchDevice ? 0 : 5}
      tiltMaxAngleY={isTouchDevice ? 0 : 5}
      scale={isTouchDevice ? 1 : 1.02}
      transitionSpeed={300}
      className="h-full"
    >
      <div className="project-card h-full flex flex-col">
        <div className="relative overflow-hidden group/image">
          <img
            src={img}
            alt={title}
            className="w-full h-40 xs:h-44 sm:h-48 md:h-52 object-cover transition-transform duration-500 group-hover/image:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent opacity-100 sm:opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute top-3 xs:top-4 right-3 xs:right-4 flex gap-2 opacity-100 sm:opacity-0 group-hover/image:opacity-100 transition-all duration-300 sm:transform sm:translate-y-2 sm:group-hover/image:translate-y-0">
            {link && (
              <button
                onClick={() => window.open(link, "_blank")}
                className="w-9 h-9 xs:w-10 xs:h-10 rounded-lg bg-dark-800/90 backdrop-blur-sm border border-dark-600 flex items-center justify-center text-white hover:bg-primary-500 hover:border-primary-500 transition-all touch-manipulation active:scale-95"
                title="Visit Site"
                aria-label="Visit project site"
              >
                <LaunchIcon className="text-base xs:text-lg" />
              </button>
            )}
            {code && (
              <button
                onClick={() => window.open(code, "_blank")}
                className="w-9 h-9 xs:w-10 xs:h-10 rounded-lg bg-dark-800/90 backdrop-blur-sm border border-dark-600 flex items-center justify-center text-white hover:bg-primary-500 hover:border-primary-500 transition-all touch-manipulation active:scale-95"
                title="View Code"
                aria-label="View project code"
              >
                <GitHubIcon className="text-base xs:text-lg" />
              </button>
            )}
          </div>
        </div>

        <div className="p-4 xs:p-5 md:p-6 flex flex-col flex-1">
          <h3 className="text-base xs:text-lg md:text-xl font-display font-bold text-white mb-2 xs:mb-3 group-hover:text-primary-400 transition-colors">
            {title}
          </h3>
          
          <p className="text-dark-400 text-xs xs:text-sm leading-relaxed mb-3 xs:mb-4 flex-1 line-clamp-2 xs:line-clamp-3">
            {desc.length > 120 ? `${desc.substring(0, 120)}...` : desc}
          </p>

          <div className="flex flex-wrap gap-1.5 xs:gap-2 mt-auto pt-3 xs:pt-4 border-t border-dark-700">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 xs:px-2.5 py-0.5 xs:py-1 text-[10px] xs:text-xs font-medium rounded-md bg-dark-700/50 text-dark-200 border border-dark-600"
              >
                {tag.name}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-2 xs:px-2.5 py-0.5 xs:py-1 text-[10px] xs:text-xs font-medium rounded-md bg-dark-700/50 text-dark-300 border border-dark-600">
                +{tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </Tilt>
  );
}
