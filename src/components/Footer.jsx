import React from "react";
import {
  faYoutube,
  faXTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FloatingDock } from "./ui/floating-dock";

export const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Login",
    href: "#login",
  },
];

export const socialLinks = [
  {
    name: "Youtube",
    icon: faYoutube,
    href: "#youtube",
  },
  {
    name: "X",
    icon: faXTwitter,
    href: "#x",
  },
  {
    name: "Discord",
    icon: faDiscord,
    href: "#discord",
  },
];

export const Footer = () => {
  return (
    <footer className=" border-t border-gray-500 bg-black/60 ">
      <div className="container py-8">
        {/* Navigation Links */}
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between ">
          <div className="font-extrabold text-2xl">ZippyBot.in</div>
          <nav className="flex flex-col gap-8 items-center md:flex-row md:gap-16">
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.href}
                className="uppercase text-xs tracking-widest font-bold text-gray-400"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Social Links */}
        <div className="mt-16 flex flex-col items-center gap-8 md:flex-row-reverse md:justify-between">
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <a href={link.href} key={link.name}>
                <div className="size-10 rounded-full bg-gray-900 inline-flex items-center justify-center">
                  <FontAwesomeIcon icon={link.icon} className="size-4 " />
                </div>
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            &copy; ZippyBot.in, All rights reserved.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
