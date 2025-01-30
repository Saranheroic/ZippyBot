import Amazon from "../assests/images/CompanyLogos/amazon.png";
import google from "../assests/images/CompanyLogos/google.png";
import apple from "../assests/images/CompanyLogos/apple.png";
import meta from "../assests/images/CompanyLogos/meta.png";
import netflix from "../assests/images/CompanyLogos/netflix.png";
import uber from "../assests/images/CompanyLogos/uber.png";
import microsoft from "../assests/images/CompanyLogos/microsoft.png";
import nvdia from "../assests/images/CompanyLogos/nvdia.png";
import roadmap1 from "../assests/images/image-2.png";
import roadmap2 from "../assests/images/image-3.png";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const logos = [
  {
    id: 1,
    img: Amazon,
    alt: "Amazon",
    title: "Amzon",
  },
  {
    id: 2,
    img: google,
    alt: "Amazon",
    title: "Amzon",
  },
  {
    id: 3,
    img: netflix,
    alt: "Amazon",
    title: "Amzon",
  },
  {
    id: 4,
    img: apple,
    alt: "Amazon",
    title: "Amzon",
  },
  {
    id: 5,
    img: meta,
    alt: "Amazon",
    title: "Amzon",
  },
];

export const collabText =
  "With single command get unlimted job listing around the world, it's the perfect solution for Graduate Students and Junior developers.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Get Unlimeted Job listing .",
  },
  {
    id: "2",
    title: "Start Applyiing with single click",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: Amazon,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: apple,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: google,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: netflix,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: meta,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: nvdia,
    width: 100,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: microsoft,
    width: 100,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: uber,
    width: 38,
    height: 32,
  },
];

export const roadmap = [
  {
    id: "0",
    title: "Job listing",
    text: "Enable the JobBot with a single discord command to start, making it easier for users to interact with the app hands-free.",
    date: "August 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Auto Job-Apply",
    text: "Tired of filling out endless job applications? Zippybot’s Auto-Apply feature takes the hassle out of your job search, allowing you to focus on what matters most.",
    date: "May 2025",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Unlimited Listings, Perfectly Filtered for You",
    text: "Finding the right job has never been easier. With Zippybot’s Unlimited Listings and Advanced Filtering Options, you’ll have access to a world of opportunities tailored just for you.",
    date: "August 2024",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "3",
    title: "Zippybot: For Every Platform, Not Just Discord",
    text: "Zippybot isn’t just a tool for Discord—it’s a game-changer for any platform. Whether you’re using Slack, Telegram, or even custom bots, Zippybot seamlessly integrates to bring job opportunities to your fingertips.",
    date: "August 2025",
    status: "progress",
    imageUrl: roadmap1,
  },
];
