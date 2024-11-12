import React from "react";
import Section from "./components/Section";
import { Cover } from "@/components/ui/cover";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Compare } from "./components/ui/compare";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./components/ui/hero-highlight";

const HomePage = () => {
  return (
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
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          {/* <Compare
            firstImage="https://assets.aceternity.com/code-problem.png"
            secondImage="https://assets.aceternity.com/code-solution.png"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="h-[250px] w-[200px] md:h-[500px] md:w-[500px] mt-20"
            slideMode="hover"
          /> */}
        </div>
      </div>
    </Section>
  );
};

export default HomePage;
