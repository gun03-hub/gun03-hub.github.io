import { formatTime, getPercentage } from "../../utils/getElapsedTime";
import { BsSpotify } from "react-icons/bs";
import useTimer from "../../hooks/useTimer";

export default function SpotifyCard({ spotifyData: presenceData }) {
  const start = presenceData?.timestamps?.start ?? Date.now();
  const end = presenceData?.timestamps?.end ?? Date.now();

  const startTimeInSeconds = Math.ceil((Date.now() - start) / 1000);
  const endTimeInSeconds = Math.ceil((end - start) / 1000);
  const time = useTimer(startTimeInSeconds, endTimeInSeconds);

  // Guard if essential data is missing
  if (!presenceData.assets || !presenceData.assets.large_image) {
    return <div className="text-sm text-red-400">Invalid Spotify Data</div>;
  }

  const albumArt = presenceData.assets.large_image.split(":")[1];

  return (
    <div className="flex mx-2 flex-row justify-center items-center">
      <div className="relative">
        <img
          className="w-full h-full my-[6px] max-h-[80px] max-w-[80px] object-cover"
          src={`https://i.scdn.co/image/${albumArt}`}
          alt="Album Art"
        />
        <BsSpotify className="bottom-[2px] bg-neutral-800 outline-neutral-800 right-0 outline outline-2 max-w-[25px] max-h-[25px] rounded-full absolute text-green-500" />
      </div>

      <div className="z-20 px-4 font-normal text-xs space-y-1">
        <p
          className="font-extrabold hover:scale-[1.013] transition-all duration-100 cursor-pointer hover:underline text-[14px]"
          onClick={() => {
            window.open(
              `https://open.spotify.com/track/${presenceData.sync_id}`,
              "_blank"
            );
          }}
        >
          {presenceData.assets.large_text}
        </p>
        <p className="font-medium">by {presenceData.state}</p>
        <p>{presenceData.details}</p>

        <div className="flex justify-between flex-row gap-8">
          <span className="text-xs font-medium">
            {`${time.hours > 0 ? time.hours + "h :" : ""} ${
              time.minutes > 0 ? time.minutes + "m :" : ""
            } ${time.seconds + "s"}`}
          </span>
          <span className="text-xs font-medium">
            {formatTime(endTimeInSeconds)}
          </span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${getPercentage(presenceData)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
