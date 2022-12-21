import { Hero } from "@/components/hero/hero";
import { type NextPage } from "next";
import { Layout } from "../../components/layout/layout";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

const Projects: NextPage = () => {
  return (
    <>
      <Layout page="projects">
        <Hero>
          <div className="mb-16">
            <h1 className="mb-8 text-5xl font-bold text-[#111111]">Projects</h1>
            <p className=" text-[#6c6c6c]">
              From one page sites to the worlds first mobile sitebuilder,
              I&apos;ve spent years designing and building products of varying
              sizes. Here&apos;s a small selection of some of my recent projects
              and experiences.
            </p>
          </div>
          <hr className="divider mb-20" />
          <Project
            color="bg-[#DEDBED]"
            emoji="🍻"
            path="/projects/beerpong.gif"
            heading="Beerpong dashboard"
            text="Track your beerpongs stats and compare them with your friends. Beer pong, also known as Beirut, is a drinking game in which players throw a ping pong ball across a table with the intent of landing the ball in a cup of beer on the other end."
            link="https://beerpong.codenn.de/"
          />
          <div className="mt-24"></div>
          <Project
            color="bg-[#CDE1E3]"
            emoji="🐛"
            path="/projects/caterpillar.png"
            heading="Caterpillar - Process Eventlog data"
            text="Caterpillar is a web plattform to perform various process mining
              actions on your eventlog data."
            link="#"
          />

          <div className="mt-24"></div>
          <Project
            link="https://www.ertappen.com/"
            emoji="🕵️"
            color="bg-[#FCF0E5]"
            path="/projects/ertappen.webp"
            heading="Ertappen"
            text="We provide your images with a unique watermark that is invisible to the naked eye. Want to track down the counterfeiter of your images? Mark them with our tool and find out who is distributing them."
          />
          <div className="mt-24"></div>
          <Project
            link="#"
            emoji="🚢"
            color="bg-[#CBD4E0]"
            path="/projects/discord.png"
            heading="Discord Link sender"
            text="The Discord Link Sender extension is a helpful addon that lets you send urls from your current browser tab to you preferred discord server without leaving your browser."
          />
          <div className="mt-24"></div>
          <Project
            link="https://www.npmjs.com/package/@taschendieb/autodeploy"
            emoji="🚀"
            color="bg-[#DEDBED]"
            path="/projects/rocket.gif"
            heading="Autodeploy"
            text="Autodeploy is a small and highly customizable CLI-Tool to automatically deploy your git repo and execute arbitrary commands/scripts after a specific git action (e.g. push, merge, ...)"
          />
          <hr className="divider mt-24 mb-24" />
          <div className="w-full">
            <h1 className="mb-8 text-5xl font-bold text-[#111111]">
              More projects to get blazed
            </h1>
            <p className=" text-[#6c6c6c]">
              Take a glimpse of my portfolio to get inspired for your next idea.
              You'll find more coding projects on GitHub.
            </p>
            <Link className="mt-8" href={"https://github.com/colodenn"}>
              <div className="mt-8 flex items-center">
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#9333EA"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
                <div className="cursor-pointer text-lg font-bold hover:text-purple-600">
                  GitHub Profile
                </div>
              </div>
            </Link>
          </div>
        </Hero>
      </Layout>
    </>
  );
};

export default Projects;

const Project = (props: {
  path: string;
  heading: string;
  text: string;
  color: string;
  emoji: string;
  link: string;
}) => {
  return (
    <Link href={props.link}>
      <div
        className={clsx(
          "project-shadow overflow-hidden rounded-xl px-4  pt-4 lg:px-8 lg:pt-8 ",
          props.color
        )}
      >
        <Image
          alt="todo"
          height={500}
          width={1000}
          className="rounded-t-xl "
          src={props.path}
        />
      </div>
      <div className="mx-auto mt-14 px-2 lg:w-2/3 ">
        <div className="flex justify-center">
          <div>
            <div className="mb-6 flex items-center">
              <div
                role="img"
                aria-label="sheep"
                className="my-auto mr-2  text-2xl"
              >
                {props.emoji}
              </div>
              <h2 className=" align-text-bottom text-2xl font-bold text-[#111111] ">
                {props.heading}
              </h2>
            </div>
            <p className="text-sm leading-7 text-[#363636]">{props.text}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
