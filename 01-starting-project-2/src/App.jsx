import { useState } from "react";
import ConceptsList from "./components/Concepts/ConceptsList";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton/TabButton";
import { EXAMPLES, MENU_BUTTONS } from "./data";
import CoreConcepts from "./components/Concepts/CoreConcepts";
import Examples from "./components/Examples/Examples";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>
  );
}

export default App;
