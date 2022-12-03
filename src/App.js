import "./App.css";
import React from "react";
/* import { Section } from "./components/Section.js"; */
import { Content } from "./components/Content.js"; /* imd--> atajo */
function App() {
  return (
    <React.Fragment>
      {/*     <Section /> */}
      {/*  <Content /> */}

      <section>
        <Content />
      </section>
    </React.Fragment>
  );
}

export default App;
