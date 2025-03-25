import React from "react";
import { navigation } from "./constants";
import { useLocation } from "react-router-dom";
import Button from "./components/Button";
import { Link } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import MenuSvg from "./assests/collabration/Svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Hero = () => {
  const pathname = useLocation;
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      } `}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a
          className="block w-[12rem] xl:mr-8 font-bold font-sans text-2xl"
          href="#hero"
        >
          ZIPPYBOT
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent `}
        >
          <div className="relative z-2 flex flex-col lg:flex-row items-center justify-center m-auto lg:flex-grow">
            {navigation.map((NavList) => (
              <a
                key={NavList.id}
                href={NavList.url}
                onClick={handleClick}
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
            {/* Mobile Auth Buttons - Only shown when signed out */}
            <SignedOut>
              <div className="lg:hidden flex flex-col items-center w-full mt-4 space-y-4">
                <SignUpButton>
                  <button
                    onClick={handleClick}
                    className="w-full max-w-xs py-3 px-6 bg-transparent border border-n-1 rounded-full font-code text-n-1 uppercase hover:bg-n-7 transition-colors"
                  >
                    Register
                  </button>
                </SignUpButton>
                <SignInButton>
                  <button
                    onClick={handleClick}
                    className="w-full max-w-xs py-3 px-6 bg-n-7 rounded-full font-code text-n-1 uppercase hover:bg-n-6 transition-colors"
                  >
                    Log In
                  </button>
                </SignInButton>
              </div>
            </SignedOut>
          </div>

          <HamburgerMenu />
        </nav>
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>

        <SignedOut>
          {" "}
          <SignUpButton>
            <a className=" cursor-pointer button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block">
              Register
            </a>
          </SignUpButton>
          <SignInButton>
            <Button className="hidden lg:flex">Log In</Button>
          </SignInButton>
        </SignedOut>
        <div className="pr-5"></div>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Hero;
