import Booking from "./Booking";
import Hero from "./Hero";
import ButtonGradient from "./components/ButtonGradient";
import HomePage from "./HomePage";
import { FeaturesSectionDemo } from "./Features";
import { BackgroundGradientDemo } from "./pricing";
import Explain from "./components/Explain";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import { Docs } from "./Docs";
import Login from "./LoginPage/Login";

const App = () => {
  return (
    <>
      <div>
        <Login />
      </div>
      {/* <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Hero />
        <HomePage />
        <FeaturesSectionDemo />
        <Explain />
        <BackgroundGradientDemo />
        <Roadmap />
        <Footer />
        <Booking />
        <Docs />
      </div>

      <ButtonGradient /> */}
    </>
  );
};

export default App;
