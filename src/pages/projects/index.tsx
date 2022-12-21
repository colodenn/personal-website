import { Hero } from "@/components/hero/hero";
import { type NextPage } from "next";
import { Layout } from "../../components/layout/layout";
import Image from "next/image";
import clsx from "clsx";
const Projects: NextPage = () => {
  return (
    <>
      <Layout page="projects">
        <Hero>
          <div className="mb-16">
            <h1 className="mb-8 text-5xl font-bold text-[#111111]">Projects</h1>
            <p className=" text-[#6c6c6c]">
              From one page sites to the worlds first mobile sitebuilder, I’ve
              spent years designing and building products of varying sizes.
              Here’s a small selection of some of my recent projects and
              experiences.
            </p>
          </div>
          <hr className="divider mb-20" />
          <Project
            color="#CDE1E3"
            path="/caterpillar.png"
            heading="Caterpillar - Process Eventlog data"
            text="  Caterpillar is a web plattform to perform various process mining
              actions on your eventlog data."
          />
          <div className="mt-24"></div>

          <Project
            color="#CDE1E3"
            path="/caterpillar.png"
            heading="Caterpillar - Process Eventlog data"
            text="  Caterpillar is a web plattform to perform various process mining
              actions on your eventlog data."
          />
          <div className="mt-24"></div>
          <Project
            color="#CDE1E3"
            path="/caterpillar.png"
            heading="Caterpillar - Process Eventlog data"
            text="  Caterpillar is a web plattform to perform various process mining
              actions on your eventlog data."
          />
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
}) => {
  const color = `bg-[${props.color}]`;
  return (
    <div>
      <div
        className={clsx(
          "project-shadow overflow-hidden rounded-xl px-8 pt-8 ",
          color
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
      <div className="mx-auto mt-14 w-2/3 ">
        <div className="flex justify-center">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-[#111111] ">
              {props.heading}
            </h2>
            <p className="text-sm leading-7 text-[#363636]">{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
