import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function Booking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#000000" },
        },
      });
    })();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center  ">
      <button
        data-cal-link="2kgamer-plays-hkcfjv"
        data-cal-config='{"theme":"dark"}'
        className="z-[999999999999]  fixed md:bottom-6 bottom-4 flex h-16 origin-center bg-black transform cursor-pointer items-center
rounded-full py-4 px-6 text-base outline-none drop-shadow-md transition focus:outline-none fo
cus:ring-4 focus:ring-gray-600 focus:ring-opacity-50 active:scale-95 md:right-10 right-4"
      >
        <CalendarMonthIcon />{" "}
        <span className="font-semibold leading-5 antialiased">Book my cal</span>
      </button>
    </div>
  );
}
