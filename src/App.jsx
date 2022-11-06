import { useState } from "react";
import { useEffect } from "react";
import ReactLogo from "./components/ReactLogo";

function App() {
  const [scroll, setScroll] = useState(0);
  const [active, setActive] = useState(true);
  const [lanyard, setLanyard] = useState({});
  const [spotify, setSpotify] = useState(undefined);
  const [vsc, setVsc] = useState(undefined);
  const [rn, setRn] = useState(undefined);

  useEffect(() => {});

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        setScroll(window.scrollY);
      },
      { passive: true }
    );

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

    // const trailer = document.getElementById("trailer");

    // window.addEventListener("mousemove", (e) => {
    //   const x = e.clientX - trailer.offsetWidth / 2,
    //     y = e.clientY - trailer.offsetHeight / 2;

    //   const interactable = e.target.closest("a");
    //   const interacting = interactable !== null;

    //   trailer.style.transform = `translate(${x}px, ${y}px) scale(${
    //     interacting ? 2 : 1
    //   })`;
    // });

    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
      // window.removeEventListener("mousemove", (e) => {
      //   const x = e.clientX - trailer.offsetWidth / 2,
      //     y = e.clientY - trailer.offsetHeight / 2;

      //   const interactable = e.target.closest("a");
      //   const interacting = interactable !== null;

      //   trailer.style.transform = `translate(${x}px, ${y}px) scale(${
      //     interacting ? 2 : 1
      //   })`;
      // });
    };
  }, []);

  return (
    <div
      className="min-h-screen font-poppins bg-[#1a191d] text-white group/body"
      id="home"
    >
      {/* <div
        id="trailer"
        className="bg-[#66d9ed] rounded-full p-3 fixed z-[999] pointer-events-none opacity-0 transition ease-in-out group/body-hover:opacity-100"
      ></div> */}
      <nav className="fixed bg-[#000] bg-opacity-50 backdrop-blur-2xl flex top-0 left-0 w-full p-4 flex-row justify-between z-[10]">
        <a
          href="#home"
          className="font-roboto text-[#66d9ed] text-3xl flex font-bold"
        >
          PyBash<div className="text-white">.</div>
          <div className="text-[#c28afb]">_</div>
        </a>
        <div className="font-roboto flex flex-row gap-8 nav">
          <a
            href="#home"
            className="font-medium transition ease-in-out nav-link link"
            style={scroll > 0 ? { color: "#66d9ed" } : {}}
          >
            <div
              className="text-right text-xs font-light text-[#c1c3c6]"
              style={scroll > 0 ? { color: "#53aab9" } : {}}
            >
              01
            </div>
            <div>// home</div>
          </a>
          <a
            href="#expertise"
            className="font-medium transition ease-in-out nav-link"
            style={scroll > 0 ? { color: "#66d9ed" } : {}}
          >
            <div
              className="text-right text-xs font-light text-[#c1c3c6]"
              style={scroll > 0 ? { color: "#53aab9" } : {}}
            >
              02
            </div>
            <div>// expertise</div>
          </a>
          <a
            href="#work"
            className="font-medium transition ease-in-out nav-link"
            style={scroll > 0 ? { color: "#66d9ed" } : {}}
          >
            <div
              className="text-right text-xs font-light text-[#c1c3c6]"
              style={scroll > 0 ? { color: "#53aab9" } : {}}
            >
              03
            </div>
            <div>// work</div>
          </a>
          <a
            href="#experience"
            className="font-medium transition ease-in-out nav-link"
            style={scroll > 0 ? { color: "#66d9ed" } : {}}
          >
            <div
              className="text-right text-xs font-light text-[#c1c3c6]"
              style={scroll > 0 ? { color: "#53aab9" } : {}}
            >
              04
            </div>
            <div>// experience</div>
          </a>
          <a
            href="#contact"
            className="font-medium transition ease-in-out nav-link"
            style={scroll > 0 ? { color: "#66d9ed" } : {}}
          >
            <div
              className="text-right text-xs font-light text-[#c1c3c6]"
              style={scroll > 0 ? { color: "#53aab9" } : {}}
            >
              05
            </div>
            <div>// contact</div>
          </a>
        </div>
        <div></div>
      </nav>
      <div className="pt-24 flex justify-center items-center w-full relative z-[0]">
        <div className="absolute opacity-30 z-[1]">
          <ReactLogo />
        </div>
        <div className="flex flex-col items-center">
          <div className="font-semibold uppercase text-[10rem] pt-28 z-[2]">
            Py Bash
          </div>
          <div className="font-roboto font-semibold uppercase text-2xl z-[2]">
            Full Stack & Command Line Developer
          </div>
          <div className="pt-20">
            <img
              src="/scroll.svg"
              className="animate-[spin_4s_linear_infinite]"
            />
          </div>
        </div>
      </div>
      <div
        className="text-center font-semibold text-6xl pt-32 pb-10"
        id="expertise"
      >
        My Expertise
      </div>
      <div className="grid grid-cols-3 mx-48">
        <div className="border-2 border-[#a3a3a3] p-8">
          <div className="flex flex-row gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 42 42"
            >
              <path
                d="M18,34.111l-1.667,6.667L14.111,43H31.889l-2.222-2.222L28,34.111M3,25.222H43M7.444,34.111H38.556A4.444,4.444,0,0,0,43,29.667V7.444A4.444,4.444,0,0,0,38.556,3H7.444A4.444,4.444,0,0,0,3,7.444V29.667A4.444,4.444,0,0,0,7.444,34.111Z"
                transform="translate(-2 -2)"
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
            <div className="text-3xl font-semibold ">
              <div className="before:block before:absolute before:w-full before:h-2.5 before:bg-[#df058d] before:translate-y-[1.4rem] relative inline-block">
                <div className="relative text-white">Software</div>
              </div>{" "}
              Development
            </div>
          </div>
          <div className="pt-2">
            <div className="font-roboto text-[#5c5c5f] pb-1">{"<h3>"}</div>
            <div className="pl-5 ml-5 border-l-2 border-[#5c5c5f] font-roboto">
              Experienced in both procedural as well as OOP: Python, Java,
              JavaScript, TypeScript.
            </div>
            <div className="font-roboto text-[#5c5c5f] pt-1">{"</h3>"}</div>
          </div>
        </div>
        <div className="border-2 border-[#a3a3a3] p-8">
          <div className="flex flex-row gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="44.964"
              viewBox="0 0 40 44.964"
            >
              <path
                d="M21.087,20.97a4.015,4.015,0,1,0,5.485,1.469A4.015,4.015,0,0,0,21.087,20.97Zm18,4.356q-.4-.452-.834-.906.307-.322.594-.644c3.61-4.056,5.134-8.124,3.722-10.57-1.354-2.345-5.381-3.044-10.422-2.063q-.745.146-1.482.329-.141-.486-.3-.967C28.65,5.351,25.887,2,23.064,2c-2.708,0-5.325,3.141-6.994,8q-.246.719-.456,1.449-.493-.121-.989-.223c-5.319-1.092-9.6-.373-11.013,2.074-1.351,2.347.062,6.182,3.436,10.054q.5.575,1.032,1.124c-.417.429-.812.859-1.18,1.285-3.293,3.817-4.625,7.59-3.276,9.927,1.393,2.413,5.617,3.2,10.758,2.191q.625-.124,1.243-.279.226.79.5,1.567c1.662,4.76,4.264,7.8,6.963,7.8,2.786,0,5.58-3.266,7.272-8.226.134-.392.26-.8.38-1.218q.8.2,1.607.353c4.954.937,8.886.2,10.232-2.138,1.39-2.415-.043-6.466-3.495-10.408ZM5.276,14.257c.867-1.506,4.369-2.094,8.961-1.151q.44.091.9.2a46.005,46.005,0,0,0-.947,6.02,46.956,46.956,0,0,0-4.73,3.807q-.493-.51-.96-1.045h0C5.6,18.773,4.462,15.671,5.276,14.257Zm8.738,12.878c-1.148-.869-2.215-1.76-3.183-2.655.968-.89,2.035-1.777,3.18-2.644q-.062,1.325-.061,2.651t.064,2.648Zm0,8.859a16.269,16.269,0,0,1-5.935.209,3.97,3.97,0,0,1-2.79-1.476c-.818-1.418.251-4.447,3.067-7.712q.531-.614,1.1-1.2a46.066,46.066,0,0,0,4.737,3.822,46.768,46.768,0,0,0,.958,6.1q-.564.141-1.135.254ZM29.977,17.92q-1.131-.713-2.29-1.38-1.141-.656-2.308-1.264c1.333-.561,2.644-1.039,3.909-1.429a40.955,40.955,0,0,1,.69,4.073Zm-12.092-7.3c1.43-4.162,3.547-6.7,5.179-6.7,1.738,0,4,2.739,5.473,7.189q.144.435.272.875a46.038,46.038,0,0,0-5.681,2.183,45.1,45.1,0,0,0-5.663-2.208Q17.659,11.286,17.886,10.622Zm-.9,3.2a41.159,41.159,0,0,1,3.889,1.443q-2.362,1.219-4.6,2.656C16.452,16.488,16.692,15.114,16.986,13.823Zm-.711,17.223q1.117.715,2.267,1.378,1.173.675,2.377,1.294A40.909,40.909,0,0,1,17,35.212C16.7,33.9,16.457,32.505,16.275,31.046ZM28.54,38.117a16.267,16.267,0,0,1-2.783,5.245h0a3.97,3.97,0,0,1-2.672,1.679c-1.637,0-3.727-2.439-5.148-6.509q-.251-.722-.462-1.457a45.207,45.207,0,0,0,5.686-2.27,46.762,46.762,0,0,0,5.727,2.2q-.16.56-.347,1.111Zm.814-2.977c-1.28-.4-2.609-.882-3.962-1.451q1.144-.6,2.3-1.271,1.191-.687,2.32-1.409a40.811,40.811,0,0,1-.663,4.132Zm1-10.662q0,2.048-.128,4.093c-1.108.75-2.277,1.482-3.494,2.184s-2.412,1.342-3.59,1.924q-1.859-.891-3.646-1.92T16.028,28.58q-.155-2.044-.156-4.1h0q0-2.05.153-4.1c1.107-.756,2.268-1.488,3.468-2.181s2.421-1.336,3.63-1.917q1.836.892,3.606,1.912t3.482,2.155q.147,2.056.147,4.118Zm2.151-11.45c4.319-.84,7.576-.275,8.392,1.138.869,1.505-.377,4.83-3.493,8.333h0q-.258.29-.536.582a45.1,45.1,0,0,0-4.82-3.795,45.055,45.055,0,0,0-.912-5.955q.7-.172,1.369-.3Zm-.292,8.733a40.837,40.837,0,0,1,3.285,2.67,40.735,40.735,0,0,1-3.275,2.716q.052-1.335.051-2.672,0-1.358-.062-2.715Zm8.7,13.014c-.817,1.419-3.974,2.011-8.211,1.209q-.728-.137-1.494-.327a45.12,45.12,0,0,0,.871-6.029,44.826,44.826,0,0,0,4.8-3.858q.4.412.755.82h0a16.264,16.264,0,0,1,3.154,5.031,3.969,3.969,0,0,1,.121,3.153Z"
                transform="translate(-3.104 -2)"
                fill="#fff"
              ></path>
            </svg>
            <div className="text-3xl font-semibold ">
              <div className="before:block before:absolute before:w-full before:h-2.5 before:bg-[#66d9ed] before:translate-y-[1.4rem] relative inline-block">
                <div className="relative text-white">Frontend</div>
              </div>{" "}
              Development
            </div>
          </div>
          <div className="pt-2">
            <div className="font-roboto text-[#5c5c5f] pb-1">{"<h3>"}</div>
            <div className="pl-5 ml-5 border-l-2 border-[#5c5c5f] font-roboto">
              Passionate about user interfaces. 1+ years of development
              experience in React, NextJS, and TailwindCSS.
            </div>
            <div className="font-roboto text-[#5c5c5f] pt-1">{"</h3>"}</div>
          </div>
        </div>
        <div className="border-2 border-[#a3a3a3] p-8">
          <div className="flex flex-row gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 512 512"
            >
              <rect
                x="32"
                y="48"
                width="448"
                height="416"
                rx="48"
                ry="48"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinejoin: "round",
                  strokeWidth: "32px",
                }}
              />
              <polyline
                points="96 112 176 176 96 240"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinejoin: "round",
                  strokeWidth: "32px",
                }}
              />
              <line
                x1="192"
                y1="240"
                x2="256"
                y2="240"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeLinejoin: "round",
                  strokeWidth: "32px",
                }}
              />
            </svg>
            <div className="text-3xl font-semibold ">
              <div className="before:block before:absolute before:w-full before:h-2.5 before:bg-[#ff6f00] before:translate-y-[1.4rem] relative inline-block">
                <div className="relative text-white">Command Line</div>
              </div>{" "}
              Development
            </div>
          </div>
          <div className="pt-2">
            <div className="font-roboto text-[#5c5c5f] pb-1">{"<h3>"}</div>
            <div className="pl-5 ml-5 border-l-2 border-[#5c5c5f] font-roboto">
              Experienced in creating modern command line tools and apps using
              Python, Rich, and Typer.
            </div>
            <div className="font-roboto text-[#5c5c5f] pt-1">{"</h3>"}</div>
          </div>
        </div>
      </div>
      <div className="p-48 grid grid-cols-2 gap-8" id="work">
        <div>
          <div className="font-semibold text-8xl">
            My
            <br />
            Work
          </div>
          <div className="pt-8 font-roboto font-semibold text-lg">
            Created a robust command line tool for developers to manage their
            projects efficiently and an universal boilerplate generator.
            <br />
            <br />
            Collaborated and worked on 10+ projects with 10+ people all around
            the world. I am also interested in new web technologies such as
            Astro and Web3.
          </div>
        </div>
        <div>
          <div className="flex flex-col items-end relative bg-[url('https://rrpm.pybash.xyz/terminal.svg')] h-full bg-cover">
            <img
              src="/arrow.webp"
              width="120"
              height="120"
              className="absolute top-[10rem] right-20 -scale-x-[1] hue-rotate-[250deg]"
            />
            <div className="font-semibold font-roboto text-xl text-right pt-72">
              Featured Project
            </div>
            <div className="font-semibold font-roboto text-3xl text-right">
              RRPM
            </div>
            <a
              href="https://rrpm.pybash.xyz"
              className="bg-[#66d9ed] text-black px-3 py-2 rounded-lg mt-2"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <div className="grid grid-cols-3 gap-x-6 gap-y-24 px-48">
          <div className="relative group rounded-xl h-72 overflow-hidden">
            <div className="bg-[url('/learnist.png')] bg-cover bg-center group-hover:opacity-80 group-hover:scale-[1.1] transition ease-in-out h-72 w-full rounded-xl"></div>
            <div className="bg-[#201f23] p-5 w-full absolute bottom-0 rounded-b-xl scale-[1.002]">
              <h2 className="font-semibold text-xl">Learnist</h2>
              <div className="pt-3">
                <h2 className="text-[#c6c6c7] text-sm hover:text-[#66d9ed] transition-all group-hover:opacity-0 group-hover:-translate-y-6 duration-300">
                  Web Development
                </h2>
                <a
                  href="https://learnist.vercel.app"
                  className="text-[#c6c6c7] text-sm hover:text-[#66d9ed] transition-all opacity-0 group-hover:opacity-100 group-hover:-translate-y-6 duration-300 inline-block"
                >
                  Show Project &rarr;
                </a>
              </div>
            </div>
          </div>
          <div className="relative group rounded-xl h-72 overflow-hidden">
            <div className="bg-[url('/cesta.png')] bg-cover bg-center group-hover:opacity-80 group-hover:scale-[1.1] transition ease-in-out h-72 w-full rounded-xl"></div>
            <div className="bg-[#201f23] p-5 w-full absolute bottom-0 rounded-b-xl scale-[1.002]">
              <h2 className="font-semibold text-xl">Cesta</h2>
              <div className="pt-3">
                <h2 className="text-[#c6c6c7] text-sm hover:text-[#66d9ed] transition-all group-hover:opacity-0 group-hover:-translate-y-6 duration-300">
                  Web Development
                </h2>
                <a
                  href="https://cesta.wiki"
                  className="text-[#c6c6c7] text-sm hover:text-[#66d9ed] transition-all opacity-0 group-hover:opacity-100 group-hover:-translate-y-6 duration-300 inline-block"
                >
                  Show Project &rarr;
                </a>
              </div>
            </div>
          </div>
          <div className="relative group rounded-xl h-72 overflow-hidden">
            <div className="bg-[url('/portfolio.png')] bg-cover bg-center group-hover:opacity-80 group-hover:scale-[1.1] transition ease-in-out h-72 w-full rounded-xl"></div>
            <div className="bg-[#201f23] p-5 w-full absolute bottom-0 rounded-b-xl scale-[1.002]">
              <h2 className="font-semibold text-xl">Portfolio</h2>
              <div className="pt-3">
                <h2 className="text-[#c6c6c7] text-sm hover:text-[#66d9ed] transition-all group-hover:opacity-0 group-hover:-translate-y-6 duration-300">
                  Web Development
                </h2>
                <a
                  href="/"
                  className="text-[#c6c6c7] text-sm hover:text-[#66d9ed] transition-all opacity-0 group-hover:opacity-100 group-hover:-translate-y-6 duration-300 inline-block"
                >
                  Show Project &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-6 gap-y-24 px-48">
          <div className="relative group rounded-xl col-span-2 h-[30rem] overflow-hidden">
            <div className="bg-[url('/rrpm.png')] bg-cover bg-center group-hover:opacity-80 group-hover:scale-[1.1] transition ease-in-out h-[30rem] w-full rounded-xl"></div>
            <div className="bg-[#201f23] p-5 w-full absolute bottom-0 rounded-b-xl scale-[1.002]">
              <h2 className="font-semibold text-xl">RRPM</h2>
              <div className="pt-3">
                <h2 className="text-[#c6c6c7] text-sm hover:text-[#66d9ed] transition-all group-hover:opacity-0 group-hover:-translate-y-6 duration-300">
                  Command Line Development
                </h2>
                <a
                  href="https://rrpm.pybash.xyz"
                  className="text-[#c6c6c7] text-sm hover:text-[#66d9ed] transition-all opacity-0 group-hover:opacity-100 group-hover:-translate-y-6 duration-300 inline-block"
                >
                  Show Project &rarr;
                </a>
              </div>
            </div>
          </div>
          <div className="relative group rounded-xl h-[30rem] overflow-hidden">
            <div className="bg-[url('/imagethree.png')] bg-cover bg-center group-hover:opacity-80 group-hover:scale-[1.1] transition ease-in-out h-[30rem] w-full rounded-xl"></div>
            <div className="bg-[#201f23] p-5 w-full absolute bottom-0 rounded-b-xl scale-[1.002]">
              <h2 className="font-semibold text-xl">Image3</h2>
              <div className="pt-3">
                <h2 className="text-[#c6c6c7] text-sm hover:text-[#66d9ed] transition-all group-hover:opacity-0 group-hover:-translate-y-6 duration-300">
                  Web3
                </h2>
                <a
                  href="https://imagethree.vercel.app"
                  className="text-[#c6c6c7] text-sm hover:text-[#66d9ed] transition-all opacity-0 group-hover:opacity-100 group-hover:-translate-y-6 duration-300 inline-block"
                >
                  Show Project &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-6 gap-y-24 px-48">
          <div className="relative group rounded-xl h-[30rem] overflow-hidden">
            <div className="bg-[url('/befit.png')] bg-cover bg-center group-hover:opacity-80 group-hover:scale-[1.1] transition ease-in-out h-[30rem] w-full rounded-xl"></div>
            <div className="bg-[#201f23] p-5 w-full absolute bottom-0 rounded-b-xl scale-[1.002]">
              <h2 className="font-semibold text-xl">BeFit</h2>
              <div className="pt-3">
                <h2 className="text-[#c6c6c7] text-sm hover:text-[#66d9ed] transition-all group-hover:opacity-0 group-hover:-translate-y-6 duration-300">
                  Web Development
                </h2>
                <a
                  href="https://befit-tracker.vercel.app"
                  className="text-[#c6c6c7] text-sm hover:text-[#66d9ed] transition-all opacity-0 group-hover:opacity-100 group-hover:-translate-y-6 duration-300 inline-block"
                >
                  Show Project &rarr;
                </a>
              </div>
            </div>
          </div>
          <div className="relative group rounded-xl col-span-2 h-[30rem] overflow-hidden">
            <div className="bg-[url('/authdeck.png')] bg-cover bg-center group-hover:opacity-80 group-hover:scale-[1.1] transition ease-in-out h-[30rem] w-full rounded-xl"></div>
            <div className="bg-[#201f23] p-5 w-full absolute bottom-0 rounded-b-xl scale-[1.002]">
              <h2 className="font-semibold text-xl">Authdeck</h2>
              <div className="pt-3">
                <h2 className="text-[#c6c6c7] text-sm hover:text-[#66d9ed] transition-all group-hover:opacity-0 group-hover:-translate-y-6 duration-300">
                  Web Development
                </h2>
                <a
                  href="https://authdeck.xyz"
                  className="text-[#c6c6c7] text-sm hover:text-[#66d9ed] transition-all opacity-0 group-hover:opacity-100 group-hover:-translate-y-6 duration-300 inline-block"
                >
                  Show Project &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-6 gap-y-24 px-48">
          <div className="relative group rounded-xl h-72 overflow-hidden">
            <div className="bg-[url('/gitfo.png')] bg-cover bg-center group-hover:opacity-80 group-hover:scale-[1.1] transition ease-in-out h-72 w-full rounded-xl"></div>
            <div className="bg-[#201f23] p-5 w-full absolute bottom-0 rounded-b-xl scale-[1.002]">
              <h2 className="font-semibold text-xl">Gitfo</h2>
              <div className="pt-3">
                <h2 className="text-[#c6c6c7] text-sm hover:text-[#66d9ed] transition-all group-hover:opacity-0 group-hover:-translate-y-6 duration-300">
                  Web Development
                </h2>
                <a
                  href="https://gitfo.vercel.app"
                  className="text-[#c6c6c7] text-sm hover:text-[#66d9ed] transition-all opacity-0 group-hover:opacity-100 group-hover:-translate-y-6 duration-300 inline-block"
                >
                  Show Project &rarr;
                </a>
              </div>
            </div>
          </div>
          <div className="relative group rounded-xl h-72 overflow-hidden">
            <div className="bg-[url('/pastegram.png')] bg-cover bg-center group-hover:opacity-80 group-hover:scale-[1.1] transition ease-in-out h-72 w-full rounded-xl"></div>
            <div className="bg-[#201f23] p-5 w-full absolute bottom-0 rounded-b-xl scale-[1.002]">
              <h2 className="font-semibold text-xl">Pastegram Backend</h2>
              <div className="pt-3">
                <h2 className="text-[#c6c6c7] text-sm hover:text-[#66d9ed] transition-all group-hover:opacity-0 group-hover:-translate-y-6 duration-300">
                  Backend Development
                </h2>
                <a
                  href="https://github.com/pastegram/backend"
                  className="text-[#c6c6c7] text-sm hover:text-[#66d9ed] transition-all opacity-0 group-hover:opacity-100 group-hover:-translate-y-6 duration-300 inline-block"
                >
                  Show Project &rarr;
                </a>
              </div>
            </div>
          </div>
          <div className="relative group rounded-xl h-72 overflow-hidden">
            <div className="bg-[url('/pyeverything.png')] bg-cover bg-center group-hover:opacity-80 group-hover:scale-[1.1] transition ease-in-out h-72 w-full rounded-xl"></div>
            <div className="bg-[#201f23] p-5 w-full absolute bottom-0 rounded-b-xl scale-[1.002]">
              <h2 className="font-semibold text-xl">py-everything</h2>
              <div className="pt-3">
                <h2 className="text-[#c6c6c7] text-sm hover:text-[#66d9ed] transition-all group-hover:opacity-0 group-hover:-translate-y-6 duration-300">
                  Dev Tool
                </h2>
                <a
                  href="https://github.com/pybash1/py_everything"
                  className="text-[#c6c6c7] text-sm hover:text-[#66d9ed] transition-all opacity-0 group-hover:opacity-100 group-hover:-translate-y-6 duration-300 inline-block"
                >
                  Show Project &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-center font-semibold text-6xl pt-32 pb-10"
        id="experience"
      >
        Professional Experience
      </div>
      <div className="flex flex-col items-center px-96">
        <button
          className="bg-[#66d9ed] flex flex-row justify-between w-full py-4 px-8 rounded-xl"
          onClick={() => setActive(!active)}
        >
          <div className="font-semibold">Frontend Engineer @ Authdeck</div>
          <div className="font-semibold flex flex-row gap-2 items-center">
            2022 - Present
            {active ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-dash"
                viewBox="0 0 16 16"
              >
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            )}
          </div>
        </button>
        {active ? (
          <div className="mt-6 bg-[#66d9ed]/10 p-6 rounded-xl w-full">
            <div className="flex flex-row gap-4 font-roboto items-center text-sm text-[#c5c3cc]">
              <div className="flex flex-row gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#66d9ed"
                  class="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                Remote (Chennai, India)
              </div>
              <div className="flex flex-row gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#66d9ed"
                  class="bi bi-arrow-up-right-square-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                </svg>
                authdeck.xyz
              </div>
            </div>
            <div className="pt-4 flex flex-row gap-4 items-center">
              <div>
                Developing the entire frontend interface and integrating it with
                the backend using NextJS and TailwindCSS.
                <div className="flex flex-row gap-3 pt-3">
                  <div className="bg-[#2c3599] px-4 py-1 rounded-full">
                    JavaScript
                  </div>
                  <div className="bg-[#2c3599] px-4 py-1 rounded-full">
                    React
                  </div>
                  <div className="bg-[#2c3599] px-4 py-1 rounded-full">
                    NextJS
                  </div>
                  <div className="bg-[#2c3599] px-4 py-1 rounded-full">
                    TailwindCSS
                  </div>
                </div>
              </div>
              <div>
                <img src="https://docs.authdeck.xyz/img/logo.png" />
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="grid grid-cols-2 gap-0 mt-10" id="contact">
        <div className="bg-black pl-36 pr-32 py-20">
          <div className="font-semibold text-4xl">
            Available for freelance and remote opportunities
          </div>
          <div className="font-semibold text-xl font-roboto pt-8">
            Have an exciting project you need help with?
            <br />
            <br />
            Shoot me an email or reach out via social media.
          </div>
          <div className="text-3xl font-semibold font-roboto pt-32">
            <div className="before:block before:absolute before:w-full before:h-9 before:bg-[#66d9ed] before:translate-y-[1.6rem] hover:before:translate-y-0 overflow-hidden before:transition before:ease-in-out before:duration-300 relative inline-block">
              <a
                href="mailto:hi@pybash.xyz"
                className="relative text-white px-1"
              >
                hi@pybash.xyz
              </a>
            </div>
          </div>
          <ul className="pt-4 font-roboto font-semibold text-xl">
            <li className="py-1">
              <a
                href="https://twitter.com/py_bash1"
                className="hover:text-[#66d9ed] transition ease-in-out"
              >
                Twitter
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://github.com/pybash1"
                className="hover:text-[#66d9ed] transition ease-in-out"
              >
                GitHub
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://blog.pybash.xyz"
                className="hover:text-[#66d9ed] transition ease-in-out"
              >
                Blog
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://discord.gg/FwsGkZAqcZ"
                className="hover:text-[#66d9ed] transition ease-in-out flex flex-row items-center gap-2"
              >
                Discord
                <div
                  className="h-2 w-2 rounded-full"
                  style={{
                    background:
                      lanyard?.data?.active_on_discord_web ||
                      lanyard?.data?.active_on_discord_mobile ||
                      lanyard?.data?.active_on_discord_desktop
                        ? "#0f0"
                        : "#f00",
                  }}
                ></div>
              </a>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-0">
          <div className="row-span-2 bg-[#66d9ed] p-12 pt-16 text-lg flex flex-col justify-between">
            I do open-source most of my projects, but saying I contribute to
            open-source projects that aren&apos;t mine would be a stretch. So I
            decided to contribute to some projects this month. I chose to
            contribute to some documentation and code. The code was mostly minor
            improvements and security updates while my documentation
            contribution was to Chakra UI...
            <div>
              <div className="font-semibold text-lg"> - PyBash</div>
              <a
                href="https://blog.pybash.xyz"
                className="text-sm hover:text-[#e4e4e4] transition ease-in-out"
              >
                Read more on my blog
              </a>
            </div>
          </div>
          <div className="bg-purple-500">
            {vsc ? (
              <div className="p-12 text-lg flex flex-col justify-between h-full">
                <div className="flex flex-row justify-between">
                  <div></div>
                  <img
                    src={`https://cdn.discordapp.com/app-assets/${vsc?.application_id}/${vsc?.assets?.large_image}.png`}
                    className="h-20 w-20 border-4 rounded-full"
                  />
                </div>
                <div>
                  {vsc?.details[0].toUpperCase() + vsc?.details.substr(1)}
                  <div className="font-semibold">
                    {" "}
                    - {vsc?.state[0].toUpperCase() + vsc?.state.substr(1)}
                  </div>
                  <div className="text-sm font-semibold">
                    {Math.floor(
                      Math.abs(rn - vsc?.timestamps?.start) / 1000 / 3600
                    ) %
                      24 <=
                    0
                      ? (Math.floor(
                          Math.abs(rn - vsc?.timestamps?.start) / 1000 / 60
                        ) %
                          24) +
                        " minutes"
                      : (Math.floor(
                          Math.abs(rn - vsc?.timestamps?.start) / 1000 / 3600
                        ) %
                          24) +
                        " hours"}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-4xl font-semibold px-6 flex items-center justify-center h-full text-center">
                Not making any epic projects
              </div>
            )}
          </div>
          <div className="bg-red-500 flex items-center justify-center">
            <div
              className="flex flex-col bg-cover bg-center animate-[spin_8s_linear_infinite] justify-center items-center gap-2 text-center overflow-hidden w-48 h-48 rounded-full border-4 border-white"
              style={{
                backgroundImage: `url('${spotify?.album_art_url}')`,
                backgroundColor: "#000",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="text-lg font-semibold">
                {spotify?.song || "Not Playing"}
              </div>
              <div className="text-sm text-[#e4e4e4]">
                {spotify?.artist || "any music"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
