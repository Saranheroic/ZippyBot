import Booking from "./Booking";
import Hero from "./Hero";
import ButtonGradient from "./components/ButtonGradient";
import Button from "./components/Button";
import HomePage from "./HomePage";
import { BentoGridThirdDemo } from "./Features";
import { BackgroundGradientDemo } from "./pricing";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Hero />
        <HomePage />
        <BentoGridThirdDemo />
        <BackgroundGradientDemo />

        <Booking />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
