import React from "react";
import Header from "./Header";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    //BEM naming convention
    <div className="app">
      <Header />
      <Home />
      {/** footer */}
    </div>
  );
}

export default App;
