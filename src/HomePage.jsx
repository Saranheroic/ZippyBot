import React from "react";
import Section from "./components/Section";
import { Cover } from "@/components/ui/cover";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";

("use client");
import { BackgroundBeams } from "./components/ui/background-beams";

const HomePage = () => {
  return (
    <>
      <Section
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[3.95rem]"
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
          </div>
        </div>

        <BottomLine />
      </Section>
      <BackgroundBeams />
    </>
  );
};

export default HomePage;
