import React from "react";
import NetflixSeries, { Footer, Header } from "./components/NetflixSeries";
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { EventHandling } from "./components/EventHandling";

export default function App() {
  return <MantineProvider>{
    <section className="container">
      <h1 className="card-heading">List of Top Netflix Series</h1>
      {/* <NetflixSeries /> */}
      <EventHandling />
    </section>
  }
  </MantineProvider>;
}
