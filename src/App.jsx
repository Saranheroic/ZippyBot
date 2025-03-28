import Booking from "./Booking";
import Hero from "./Hero";
import ButtonGradient from "./components/ButtonGradient";
import HomePage from "./HomePage";
import { FeaturesSectionDemo } from "./Features";
import { Pricing } from "./pricing";
import Explain from "./components/Explain";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import { Docs } from "./Docs";
import Login from "./LoginPage/Login";
import { Routes, Route, useLocation } from "react-router-dom";
import Register from "./LoginPage/Register";

const App = () => {
  const location = useLocation();
  // If user is on the login page, only show Login
  if (location.pathname === "/login") {
    return <Login />;
  }
  if (location.pathname === "/register") {
    return <Register />;
  }
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Hero />
        <HomePage />
        <FeaturesSectionDemo />
        <Explain />
        <Pricing />
        <Roadmap />
        <Footer />
        {/* <Booking /> */}
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
