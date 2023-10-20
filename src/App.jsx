import React from "react";
import { Home, Navbar } from "./components";
import { About, Feedback, ProductDish, TodaysMenu } from "./containers";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <TodaysMenu />
      <ProductDish />
      <Feedback />
    </div>
  );
}

export default App;
