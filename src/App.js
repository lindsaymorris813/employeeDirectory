import React from "react";
import JumboTron from "./components/Jumbotron";
import SearchField from "./components/SearchField";

function App() {
  return (
    <>
      <JumboTron />
      <div className="container">
        <SearchField />
      </div>

    </>
  )
}

export default App;
