"use client";
import React from "react";
import { BackgroundGradient } from "./components/ui/background-gradient";
export function BackgroundGradientDemo() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-n-8/90 dark:bg-gray-900">
      <BackgroundGradient className="rounded-[22px] max-w-sm w-full p-4 sm:p-10 bg-black dark:bg-zinc-900">
        <div class="dark:bg-black dark:border-white/[0.2]   rounded-3xl px-6 py-8 ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 border border-transparent h-full flex flex-col justify-between">
          <div class="">
            <h3
              id="tier-free"
              class="text-emerald-600 text-base font-semibold leading-7"
            >
              Price: $0
            </h3>
            <p class="mt-4 gap-x-2">
              <span class="dark:text-white text-gray-400 text-sm block h-6">
                {" "}
              </span>
              <span class="text-white text-4xl font-bold tracking-tight dark:text-white">
                Free
              </span>
            </p>
            <p class="text-gray-300 mt-6 text-sm leading-7 dark:text-neutral-200 h-24 md:h-32 xl:h-24">
              All the components that are freely available on the website are
              free to use.
            </p>
            <ul
              role="list"
              class="text-gray-300 mt-8 space-y-3 text-sm leading-6 sm:mt-10 dark:text-neutral-100"
            >
              <li class="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-emerald-600 h-6 w-5 flex-none"
                  aria-hidden="true"
                >
                  <path
                    d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                    fill="currentColor"
                    stroke-width="0"
                  ></path>
                </svg>
                A growing library of awesome components
              </li>
              <li class="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-emerald-600 h-6 w-5 flex-none"
                  aria-hidden="true"
                >
                  <path
                    d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                    fill="currentColor"
                    stroke-width="0"
                  ></path>
                </svg>
                React / Next.js / Tailwind CSS code
              </li>
              <li class="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-emerald-600 h-6 w-5 flex-none"
                  aria-hidden="true"
                >
                  <path
                    d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                    fill="currentColor"
                    stroke-width="0"
                  ></path>
                </svg>
                Serves a wide variety of audience.
              </li>
              <li class="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-emerald-600 h-6 w-5 flex-none"
                  aria-hidden="true"
                >
                  <path
                    d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                    fill="currentColor"
                    stroke-width="0"
                  ></path>
                </svg>
                MIT Licence. Personal or commercial projects.
              </li>
              <li class="flex gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-emerald-600 h-6 w-5 flex-none"
                  aria-hidden="true"
                >
                  <path
                    d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                    fill="currentColor"
                    stroke-width="0"
                  ></path>
                </svg>
                Contact over chat for support
              </li>
            </ul>
          </div>
          <div>
            <button
              aria-describedby="tier-free"
              class="text-emerald-600 ring-1 ring-inset ring-emerald-500 hover:ring-emerald-600 focus-visible:outline-emerald-600 mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full"
            >
              Browse Components
            </button>
            <button class="text-xs text-neutral-500 mt-2 text-left">
              Questions?
            </button>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}
