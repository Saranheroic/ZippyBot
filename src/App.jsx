import Booking from "./Booking";
import Hero from "./Hero";
import ButtonGradient from "./components/ButtonGradient";
import Button from "./components/Button";
import HomePage from "./HomePage";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Hero />
        <HomePage />
        <Booking />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
