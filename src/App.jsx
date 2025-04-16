import React from "react";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { State } from "./components/hooks/State";
import { DerivedState } from "./components/DerivedState";
import { LiftStateUp } from "./components/LiftStateUp";

// import NetflixSeries, { Footer, Header } from "./components/NetflixSeries";
// import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventProps";
// import { EventPropagation } from "./components/EventPropagation";

export default function App() {
  return <MantineProvider>{
    <section className="container">
      {/* <NetflixSeries /> */}
      {/* <EventHandling /> */}
      {/* <EventProps /> */}
      {/* <EventPropagation /> */}
      {/* <State />
      <Sibling /> */}
      {/* <DerivedState /> */}
      <LiftStateUp />
    </section>
  }
  </MantineProvider>;
}



export function Sibling() {
  console.log("Sibling Component rendered");
  return (
    <div className="main-div">
      <h2>Sibling Component</h2>
    </div>
  )
}