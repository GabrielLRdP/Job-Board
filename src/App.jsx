import { useState } from "react";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import "./App.css";

function App() {
  return (
    <>
      <Header title="The Jobboard" />
      <Jobs />
    </>
  );
}

export default App;
