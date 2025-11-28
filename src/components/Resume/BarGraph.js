export default function BarGraph({ name, percent }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between w-full md:w-3/4 px-2 md:px-6 text-base md:text-lg text-white">
        <h2 className="font-medium">{name}</h2>
        <h2 className="font-semibold">{percent}%</h2>
      </div>
      <div
        className="w-full md:w-3/4 bg-white/10 backdrop-blur-sm h-3 rounded-full mt-2"
      >
        <div
          className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 text-center font-medium leading-none rounded-full transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
