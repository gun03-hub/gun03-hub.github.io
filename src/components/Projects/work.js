import Tilt from "react-parallax-tilt";

export default function work({ title, desc, tags, code, img }) {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="glass-card glass-card-strong rounded-2xl w-full sm:max-w-[362px] h-full p-[2px] transition-all duration-500 hover:scale-[1.02]"
    >
      <div className="bg-white/5 backdrop-blur-sm w-full h-full rounded-2xl p-4 md:p-6 flex flex-col justify-between transition-all duration-300">
        <div>
          <div className="relative w-full rounded-2xl">
            <img
              src={img}
              alt={title}
              className="w-full h-[150px] sm:h-[200px] rounded-[10px] object-cover border-[1px] border-secondary"
            />
            <div className="absolute inset-0 flex justify-end m-3 ">
              <div
                onClick={() => window.open(code, "_blank")}
                className="glass-card w-9 h-9 rounded-full border-[1px] border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
              >
                <img
                  src={require("../../assets/images/github.webp")}
                  alt={"github"}
                  className="w-3/5 h-3/5 lg:w-4/5 lg:h-4/5 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[18px] sm:text-[20px] lg:text-[24px]">
              {title}
            </h3>
            <p className="mt-2 text-gray-200 text-[12px] sm:text-[14px] lg:text-[16px]">
              {desc}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-[10px] lg:text-[14px]">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className="font-medium text-white py-1 px-2 bg-white/10 backdrop-blur-sm rounded-md border border-white/20"
            >
              {tag.name}
            </p>
          ))}
        </div>
      </div>
    </Tilt>
  );
}
