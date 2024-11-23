import React from "react";
import { ContainerScroll } from "./components/ui/container-scroll-animation";

const Scroll = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                DISCORD BOT
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`images/dis-bot.PNG`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
};

export default Scroll;