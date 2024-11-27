"use client";
import React from "react";
import { BackgroundGradient } from "./components/ui/background-gradient";

export function BackgroundGradientDemo() {
  return (
    <section>
      <div className="flex flex-wrap justify-center items-center  p-4 bg-n-8/90  gap-3">
        <BackgroundGradient className="rounded-[22px] max-w-sm w-full p-4 sm:p-10 bg-black dark:bg-zinc-900">
          <div class="dark:bg-black dark:border-white/[0.2]   rounded-3xl py-6 ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 border border-transparent h-full flex flex-col justify-between">
            <div class="">
              <h3
                id="tier-free"
                class="text-emerald-600  font-bold text-xl leading-7"
              >
                1-week access plan
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
                All the features that are freely available on the website are
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
                  Limited job searches per day
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
                  Access to basic job recommendations
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
                  Standard support
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
                  Perfect for casual users or job seekers exploring
                  opportunities
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
                Get started
              </button>
              <button class="text-xs text-neutral-500 mt-2 text-left">
                Questions?
              </button>
            </div>
          </div>
        </BackgroundGradient>

        <BackgroundGradient className="rounded-[22px] max-w-sm w-full p-4 sm:p-10 bg-black dark:bg-zinc-900">
          <div class="dark:bg-black dark:border-white/[0.2]   rounded-3xl py-3 ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 border border-transparent h-full flex flex-col justify-between">
            <div class="">
              <h3
                id="tier-free"
                class="text-emerald-600  font-bold text-xl leading-7"
              >
                6-Month Access Plan
              </h3>
              <p class="mt-4 gap-x-2">
                <span class="dark:text-white text-gray-400 text-sm block h-6">
                  pause or cancel anytime
                </span>
                <span class="text-white text-4xl font-bold tracking-tight dark:text-white">
                  $75/6mo
                </span>
              </p>
              <p class="text-gray-300 mt-6 text-sm leading-7 dark:text-neutral-200 h-24 md:h-32 xl:h-24">
                Unlimited job searches and recommendations
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
                  Advanced job-matching algorithms
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
                  Access to premium tools like interview tips and resume
                  enhancement
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
                  Priority customer support
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
                  Best for short-term job seekers aiming to land their next role
                  quickly
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
                Buy Now
              </button>
              <button class="text-xs text-neutral-500 mt-2 text-left">
                Questions?
              </button>
            </div>
          </div>
        </BackgroundGradient>

        <BackgroundGradient className="rounded-[22px] max-w-sm w-full p-4 sm:p-10  bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)]  dark:bg-zinc-900">
          <div class="dark:bg-black dark:border-white/[0.2]   rounded-3xl  py-3 ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 border border-transparent h-full flex flex-col justify-between">
            <div class="">
              <h3
                id="tier-free"
                class="text-emerald-600  font-bold text-xl leading-7"
              >
                1-Year Access Plan
              </h3>
              <p class="mt-4 gap-x-2">
                <span class="dark:text-white text-gray-400 text-sm block h-6">
                  pause or cancel anytime
                </span>
                <span class="text-white text-4xl font-bold tracking-tight dark:text-white">
                  $150/yearly
                </span>
              </p>
              <p class="text-gray-300 mt-6 text-sm leading-7 dark:text-neutral-200 h-24 md:h-32 xl:h-24">
                Unlimited job searches and recommendations
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
                  Everything in the 6-Month Plan
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
                  Long-term career planning tools
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
                  Exclusive access to employer insights and trends
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
                  Early access to new features and updates
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
                  Ideal for professionals who want to stay ahead in their career
                  journey
                </li>
              </ul>
            </div>
            <div>
              <button
                aria-describedby="tier-free"
                class="text-white bg-emerald-500 ring-1 ring-inset ring-emerald-500 hover:ring-emerald-600 focus-visible:outline-emerald-600 mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full"
              >
                Buy Now
              </button>
              <button class="text-xs text-neutral-500 mt-2 text-left">
                Questions?
              </button>
            </div>
          </div>
        </BackgroundGradient>

        <BackgroundGradient className="rounded-[22px] max-w-sm w-full p-2 sm:p-10 bg-black dark:bg-zinc-900">
          <div class="dark:bg-black dark:border-white/[0.2]   rounded-3xl  ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 border border-transparent h-full flex flex-col justify-between">
            <div class="">
              <h3
                id="tier-free"
                class="text-emerald-600  font-bold text-xl leading-7"
              >
                custom plan
              </h3>
              <p class="mt-4 gap-x-2">
                <span class="dark:text-white text-gray-400 text-sm block h-6">
                  pause or cancel anytime
                </span>
                <span class="text-white text-4xl font-bold tracking-tight dark:text-white">
                  Custom Quote
                </span>
              </p>
              <p class="text-gray-300 mt-6 text-sm leading-7 dark:text-neutral-200 h-24 md:h-32 xl:h-24">
                Unlimited job searches and recommendations.
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
                  Tailored solutions for recruiters, job agencies, or power
                  users
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
                  Dedicated account manager
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
                  API integrations and bulk job matching
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
                  Fully customizable features to meet your unique needs
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
                  Perfect for organizations or specialized requirements
                </li>
              </ul>
            </div>
            <div>
              <button
                aria-describedby="tier-free"
                class="text-emerald-600 ring-1 ring-inset ring-emerald-500 hover:ring-emerald-600 focus-visible:outline-emerald-600 mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full"
              >
                Mail us
              </button>
              <button class="text-xs text-neutral-500 mt-2 text-left">
                Questions?
              </button>
            </div>
          </div>
        </BackgroundGradient>
      </div>
    </section>
  );
}
