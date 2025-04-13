import React from "react";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { State } from "./components/hooks/State";

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
      <State />
    </section>
  }
  </MantineProvider>;
}
