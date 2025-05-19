// Import index.scss when created

import { Hero } from "./components/hero/hero";
import Navbar from "./components/navigation/Navbar";
import "../src/styles/index.scss";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
