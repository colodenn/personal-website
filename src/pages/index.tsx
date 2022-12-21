import { type NextPage } from "next";
import { calcAge } from "@/utils/helper";
import { Layout } from "@/components/layout/layout";
import { Hero } from "@/components/hero/hero";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import Zoomed from "@/components/zoomed/zoomed";

const Home: NextPage = () => {
  return (
    <div className="light">
      <Layout page="home">
        <Hero>
          <div className="mb-24">
            <h1 className="mb-4 text-2xl font-semibold leading-snug tracking-wide text-[#111111] dark:text-[#ececec] lg:mb-10 lg:text-5xl">
              Software engineer and student creating thoughtful, intuitive
              interfaces.
            </h1>
            <div className="mb-8 h-full overflow-hidden  rounded-xl object-contain md:h-[450px] md:w-full lg:mb-12">
              <Image
                alt="Cornelius Denninger"
                className=" transform lg:-translate-y-32"
                height={300}
                width={1000}
                src={"/corno_face.jpg"}
              />
            </div>
            <p className="mb-8 text-lg leading-9 text-[#363636]">
              I&apos;m Cornelius, a {calcAge("03-01-2000")} years old Code
              enthusiast from Germany. I am currently pursuing a Master of
              Science degree in Business Informatics at{" "}
              <Link
                href={"https://www.uni-saarland.de/start.html"}
                className="border-b-[3px] border-[#d9d9d9]  hover:border-[1] hover:border-opacity-40 hover:text-purple-500"
              >
                Saarland University
              </Link>{" "}
              and working part-time at{" "}
              <Link
                href={"https://www.dfki.de/web"}
                className="border-b-[3px] border-[#d9d9d9]  hover:border-[#8153e2] hover:border-opacity-40 hover:text-purple-500"
              >
                German Research Center for Artificial Intelligence
              </Link>
              .
            </p>
            <div className="mt-12 flex items-center space-x-8">
              <Link href="https://github.com/colodenn">
                <Zoomed>
                  <BsGithub size={24} color={"#363636"} />
                </Zoomed>
              </Link>
              <Link href="https://www.linkedin.com/in/cornelius-denninger-98454b169/">
                <Zoomed>
                  <BsLinkedin size={24} color={"#363636"} />
                </Zoomed>
              </Link>
              <Link href="https://twitter.com/colodenn">
                <Zoomed>
                  <BsTwitter size={24} color={"#363636"} />
                </Zoomed>
              </Link>
              <Zoomed>
                <Link
                  href={"mailto:cornelius.denninger@gmail.com"}
                  className="rounded-full border-[1px] border-gray-300 bg-[#e6e5e5] py-2 px-4 text-sm font-bold"
                >
                  Email me
                </Link>
              </Zoomed>
            </div>
          </div>
          <hr className="divider" />
          <div className="mt-24 mb-24">
            <div>
              <h3 className="mb-8 text-2xl font-bold text-[#111111]">Work</h3>
              <div className="mb-6 w-full">
                <div className="items-center justify-between lg:flex">
                  <div>
                    <h3 className="cursor-pointer font-semibold hover:text-[#8153e2]">
                      Freelancer
                    </h3>
                  </div>
                  <div>
                    <p className="text-light flex justify-between text-[#6c6c6c]">
                      <span className=" md:mr-8">Software Engineer</span> 2022 -
                      Today
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-full">
                <div className="items-center justify-between lg:flex">
                  <div>
                    <h3 className="cursor-pointer font-semibold hover:text-[#8153e2]">
                      German Research Center for Artificial Intelligence
                    </h3>
                  </div>
                  <div>
                    <p className="text-light flex justify-between text-[#6c6c6c]">
                      <span className=" md:mr-8">Research Assistant</span> 2019
                      - Today
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="divider" />
          <div className="mt-24">
            <h3 className="mb-2 text-2xl font-bold text-[#111111]">
              Featured projects
            </h3>
            <p className="text-[#6c6c6c]">
              A collection of some side projects that have shipped recently.
            </p>

            <div className="mt-12 w-full">
              <SimpleCard
                path="/beerpong_logo.jpg"
                text="Track your beerpongs stats and compare them with your friends. Beer pong, also known as Beirut, is a drinking game in which players throw a ping pong ball across a table with the intent of landing the ball in a cup of beer on the other end."
                heading="Beerpong Dashboard"
              />
              <div className="mt-6"></div>
              <SimpleCard
                path="/ertappen.png"
                heading="Ertappen."
                text="We provide your images with a unique watermark that is invisible to the naked eye. Want to track down the counterfeiter of your images?"
              />
            </div>
          </div>
        </Hero>
      </Layout>
    </div>
  );
};

export default Home;

export const SimpleCard = (props: {
  path: string;
  heading: string;
  text: string;
}) => {
  return (
    <Link href="#">
      <div className="w-full rounded-lg border-[1px] border-gray-200 bg-[#F7F7F7] p-4 hover:border-[#d9d9d9] lg:p-8">
        <div className="lg:flex  lg:space-x-8">
          <div className="relative mb-6 h-24 w-24  shrink-0 object-contain lg:mb-0 lg:block lg:h-24 ">
            <Image
              className="absolute z-50  rounded-lg "
              src={props.path}
              alt={props.heading}
              width={96}
              height={96}
            />
            <div className="absolute top-0 z-20">
              <Image
                className="rounded-lg opacity-50 blur-md"
                src={props.path}
                alt="TODO"
                width={96}
                height={96}
              />
            </div>
          </div>
          <div>
            <h5 className="mb-4 text-lg font-bold text-[#242424]">
              {props.heading}
            </h5>
            <p className="text-[#6c6c6c]">{props.text}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
