function App() {
  return (
    <div className="min-h-screen font-inter p-32 bg-gradient-to-r from-blue-500 to-cyan-300 flex items-center justify-center">
      <div className="bg-white px-44 pt-20 pb-10 rounded-3xl bg-opacity-25 shadow-2xl drop-shadow-2xl backdrop-blur-3xl scroll-smooth">
        <div className="grid grid-cols-5 gap-20">
          <div className="col-span-1 border-r border-gray-300 pr-12 border-opacity-40">
            <ul>
              <li className="font-normal text-xl hover:text-white transition-all ease-in-out duration-1000 py-5">
                <a href="#projects" className="scroll-smooth">Projects</a>
              </li>
              <li className="font-normal text-xl hover:text-white transition-all ease-in-out duration-1000 py-5">
                <a href="#now" className="scroll-smooth">Now</a>
              </li>
              <li className="font-normal text-xl hover:text-white transition-all ease-in-out duration-1000 py-5">
                <a href="#contact" className="scroll-smooth">Contact</a>
              </li>
              <li className="font-normal text-xl hover:text-white transition-all ease-in-out duration-1000 py-5">
                <a href="https://pybash.substack.com" className="scroll-smooth">Newsletter</a>
              </li>
            </ul>
          </div>
          <div className="col-span-4">
            <h1 className="font-extrabold text-8xl drop-shadow-2xl">py bash</h1>
            <br />
            <h2 className="font-normal text-4xl drop-shadow-2xl">
              backend developer
            </h2>
            <br />
            <div className="bg-black opacity-4 h-px w-2/3"></div>
            <br />
            <h2 className="font-normal text-3xl drop-shadow-2xl">
              A passionate backend developer, interested in Web3.
            </h2>
            <br />
            <h2 className="font-normal text-3xl drop-shadow-2xl">
              Learning more about frontend development by building projects.
            </h2>
            <br />
            <br />
            <br />
            <h3 id="projects" className="font-normal text-6xl drop-shadow-2xl">
              projects
            </h3>
            <br />
            <br />
            <br />
            <h3 className="font-extrabold text-6xl drop-shadow-2xl">befit</h3>
            <br />
            <h2 className="font-normal text-3xl drop-shadow-2xl">
              BeFit is a fitness tracker for the modern era. From nudging you to
              get fit to loggin your activities, and analysing them. BeFit does
              it all.
            </h2>
            <br />
            <button
              onClick={() =>
                (window.location.href = "https://befit-tracker.vercel.app")
              }
              className="bg-white rounded-full p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=""
                width="26"
                height="26"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"></path>
                <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"></path>
                <line x1="16" y1="21" x2="16" y2="19"></line>
                <line x1="19" y1="16" x2="21" y2="16"></line>
                <line x1="3" y1="8" x2="5" y2="8"></line>
                <line x1="8" y1="3" x2="8" y2="5"></line>
              </svg>
            </button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3 className="font-extrabold text-6xl drop-shadow-2xl">image3</h3>
            <br />
            <h2 className="font-normal text-3xl drop-shadow-2xl">
              A simple website built as part of the buildspace solidity track to
              learn more about Solidity. A Web3 based Imgur like website.
            </h2>
            <br />
            <button
              onClick={() =>
                (window.location.href = "https://imagethree.vercel.app")
              }
              className="bg-white rounded-full p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=""
                width="26"
                height="26"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"></path>
                <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"></path>
                <line x1="16" y1="21" x2="16" y2="19"></line>
                <line x1="19" y1="16" x2="21" y2="16"></line>
                <line x1="3" y1="8" x2="5" y2="8"></line>
                <line x1="8" y1="3" x2="8" y2="5"></line>
              </svg>
            </button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3 className="font-extrabold text-6xl drop-shadow-2xl">rrpm</h3>
            <br />
            <h2 className="font-normal text-3xl drop-shadow-2xl">
              A simple, fast, powerful command line tool to supercharge your git
              activities. Made from the ground up to be extensible. Comes with 6
              built-in project presets.
            </h2>
            <br />
            <button
              onClick={() =>
                (window.location.href = "https://github.com/rrpm-org/rrpm")
              }
              className="bg-white rounded-full p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=""
                width="26"
                height="26"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"></path>
                <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"></path>
                <line x1="16" y1="21" x2="16" y2="19"></line>
                <line x1="19" y1="16" x2="21" y2="16"></line>
                <line x1="3" y1="8" x2="5" y2="8"></line>
                <line x1="8" y1="3" x2="8" y2="5"></line>
              </svg>
            </button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3 className="font-extrabold text-6xl drop-shadow-2xl">
              learnist
            </h3>
            <br />
            <h2 className="font-normal text-3xl drop-shadow-2xl">
              An all-in-one platform to manage your studies, homewworks, classes
              and much more! Made for teachers as well as students to ace their
              studies. Pomodoro timers, and more coming soon!
            </h2>
            <br />
            <button
              onClick={() =>
                (window.location.href = "https://learnist.vercel.app")
              }
              className="bg-white rounded-full p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=""
                width="26"
                height="26"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"></path>
                <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"></path>
                <line x1="16" y1="21" x2="16" y2="19"></line>
                <line x1="19" y1="16" x2="21" y2="16"></line>
                <line x1="3" y1="8" x2="5" y2="8"></line>
                <line x1="8" y1="3" x2="8" y2="5"></line>
              </svg>
            </button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3 id="now" className="font-extrabold text-6xl drop-shadow-2xl">
              now
            </h3>
            <br />
            <h3 className="font-extrabold text-6xl drop-shadow-2xl">
              i am working on authdeck and learnist.
            </h3>
            <br />
            <h2 className="font-normal text-3xl drop-shadow-2xl">
              right now I am focused on learnist and also shipping{" "}
              <a
                href="https://authdeck.xyz"
                className="font-normal hover:text-white transition-all ease-in-out duration-1000"
              >
                @authdeck
              </a>
              .
            </h2>
            <br />
            <br />
            <h2 className="font-normal text-3xl drop-shadow-2xl">
              Although, I am going to start working on another side project
              soon. And I plan to being consistent with my blog too.
            </h2>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3
              id="contact"
              className="font-extrabold text-6xl drop-shadow-2xl"
            >
              contact
            </h3>
            <br />
            <h3 className="font-extrabold text-4xl drop-shadow-2xl">
              you can reach out anytime, though I may be a bit slow to respond.
            </h3>
            <br />
            <h2 className="font-normal text-3xl drop-shadow-2xl">
              you can contact me easily on twitter and on discord
            </h2>
            <br />
            <br />
            <a
              href="https://twitter.com/py_bash1"
              className="font-normal text-5xl drop-shadow-2xl hover:text-white transition-all ease-in-out duration-1000"
            >
              twitter
            </a>
            <br />
            <br />
            <a
              href="https://discord.com/users/626461325744275464"
              className="font-normal text-5xl drop-shadow-2xl hover:text-white transition-all ease-in-out duration-1000"
            >
              discord
            </a>
          </div>
        </div>
        <div className="border-t-2 border-gray-300 border-opacity-40 w-full mt-10 p-12">
          <div className="flex justify-between">
            <div className="font-normal text-xl ">
              Copyright &copy; 2022 PyBash. All Rights Reserved.
            </div>
            <div>
              <button
                onClick={() =>
                  (window.location.href = "https://twitter.com/py_bash1")
                }
                className="mx-1 w-6 h-6"
              >
                <svg
                  className=""
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </button>
              <button
                onClick={() =>
                  (window.location.href = "https://github.com/pybash1")
                }
                className="mx-1 w-6 h-6"
              >
                <svg
                  class="rnb ckb"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
