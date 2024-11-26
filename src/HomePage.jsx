import React from "react";
import Section from "./components/Section";
import { Cover } from "@/components/ui/cover";

("use client");
import { BackgroundBeams } from "./components/ui/background-beams";

const HomePage = () => {
  return (
    <>
      <Section
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <div className="container relative">
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <h1 className="h1 mb-6">
              Explore Job Opportunities While You Game.
              <br />
              <span className="inline-block relative">
                {" "}
                <Cover>ZIPPYBOT</Cover>
                <img
                  src="images/curve.png"
                  className="absolute top-full left-0 w-full xl:-mt-1"
                  alt="Curve"
                />
              </span>
            </h1>
            <div className="flex justify-center items-center">
              <img
                src="images/bot.png"
                alt="Bot Avatar"
                className="rounded-full h-32 w-32"
              />
            </div>

            <div className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
              <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                  Join the waitlist
                </h1>
                <p></p>

                <input
                  type="text"
                  placeholder="sarann2302@gmail.com"
                  className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
      <BackgroundBeams />
    </>
  );
};

export default HomePage;
