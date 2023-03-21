// Phoenix Armand Ani
// 101336759
import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillApi,
  AiFillApple,
  AiFillWindows,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import phoenix from "../public/phoenix.jpeg";
import code from "../public/mobile-application1.png";
import design from "../public/HTML.png";
import consulting from "../public/adobe.jpeg";
import Image from "next/image";
import web1 from "../public/GCFTorontoWeb.png";
import web2 from "../public/beyondthebend.png";
import web3 from "../public/employee.png";
import web4 from "../public/chat_app.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Phoenix Armand Ani</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-futura text-xl">Welcome, Friend</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://github.com/RiKiMata3010"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Phoenix Armand Adelan Ani
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Web Developer | Mobile Developer | Graphic Designer
            </h3>
            {/* <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            "Programming isn't about what you know; it's about what you can figure out.” - Chris Pine
            </p> */}
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillApi />
              <AiFillWindows />
              <AiFillApple />
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={phoenix} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I am a Computer Programming and Analysis student at George Brown
              College. I have completed huge number of projects all throughout
              my college.
              <span className="text-teal-500"> Web development</span>,{" "}
              <span className="text-teal-500"> Mobile development</span>, and{" "}
              <span className="text-teal-500"> Graphic Design </span>
              are my strongest suits with a mix off other programming languages
              such as <span className="text-teal-500">Java</span>,{" "}
              <span className="text-teal-500">Python</span>, and lastly{" "}
              <span className="text-teal-500">C#</span>.
            </p>

            <h1>
              Click to Download{" "}
              <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="https://github.com/RiKiMata3010/Resume-Cover-Letter/blob/main/Phoenix_Armand_Ani_Resume_for_Web_Development.docx?raw=true"
              >
                Resume
              </a>
              <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="https://github.com/RiKiMata3010/Resume-Cover-Letter/blob/main/Phoenix_Armand_Ani_Cover_Letter_-_Copy.docx?raw=true"
              >
                Cover Letter
              </a>
            </h1>

            <br />
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Here are a list of tools that I use per skills.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h2 className="text-lg font-medium pt-8 pb-2  ">
                Web Development
              </h2>
              {/* <p className="py-2">
              </p> */}
              <h4 className="py-4 text-teal-600">Tools I Use</h4>
              <p className="text-gray-800 py-1"> - HTML/CSS/JavaScript</p>
              <p className="text-gray-800 py-1"> - React</p>
              <p className="text-gray-800 py-1"> - Next.Js</p>
              <p className="text-gray-800 py-1"> - TailwindCSS</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Mobile Development
              </h3>
              {/* <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p> */}
              <h4 className="py-4 text-teal-600">Tools I Use</h4>
              <p className="text-gray-800 py-1"> - Android Studio</p>
              <p className="text-gray-800 py-1"> - React Native</p>
              <p className="text-gray-800 py-1"> - SwiftUI/StoryBoard</p>
              <p className="text-gray-800 py-1"> - Flutter</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Graphic Design</h3>
              {/* <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p> */}
              <h4 className="py-4 text-teal-600">Tools I Use</h4>
              <p className="text-gray-800 py-1"> - Adobe Photoshop</p>
              <p className="text-gray-800 py-1"> - Adobe AfterEffects</p>
              <p className="text-gray-800 py-1"> - Adobe Illustrator</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              All of my projects are located in my GitHub. My projects ranges
              from my 1st year up to 3rd year in college. The images below are
              my projects that I really loved working on.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              To see more of my projects, click this{" "}
              <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="https://github.com/RiKiMata3010"
              >
                BUTTON
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
            <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="https://phoenixarmandani.wixsite.com/gcft"
              >
                View
              </a>
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
                
              />
            </div>
            <div className="basis-1/3 flex-1">
            <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="https://github.com/RiKiMata3010"
              >
                View
              </a>
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
            <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="https://github.com/RiKiMata3010"
              >
                View
              </a>
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
            <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="https://github.com/RiKiMata3010"
              >
                View
              </a>
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
            <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="https://github.com/RiKiMata3010"
              >
                View
              </a>
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={""}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
