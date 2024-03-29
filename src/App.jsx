import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [lanyard, setLanyard] = useState({});
  const [spotify, setSpotify] = useState(undefined);
  const [vsc, setVsc] = useState(undefined);
  const [rn, setRn] = useState(undefined);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    setRn(new Date());
  });

  useEffect(() => {
    fetch("https://api.lanyard.rest/v1/users/626461325744275464", {
      method: "GET",
    }).then((res) =>
      res.json().then((data) => {
        setLanyard(data);
        if (data.data.spotify) {
          setSpotify(data.data.spotify);
        }
        data.data.activities.forEach((activity, ind) => {
          if (activity.application_id == "383226320970055681") {
            setVsc(data.data.activities[ind]);
          }
        });
      })
    );
    setRn(Date.now());
  }, []);

  const formatTime = () => {
    const hrs = Math.floor(
      Math.abs(rn - vsc?.timestamps?.start) / 1000 / 60 / 60
    );
    const mins =
      Math.floor(Math.abs(rn - vsc?.timestamps?.start) / 1000 / 60) - hrs * 60;
    return (
      (hrs > 0 ? hrs + (hrs > 1 ? " hours, " : " hour, ") : "") +
      mins +
      (mins > 1 ? " minutes" : " minute")
    );
  };

  return (
    <div className="min-h-screen py-4 bg-black font-['Labil_Grotesk'] text-white px-4 md:px-0 md:flex flex-col gap-4 items-center justify-center text-lg">
      <a
        href={
          [
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            "https://discord.gg/FwsGkZAqcZ",
          ][Math.floor(Math.random() * 2)]
        }
        className="hidden lg:block fixed bottom-8 right-8 hover:border-2 hover:border-white px-3 py-1 transition-all ease-in-out duration-300 rounded-full text-black hover:text-white umami--click--easter-egg"
      >
        feeling lucky?
      </a>
      <div className="flex flex-col gap-3 items-start">
        <div className="md:flex items-center justify-center">
          hi, i'm{" "}
          <a
            href="https://twitter.com/py_bash1"
            className="ml-1 bg-gray-300 cursor-[url('/cursor.svg'),_pointer] bg-opacity-40 px-1.5 py-0.5 rounded-md hover:bg-opacity-60 hover:text-black duration-300 transition ease-in-out umami--click--username"
          >
            pybash
          </a>
          {spotify ? (
            <>
              , rn am vibing to{" "}
              <a
                href={`https://open.spotify.com/track/${spotify?.track_id}`}
                className="mx-1 bg-gray-300 bg-opacity-40 px-1.5 py-0.5 rounded-md hover:bg-opacity-60 hover:text-black duration-300 transition ease-in-out cursor-[url('/cursor.svg'),_pointer] umami--click--song"
              >
                {spotify?.song}
              </a>
              by
              <span className="mx-1 bg-gray-300 bg-opacity-40 px-1.5 py-0.5 rounded-md hover:bg-opacity-60 hover:text-black duration-300 transition ease-in-out">
                {spotify?.artist}
              </span>
            </>
          ) : null}
        </div>
        {vsc ? (
          <div className="flex items-center justify-center">
            {spotify ? (
              <div>
                oh and i'm also {vsc?.details.split(" ")[0].toLowerCase()}{" "}
                {vsc?.details.split(" ")[1]} {vsc?.state} for the last{" "}
                {formatTime()}
              </div>
            ) : (
              <div>
                i'm {vsc?.details.split(" ")[0]} {vsc?.details.split(" ")[1]}{" "}
                {vsc?.state} for the last {formatTime()}
              </div>
            )}
          </div>
        ) : null}
        <div className="text-green-400 font-bold text-xl">now</div>
        <div>
          <ul className="ml-3">
            <li className="flex items-start gap-2">
              <a
                href={clicks >   1 ? `https://github.com/pybash1` : "#"}
                className="flex items-center font-bold text-green-400 umami--click--github cursor-[url('/cursor.svg'),_pointer]"
                onClick={() => setClicks(clicks + 1)}
              >
                building
              </a>{" "}
              meaningful products that solve problems
            </li>
            {clicks >= 1 ? (
              <li className="flex gap-2">
                <a
                  href="https://solo.pybash.xyz"
                  className="text-green-400 font-bold umami--click--solo-building cursor-[url('/cursor.svg'),_pointer]"
                >
                  {lanyard?.data?.kv?.rnname}
                </a>{" "}
                - {lanyard?.data?.kv?.rn}
              </li>
            ) : null}
            <li className="flex gap-2">
              <div className="font-bold text-blue-300">frontend engineer @ ???</div> building the frontend at a stealth startup
            </li>
            <li className="flex gap-2">
              <div className="font-bold">trying</div> to pass school somehow
            </li>
          </ul>
        </div>
        <div className="text-yellow-400 font-bold text-xl">projects</div>
        <div>
          <ul className="ml-3">
            <li className="flex gap-2">
              <a
                href="https://elusidate.app"
                className="font-bold text-yellow-400 umami--click--project cursor-[url('/cursor.svg'),_pointer]"
              >
                elusidate(cancelled)
              </a>{" "}
              - we turn data to reports in 1 click
            </li>
            <li className="flex gap-2">
              <a
                href="https://github.com/SoulNinja-dev/supertable"
                className="font-bold text-yellow-400 umami--click--project cursor-[url('/cursor.svg'),_pointer]"
              >
                supertable
              </a>{" "}
              - airtable on steroids
            </li>
            <li className="flex gap-2">
              <a
                href="https://solo.pybash.xyz"
                className="font-bold text-yellow-400 umami--click--project cursor-[url('/cursor.svg'),_pointer]"
              >
                solo(wip)
              </a>{" "}
              - connecting artists with their die-hard fans
            </li>
            <li className="flex gap-2">
              <a
                href="https://authdeck.xyz"
                className="font-bold text-yellow-400 umami--click--project cursor-[url('/cursor.svg'),_pointer]"
              >
                authdeck
              </a>{" "}
              - verify your identity on chain
            </li>
            <li className="flex gap-2">
              <a
                href="https://rrpm.pybash.xyz"
                className="font-bold text-yellow-400 umami--click--project cursor-[url('/cursor.svg'),_pointer]"
              >
                rrpm
              </a>{" "}
              - dev tool to manage repos and projects better
            </li>
            <li className="flex gap-2">
              <a
                href="https://learnist.vercel.app"
                className="font-bold text-yellow-400 umami--click--project cursor-[url('/cursor.svg'),_pointer]"
              >
                learnist
              </a>{" "}
              - web app to manage your studies
            </li>
            <li className="flex gap-2">
              <a
                href="https://cesta.wiki"
                className="font-bold text-yellow-400 umami--click--project cursor-[url('/cursor.svg'),_pointer]"
              >
                cesta
              </a>{" "}
              - find resources and roadmaps to learn anything
            </li>
          </ul>
        </div>
        <div className="text-red-400 font-bold text-xl">prev</div>
        <div>
          <ul className="ml-3">
            <li className="md:flex gap-2">
              <div className="font-bold">frontend engineer @ authdeck</div> -
              helped develop the frontend
            </li>
          </ul>
        </div>
        <div className="text-blue-400 font-bold text-xl">writing</div>
        <div>
          <ul className="ml-3">
            <li className="md:flex gap-2">
              <a
                href="https://pybash.substack.com/p/designing-ui-for-the-first-time"
                className="font-bold text-blue-400 umami--click--writing cursor-[url('/cursor.svg'),_pointer]"
              >
                designing ui for the first time
              </a>{" "}
              on substack
            </li>
            <li className="md:flex gap-2">
              <a
                href="https://pybash.substack.com/p/6-week-dev-speedrun"
                className="font-bold text-blue-400 umami--click--writing cursor-[url('/cursor.svg'),_pointer]"
              >
                6-week dev speedrun
              </a>{" "}
              on substack
            </li>
            <li className="md:flex gap-2">
              <a
                href="https://pybash.substack.com/p/documentation-is-a-love-letter-to"
                className="font-bold text-blue-400 umami--click--writing cursor-[url('/cursor.svg'),_pointer]"
              >
                documentation is a love letter to your future self
              </a>{" "}
              on substack
            </li>
            <li className="md:flex gap-2">
              <a
                href="https://pybash.substack.com/p/hacktoberfest-and-a-large-codebase"
                className="font-bold text-blue-400 umami--click--writing cursor-[url('/cursor.svg'),_pointer]"
              >
                hacktoberfest and a large codebase
              </a>{" "}
              on substack
            </li>
            <div>
              sub{" "}
              <a
                href="https://pybash.substack.com"
                className="mx-1 bg-gray-300 bg-opacity-40 px-1.5 py-0.5 rounded-md cursor-[url('/cursor.svg'),_pointer] hover:bg-opacity-60 hover:text-black duration-300 transition ease-in-out"
              >
                here
              </a>{" "}
              for more
            </div>
          </ul>
        </div>
        <div className="md:flex items-center justify-center">
          wanna chat? drop a dm{" "}
          <a
            href="https://twitter.com/py_bash1"
            className="mx-1 bg-gray-300 bg-opacity-40 px-1.5 py-0.5 rounded-md hover:bg-opacity-60 hover:text-black cursor-[url('/cursor.svg'),_pointer] duration-300 transition ease-in-out umami--click--twitter-dm"
          >
            here
          </a>{" "}
          or message me on{" "}
          <a
            href="https://discord.com/users/626461325744275464"
            className="ml-1 bg-gray-300 bg-opacity-40 px-1.5 py-0.5 rounded-md hover:bg-opacity-60 hover:text-black duration-300 transition ease-in-out cursor-[url('/cursor.svg'),_pointer] umami--click--discord"
          >
            discord
          </a>
          , im{" "}
          <span
            className={
              "mx-1 " +
              (lanyard?.data?.discord_status === "online"
                ? "text-green-400"
                : lanyard?.data?.discord_status === "idle"
                ? "text-yellow-400"
                : lanyard?.data?.discord_status === "dnd"
                ? "text-red-400"
                : "")
            }
          >
            {lanyard?.data?.discord_status}
          </span>{" "}
          rn.
        </div>
      </div>
    </div>
  );
}

export default App;
