"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FirstLetterChanged } from "~/pages";
import { Rotate3D } from "../Animations/Rotate3D";

export const Menu = () => {
  const [visible, setVisible] = useState(true);
  const [hoveredText, setHoveredText] = useState("Work");

  return (
    <>
      <div className="absolute left-0 mt-12 w-full">
        <div className="relative z-50 flex items-center justify-between px-12 text-xs">
          <div
            className="menu_link cursor-pointer"
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
            className="menu_link  cursor-pointer"
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
            className="menu_link  cursor-pointer"
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
            className="menu_link   cursor-pointer"
            onMouseEnter={() => {
              setVisible(true);
              setHoveredText("©2023");
            }}
            onMouseLeave={() => setVisible(false)}
          >
            <div
              className={clsx(
                "font-medium   mix-blend-difference  ",
                visible && " invert filter transition-colors duration-700"
              )}
            >
              <Rotate3D text="©2023" />
            </div>
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
