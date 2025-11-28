import { MdDarkMode } from "react-icons/md";

export default function ProfileCard() {
  return (
    <div>
      <div className="relative">
        <div className="glass-card rounded-full p-1 inline-block">
          <img
            src={require("../assets/images/profile-pic.png")}
            alt="Gunjan Arora"
            className="rounded-full border-solid cursor-pointer border-[4px] border-white/30 shadow-md min-h-fit mx-auto max-w-[190px]"
          />
        </div>
        <div className="glass-card bottom-2 left-3 ml-[55%] w-28 h-28 rounded-full absolute flex items-center justify-center">
          <MdDarkMode className="text-yellow-400 text-2xl" />
        </div>
      </div>
      <h3 className="text-white name py-4 font-medium">Gunjan Arora</h3>
    </div>
  );
}
