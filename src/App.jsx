import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Video from "./components/Video";
import Experts from "./components/Experts";

const App = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Video />
      <Experts />
    </div>
  );
};

export default App;
