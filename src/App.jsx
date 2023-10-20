import React from "react";
import { Home, Navbar } from "./components";
import { About } from "./containers";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
