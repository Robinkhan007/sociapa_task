import React from "react";
import Header from "./components/header";
import Slider from "./components/slider";
import "./App.css";
import TrustSection from "./components/TrustSection";
import ProductsSection from "./components/ProductsSection";
import ProductShowcase from "./components/productShowCase";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
       <TrustSection />
      <ProductsSection />
      {/* <ProductShowcase/> */}
      {/* Other components will go here */}
    </div>
  );
}

export default App;
