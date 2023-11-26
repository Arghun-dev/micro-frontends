import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Header from "./Header";
import Footer from "./Footer";
import HomeContent from "./HomeContent";

const App = () => (
  <div className="mt-10 text-3xl lg:mx-auto max-w-6xl mx-4">
    <Header />
    <HomeContent />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
