// Import index.scss when created

import { Hero } from "./components/hero/hero";
import Navbar from "./components/navigation/Navbar";
import "../src/styles/index.scss";
import { useState } from "react";

function App() {
  const [showGetStarted, setShowGetStarted] = useState(false);
  return (
    <>
      <Navbar />
      <Hero
        showGetStarted={showGetStarted}
        setShowGetStarted={setShowGetStarted}
      />
    </>
  );
}

export default App;
