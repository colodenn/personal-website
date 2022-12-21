import React, { useState } from "react";
import { clsx } from "clsx";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Wobbly from "../wobbly/wobbly";
import Zoomed from "../zoomed/zoomed";

export const Navbar = (props: { page: string }) => {
  return (
    <>
      <div className="flex w-full items-center justify-between border-b-[1px] border-gray-200 bg-white bg-opacity-60 p-4 backdrop-blur-md backdrop-saturate-150 backdrop-filter dark:bg-[#111111]">
        <Zoomed>
          <Wobbly>
            <Link
              href={"/"}
              className="flex items-center text-lg font-medium lowercase"
            >
              <Image height={48} width={48} alt="" src={"/mustach.svg"} />
              <div className=" ml-4 flex flex-col justify-between font-serif text-xs font-bold uppercase leading-tight text-[#111111] dark:text-white">
                <h1>Cornelius</h1>
                <h1>Denninger</h1>
              </div>
            </Link>
          </Wobbly>
        </Zoomed>
        <ul className="flex items-center justify-center ">
          <NavItem selected={props.page == "home"} path={"/"}>
            Home
          </NavItem>
          <NavItem selected={props.page == "projects"} path={"/projects"}>
            Projects
          </NavItem>
          <NavItem selected={props.page == "tools"} path={"/tools"}>
            Tools
          </NavItem>
          <NavItem selected={props.page == "design"} path={"/design"}>
            Design
          </NavItem>
        </ul>
      </div>
    </>
  );
};

const NavItem = (props: {
  children?: React.ReactNode;
  selected: boolean;
  path: string;
}) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Link
      href={props.path}
      className={"px-1"}
      onMouseEnter={() => setIsSelected(true)}
      onMouseLeave={() => setIsSelected(false)}
    >
      <div className="relative">
        <li
          className={clsx(
            {
              "text-md cursor-pointer rounded px-6 py-2 font-medium text-[#6C6C6C] ":
                !props.selected,
            },
            {
              "text-md cursor-pointer rounded bg-gray-200  px-6 py-2 font-bold text-[#242424] ":
                props.selected,
            }
          )}
        >
          {props.children}
        </li>
        {isSelected && (
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
            className="absolute top-0 -z-10 h-full w-full rounded bg-gray-200"
            layoutId="underline"
          ></motion.div>
        )}
      </div>
    </Link>
  );
};
