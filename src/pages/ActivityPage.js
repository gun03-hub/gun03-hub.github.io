import React, { useEffect, useState } from "react";
import { MdDarkMode, MdDoNotDisturbOn, MdFiberManualRecord, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { NavLink } from "react-router-dom";

import CodeCard from "../components/Activities/CodeCard";
import SpotifyCard from "../components/Activities/SpotifyCard";
import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";
import { isSpotify } from "../utils/identifyActivity";

export default function ActivityPage() {
  const [totalActivity, setTotalActivity] = useState(0);
  const [currActivity, setCurrActivity] = useState(0);
  const [showLoading, setShowLoading] = useState(true);
  const DISCORD_USER_ID = process.env.REACT_APP_DISCORD_USER_ID;

  const {
    data: userData,
    isLoading,
    error,
  } = useFetch(`https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`);

  // Save activity to localStorage if available
  useEffect(() => {
    if (!isLoading && userData?.activities?.length > 0) {
      setTotalActivity(userData.activities.length);
      localStorage.setItem("lastActivity", JSON.stringify(userData.activities[0]));
    }
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, [isLoading, userData]);

  useEffect(() => {
    console.log("👾 Lanyard userData:", userData);
  }, [userData]);

  if (isLoading || error || showLoading) {
    return (
      <div className="flex items-center bg-gray-700 justify-center text-center text-white h-screen">
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <Loader />
          <p className="text-2xl font-bold">
            {error ? "Error occurred" : "Loading..."}
          </p>
        </div>
      </div>
    );
  }

  const avatarURL = userData.discord_user.avatar
    ? `https://cdn.discordapp.com/avatars/${userData.discord_user.id}/${userData.discord_user.avatar}.png`
    : "https://cdn.discordapp.com/embed/avatars/0.png";

  const statusIcon = {
    idle: (
      <MdDarkMode className="bottom-2 bg-neutral-800 outline-neutral-800 left-3 ml-[55%] outline outline-4 w-5 h-5 rounded-full absolute text-yellow-500" />
    ),
    dnd: (
      <MdDoNotDisturbOn className="bottom-2 bg-neutral-800 outline-neutral-800 left-3 ml-[55%] outline outline-4 w-5 h-5 rounded-full absolute text-red-500" />
    ),
    online: (
      <MdFiberManualRecord className="bottom-2 bg-neutral-800 outline-neutral-800 left-3 ml-[55%] outline outline-4 w-5 h-5 rounded-full absolute text-green-500" />
    ),
    offline: (
      <div className="bottom-2 bg-neutral-800 outline-neutral-800 left-3 ml-[55%] outline outline-4 w-5 h-5 rounded-full absolute border-neutral-700 border-4" />
    ),
  };

  const lastActivity = JSON.parse(localStorage.getItem("lastActivity"));

  return (
    <div className="h-screen flex items-center justify-center bg-gray-700 text-white">
      <div className="max-w-sm min-w-[384px] my-auto bg-gray-900 rounded-2xl overflow-hidden shadow-lg py-4">
        <div className="px-4">
          <div className="text-center my-4">
            <div className="relative">
              <NavLink to={"/"}>
                <img
                  src={avatarURL}
                  alt={userData.discord_user.global_name}
                  title="My page"
                  className="rounded-full border-[6px] border-neutral-800 shadow-md mx-auto max-w-[190px]"
                />
              </NavLink>
              <span title={`Discord Status: ${userData.discord_status}`}>
                {statusIcon[userData.discord_status]}
              </span>
            </div>
            <div className="py-2">
              <h3 className="font-bold text-2xl text-white mb-1">
                {userData.discord_user.global_name}
              </h3>
              <div className="inline-flex text-gray-300 items-center">
                <MdLocationOn className="mr-1" />
                {userData.kv?.location || "New Delhi, India"}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-col justify-center pb-6">
          {totalActivity === 0 && lastActivity ? (
            <div className="inline-flex flex-row mx-[10%] my-5 items-center">
              {isSpotify(lastActivity) ? (
                <SpotifyCard spotifyData={lastActivity} />
              ) : (
                <CodeCard presenceData={lastActivity} />
              )}
            </div>
          ) : totalActivity === 0 ? (
            <div className="text-center text-sm text-gray-400 mt-3">
              No active Discord activities.
            </div>
          ) : (
            <div className="inline-flex flex-row mx-[10%] my-5 items-center">
              {currActivity > 0 && (
                <button onClick={() => setCurrActivity(currActivity - 1)}>
                  <IoArrowBack className="text-xl" />
                </button>
              )}

              {isSpotify(userData.activities[currActivity]) ? (
                <SpotifyCard
                  spotifyData={userData.activities[currActivity]}
                />
              ) : (
                <CodeCard
                  presenceData={userData.activities[currActivity]}
                />
              )}

              {currActivity < totalActivity - 1 && (
                <button onClick={() => setCurrActivity(currActivity + 1)}>
                  <IoArrowForward className="text-xl" />
                </button>
              )}
            </div>
          )}
        </div>

        <div className="text-white justify-around flex flex-row gap-7 w-fit mx-auto pb-5">
          <div
            title="Github"
            onClick={() =>
              window.open("https://github.com/gun03-hub", "_blank")
            }
          >
            <FaGithub className="cursor-pointer hover:scale-105 text-2xl" />
          </div>
          <div
            title="LinkedIn"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/gunjan-arora-4248462a9/",
                "_blank"
              )
            }
          >
            <FaLinkedin className="cursor-pointer hover:scale-105 text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
