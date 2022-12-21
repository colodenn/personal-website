import { type NextPage } from "next";

import Image from "next/image";
import Link from "next/link";

import { Layout } from "@/components/layout/layout";
import Zoomed from "@/components/zoomed/zoomed";
import { Hero } from "@/components/hero/hero";

const Tools: NextPage = () => {
  return (
    <>
      <Layout page="tools">
        <Hero>
          <div className="mb-16">
            <h1 className="mb-8 text-5xl font-bold text-[#111111]">Tools</h1>
            <p className=" text-[#6c6c6c]">
              The products, apps and services I use on a daily basis for work
              and life.
            </p>
          </div>
          <hr className="divider mb-20" />
          <div>
            <h3 className="text-2xl font-bold text-[#111111]">
              Apps & services
            </h3>
            <p className="mt-4 text-[#6c6c6c]">
              Some of the apps & services I use to get work done and keep track
              of my personal life.
            </p>
            <div className="mt-12 grid w-full grid-cols-1  gap-4  lg:grid-cols-3 lg:gap-12">
              <SimpleCard
                path="/oneplusnord.png"
                heading="OnePlus Nord 5G"
                text="blabla"
              />{" "}
              <SimpleCard
                path="/oneplusnord.png"
                heading="OnePlus Nord 5G"
                text="blabla"
              />{" "}
              <SimpleCard
                path="/oneplusnord.png"
                heading="OnePlus Nord 5G"
                text="blabla"
              />{" "}
              <SimpleCard
                path="/oneplusnord.png"
                heading="OnePlus Nord 5G"
                text="blabla"
              />{" "}
              <SimpleCard
                path="/oneplusnord.png"
                heading="OnePlus Nord 5G"
                text="blabla"
              />{" "}
              <SimpleCard
                path="/oneplusnord.png"
                heading="OnePlus Nord 5G"
                text="blabla"
              />{" "}
              <SimpleCard
                path="/oneplusnord.png"
                heading="OnePlus Nord 5G"
                text="blabla"
              />{" "}
              <SimpleCard
                path="/oneplusnord.png"
                heading="OnePlus Nord 5G"
                text="blabla"
              />{" "}
              <SimpleCard
                path="/oneplusnord.png"
                heading="OnePlus Nord 5G"
                text="blabla"
              />
            </div>
          </div>
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-[#111111]">Setup</h3>
            <p className="mt-4 text-[#6c6c6c]">
              My primary setup used to design, code and make awesome stuff
            </p>
            <div className="mt-12 grid w-full grid-cols-1  gap-4  lg:grid-cols-3 lg:gap-12">
              <SimpleCard
                path="/mateview.png"
                heading="Huawei MateView GT34"
                text="blabla"
              />{" "}
              <SimpleCard
                path="/tools/bequiet.png"
                heading="RTX 3060TI"
                text="Ryzen 5 3600, 32GB RAM"
              />{" "}
              <SimpleCard
                path="/tools/g402.png"
                heading="Logitech G402"
                text="blabla"
              />{" "}
              <SimpleCard
                path="/tools/keychron.png"
                heading="Keychron k4 97%"
                text="blabla"
              />
            </div>
          </div>
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-[#111111]">Everyday</h3>
            <p className="mt-4 text-[#6c6c6c]">
              Things that I keep with me, wherever I go
            </p>
            <div className="mt-12 grid w-full grid-cols-1  gap-4  lg:grid-cols-3 lg:gap-12">
              <SimpleCard
                path="/tools/oneplusnord.png"
                heading="OnePlus Nord 5G"
                text="blabla"
              />
              <SimpleCard
                path="/tools/ankerp3.png"
                heading="Soundcore Life P3"
                text="blabla"
              />
              <SimpleCard
                path="/tools/l380.png"
                heading="Lenovo ThinkPad L380"
                text="blabla"
              />
            </div>
          </div>
          <hr className="divider mt-20" />
        </Hero>
      </Layout>
    </>
  );
};

export default Tools;

const SimpleCard = (props: {
  path: string;
  heading: string;
  text: string;
  link?: string;
}) => {
  return (
    <Zoomed>
      <Link
        href={props.link ? props.link : "/"}
        className=" cards  h-full shrink flex-grow-0 flex-row"
      >
        <div className=" h-full rounded-lg border-[1px] border-[#eaeaea]">
          <div className="flex  items-center  justify-center bg-[#f6f6f6] p-8">
            <Image
              width={104}
              height={104}
              alt=""
              className=""
              src={props.path}
            />
          </div>
          <div className="card-body p-6">
            <h5 className="mb-2 text-sm font-bold text-[#111111]">
              {props.heading}
            </h5>
            <p className="text-sm font-normal text-[#6c6c6c]">{props.text}</p>
          </div>
        </div>
      </Link>
    </Zoomed>
  );
};
