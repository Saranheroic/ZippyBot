import React from "react";
import { navigation } from "./constants";
import { useLocation } from "react-router-dom";
import Button from "./components/Button";

const Hero = () => {
  const pathname = useLocation;
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a
          className="block w-[12rem] xl:mr-8 font-bold font-sans text-2xl"
          href="#hero"
        >
          ZIPPYBOT
        </a>
        <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto bg-transparent">
          <div className="relative z-2 flex  items-center justify-center m-auto lg:flex-grow">
            {navigation.map((NavList) => (
              <a
                key={NavList.id}
                href={NavList.url}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  NavList.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md-py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  NavList.url === pathname
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {NavList.title}
              </a>
            ))}
          </div>
        </nav>
        <a
          href="#singup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          Register
        </a>
        <Button className="hidden lg:flex " href="#login">
          Log In
        </Button>
      </div>
    </div>
  );
};

export default Hero;
