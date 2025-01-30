import React from "react";
import Section from "./components/Section";
import { Cover } from "@/components/ui/cover";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import Button from "./components/Button";
import Generating from "./components/Generating";
import { logos } from "./constants";

("use client");
import { BackgroundBeams } from "./components/ui/background-beams";

const HomePage = () => {
  return (
    <>
      <Section
        className="pt-[10rem] -mt-[5.25rem] "
        crosses
        crossesOffset="lg:translate-y-[3.95rem]"
        customPaddings
        id="hero"
      >
        <div className="container relative ">
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
            <div className="mt-16 rounded-2xl border-2 overflow-hidden border-gradient relative">
              <img src="images/robot.jpg" alt="zippybot" />
            </div>
            <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
          </div>
          <h5 className="tagline  text-center text-n-1/50">
            Helping Graduate Students and Developers get job with ease
          </h5>
          <div>
            <ul className="flex ">
              {logos.map((logo, id) => (
                <li
                  className="flex items-center justify-center flex-1 h-[8.5rem]"
                  key={id}
                >
                  <img src={logo.img} width={80} height={28} alt={logo} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <BottomLine />
      </Section>
      <BackgroundBeams />
    </>
  );
};

export default HomePage;
