import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import WhyUs from "./WhyUs";
import Features from "./Features";
import Job from "./Job";
import "../global/global.css";
import Plans from "./Plans";
import Share from "./Share";
import Footer from "./Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <WhyUs />
      <Features />
      <Job />
      <Plans />
      <Share />
      <Footer />
    </div>
  );
};

export default App;
