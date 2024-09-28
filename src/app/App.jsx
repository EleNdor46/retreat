import React from "react";
import NavBar from "../widgets/navBar";
import RoutesProvider from "../provider";
function App() {

  return (
    <div className="App">
      <NavBar />
      <RoutesProvider />
    </div>
  );
}

export default App;
