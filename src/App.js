import React from "react";
import JumboTron from "./components/Jumbotron";
import SearchContainer from "./components/SearchContainer";

function App() {
  return (
    <>
      <JumboTron />
      <div className="container">
      <SearchContainer />
      </div>

    </>
  )
}

export default App;
