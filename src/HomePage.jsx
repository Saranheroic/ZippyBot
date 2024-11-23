import React from "react";
import Section from "./components/Section";
import { Cover } from "@/components/ui/cover";
import { BackgroundLines } from "@/components/ui/background-lines";
import Scroll from "./scroll";

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
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
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
            </div>
          </div>
        </BackgroundLines>
      </Section>
      <Scroll />
    </>
  );
};

export default HomePage;
