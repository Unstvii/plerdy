import React, { useState } from "react";

import "./App.css";
import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { Slider } from "./components/Slider/Slider";
import BoostSection from "./components/BoostSection/BoostSection";
import { SignForm } from "./components/SignForm/SignForm";
function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);
  return (
    <div className="app">
      <Header openForm={openForm} />
      <HeroSection openForm={openForm} />
      <Slider />
      <BoostSection openForm={openForm} />
      <SignForm isOpen={isFormOpen} onClose={closeForm} />
    </div>
  );
}

export default App;
