import Booking from "./Booking";
import Hero from "./Hero";
import ButtonGradient from "./components/ButtonGradient";
import HomePage from "./HomePage";
import { BentoGridThirdDemo } from "./Features";
import { BackgroundGradientDemo } from "./pricing";
import Explain from "./components/Explain";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Hero />
        <HomePage />
        <BentoGridThirdDemo />

        <Explain />
        <BackgroundGradientDemo />

        <Booking />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
