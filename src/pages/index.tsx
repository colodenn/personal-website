import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FC, useState } from "react";
import { clsx } from "clsx";
import { QuoteIcon } from "@radix-ui/react-icons";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cornelius Denninger - Homepage</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-screen overflow-hidden bg-[#ebebeb]  py-12">
        <div className="px-12">
          <Header />
        </div>
        <div className="my-24">
          <h1 className="text-center font-roxborough text-[10vw] tracking-tight">
            Cornelius Denninger
          </h1>
          <p className="text-center text-5xl font-light">
            Software engineer and student creating thoughtful, intuitive
            interfaces.
          </p>
        </div>
        <Menu />
        <div className="absolute  bottom-6 flex w-full items-center justify-around ">
          <div className="text-md items-cennter flex w-96 flex-col justify-center text-center font-medium ">
            <QuoteIcon className="mx-auto mb-4 h-8 w-8" />
            <p className=" tracking-tight">
              HUY PHAN (HE/HIM) AKA HUYML IS AN INDEPENDENT DESIGNER FROM HO CHI
              MINH CITY, VIETNAM
            </p>
          </div>
          <div className="my-24 flex justify-center">
            <Image src={"/person.png"} alt="Person" height={200} width={200} />
          </div>
          <div className="text-md flex w-96 flex-col justify-center text-center font-medium">
            <QuoteIcon className="mx-auto mb-4 h-8 w-8" />
            <p className="font-medium tracking-tight">
              HUY PHAN (HE/HIM) AKA HUYML IS AN INDEPENDENT DESIGNER FROM HO CHI
              MINH CITY, VIETNAM
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export const Header = () => {
  return (
    <>
      <div className="flex justify-between px-0">
        <div className="flex w-full justify-start">
          <div className="flex  items-center justify-between space-x-4">
            <div className="h-max overflow-hidden">
              <Image src={"/logo.svg"} width={30} height={30} alt="logo" />
            </div>
            <div className="flex  flex-col font-inter text-sm font-medium leading-tight">
              <span className="">Open for any</span>

              <span className="">collaborations and offers</span>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <h1 className="font-inter text-3xl font-bold tracking-tight text-[#2C2C2C]">
            <Link className=" " href={"#"}>
              CODENN.
            </Link>
          </h1>
        </div>
        <div className="flex w-full justify-end">
          <div className="flex flex-col text-start font-inter text-sm font-medium">
            <span>Portfolio</span>
            <span className="flex justify-start">Vol.1</span>
          </div>
        </div>
      </div>
    </>
  );
};

export const FirstLetterChanged = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <AnimatePresence>
      <div className={clsx(className, "flex")}>
        <span className="font-roxborough">{text[0]}</span>
        <span className="flex font-inter">{text.slice(1 - text.length)}</span>
      </div>
    </AnimatePresence>
  );
};

export const Menu = () => {
  const [visible, setVisible] = useState(false);
  const [hoveredText, setHoveredText] = useState("Work");
  return (
    <>
      <div className="absolute left-0 mt-12 w-full">
        <div className="relative z-50 flex items-center justify-between px-12 text-xs">
          <div
            className="cursor-pointer"
            onMouseEnter={() => {
              setVisible(true);
              setHoveredText("Work");
            }}
            onMouseLeave={() => setVisible(false)}
          >
            <p className=" font-medium text-[#878787]">01</p>
            <p
              className={clsx(
                "font-medium   mix-blend-difference  ",
                visible && " invert filter transition-colors duration-700"
              )}
            >
              Work
            </p>
          </div>
          <div
            className="cursor-pointer"
            onMouseEnter={() => {
              setVisible(true);
              setHoveredText("About");
            }}
            onMouseLeave={() => setVisible(false)}
          >
            <p className=" font-medium text-[#878787]">02</p>
            <p
              className={clsx(
                "font-medium mix-blend-difference",
                visible && " invert filter transition-colors duration-700"
              )}
            >
              About
            </p>
          </div>
          <div
            className="cursor-pointer"
            onMouseEnter={() => {
              setVisible(true);
              setHoveredText("Playground");
            }}
            onMouseLeave={() => setVisible(false)}
          >
            <p className=" font-medium text-[#878787]">03</p>
            <p
              className={clsx(
                "font-medium   mix-blend-difference  ",
                visible && " invert filter transition-colors duration-700"
              )}
            >
              Playground
            </p>
          </div>
          <Link
            href="/contact"
            className="cursor-pointer"
            onMouseEnter={() => {
              setVisible(true);
              setHoveredText("Contact");
            }}
            onMouseLeave={() => setVisible(false)}
          >
            <p className=" font-medium text-[#878787]">04</p>
            <p
              className={clsx(
                "font-medium   mix-blend-difference  ",
                visible && " invert filter transition-colors duration-700"
              )}
            >
              Contact
            </p>
          </Link>
          <div
            className="cursor-pointer"
            onMouseEnter={() => {
              setVisible(true);
              setHoveredText("©2023");
            }}
            onMouseLeave={() => setVisible(false)}
          >
            <p
              className={clsx(
                "font-medium   mix-blend-difference  ",
                visible && " invert filter transition-colors duration-700"
              )}
            >
              ©2023
            </p>
          </div>
        </div>
        <AnimatePresence>
          {visible && (
            <motion.div
              className="absolute top-1/2  flex  w-full -translate-y-1/2 items-center justify-center overflow-hidden bg-black text-white  "
              initial={{ height: "0rem" }}
              animate={{ height: "13rem" }}
              exit={{ height: "0rem" }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-center text-[10vw] ">
                <FirstLetterChanged className="" text={hoveredText} />
              </h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Home;
