import React from "react";
import { Navbar } from "../navbar/navbar";
import { Rainbow } from "../rainbow/rainbow";
import Head from "next/head";
import { motion } from "framer-motion";

export const Layout = (props: { children?: React.ReactNode; page: string }) => {
  return (
    <>
      <Head>
        <title>Cornelius Denninger | Personal Website</title>
        <meta
          name="description"
          content="Cornelius Denninger | Personal Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-white py-24 dark:bg-[#111111]">
        <div className="fixed top-0 z-50 w-full">
          <div className="mb-1">
            <Rainbow />
          </div>
          <Navbar page={props.page} />
        </div>
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0 }}
          layoutId="page"
          className="mt-24 "
        >
          {props.children}
        </motion.div>
      </main>
    </>
  );
};
