import React from "react";
import Section from "./components/Section";
import { Cover } from "@/components/ui/cover";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import Button from "./components/Button";

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
              Explore Job Opportunities While You Game &nbsp;
              <span className="inline-block relative">
                <Cover>ZIPPYBOT</Cover>
                <img
                  src="images/curve.png"
                  className="absolute top-full left-0 w-full xl:-mt-1"
                  alt="Curve"
                />
              </span>
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              Unleash the power of AI within zippybot. Apply to jobs instantly
              with zippyboy, the Discord bot job app.
            </p>
            <Button white>Get Started</Button>
            <div className="mt-16 rounded-2xl border-2 overflow-hidden border-transparent ">
              <img src="images/robot.jpg" />
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
