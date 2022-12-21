import { type NextPage } from "next";
import { calcAge } from "@/utils/helper";
import { Layout } from "@/components/layout/layout";
import { Hero } from "@/components/hero/hero";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="">
      <Layout page="home">
        <Hero>
          <div className="mb-24">
            <h1 className="mb-10 text-5xl font-semibold leading-snug tracking-wide text-[#111111] dark:text-[#ececec]">
              Software engineer and student creating thoughtful, intuitive
              interfaces.
            </h1>
            <div className="mb-20 h-[450px] w-full overflow-hidden rounded-xl object-contain">
              <Image
                alt="TODO"
                className=" -translate-y-32 transform"
                height={300}
                width={1000}
                src={"/corno_face.jpg"}
              />
            </div>
            <p className="mb-8 text-lg leading-9 text-[#363636]">
              I'm Cornelius, a {calcAge("03-01-2000")} years old Code enthusiast
              from Germany. I am currently pursuing a Master of Science degree
              in Business Informatics at{" "}
              <Link
                href={"#TODO"}
                className="border-b-[3px] border-[#d9d9d9]  hover:border-[#8153e2] hover:border-opacity-40 hover:text-purple-500"
              >
                Saarland University
              </Link>{" "}
              and working part-time at{" "}
              <Link
                href={"#TODO"}
                className="border-b-[3px] border-[#d9d9d9]  hover:border-[#8153e2] hover:border-opacity-40 hover:text-purple-500"
              >
                German Research Center for Artificial
              </Link>{" "}
              Intelligence.
            </p>
            <p className="mb-8 text-lg leading-9 text-[#363636]">
              I’m Dale-Anthony, a UK based product designer with over ten years
              of experience. I specialise in interface design for mobile and
              web-based applications with a focus on simplicity & usability. I’m
              currently working at WP Engine where I design some of the worlds
              best WordPress products including Advanced Custom Fields, WP
              Migrate and WP Offload Media.
            </p>
            <p className="mb-8 text-lg leading-9 text-[#363636]">
              Before WP Engine, I worked at BaseKit where I helped shape the
              future of website builders and tools to help small businesses
              thrive online. In my spare time also build tools like Design Vault
              and Does.Design.
            </p>
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
              <SimpleCard />
              <div className="mt-6"></div>
              <SimpleCard />
            </div>
          </div>
        </Hero>
      </Layout>
    </div>
  );
};

export default Home;

export const SimpleCard = () => {
  return (
    <Link href="#">
      <div className="w-full rounded-lg border-[1px] border-gray-200 bg-[#F7F7F7] p-8 hover:border-[#d9d9d9]">
        <div className="flex justify-between space-x-8">
          <div className="relative w-72">
            <Image
              className="absolute z-50 rounded-lg  "
              src={"/beerpong_logo.jpg"}
              alt="TODO"
              width={250}
              height={250}
            />
            <div className="absolute top-0 z-20">
              <Image
                className="rounded-lg opacity-50 blur-md"
                src={"/beerpong_logo.jpg"}
                alt="TODO"
                width={250}
                height={250}
              />
            </div>
          </div>
          <div>
            <h5 className="mb-4 text-lg font-bold text-[#242424]">
              Beerpong Dashboard
            </h5>
            <p className="text-[#6c6c6c]">
              Track your beerpongs stats and compare them with your friends.
              Beer pong, also known as Beirut, is a drinking game in which
              players throw a ping pong ball across a table with the intent of
              landing the ball in a cup of beer on the other end.
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
