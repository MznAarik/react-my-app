import React from "react";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
// import { State } from "./components/hooks/State";
// import { DerivedState } from "./components/LearnReact/DerivedState";
// import { LiftStateUp } from "./components/LearnReact/LiftStateUp";


// import NetflixSeries, { Footer, Header } from "./components/NetflixSeries";
// import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventProps";
// import { EventPropagation } from "./components/EventPropagation";

import { ToggleSwitch } from "./components/projects/ToggleSwitch/ToggleSwitch";
import { ToDo } from "./components/projects/ToDo/Todo";
import CounterChallenge from "./components/hooks/useState/Challenge";
import { Controlled } from "./components/hooks/useState/Controlled";
import RegistrationForm from "./components/hooks/useState/RegistrationForm";
import RegistrationReact from "./components/hooks/useState/RegistrationReact";
import LoginForm from "./components/hooks/useState/LoginForm";
import ContactForm from "./components/hooks/useState/ContactForm";



export default function App() {
  return (
    <MantineProvider>
      <>
        {/* <NetflixSeries /> */}
        {/* <EventHandling /> */}
        {/* <EventProps /> */}
        {/* <EventPropagation /> */}
        {/* <State />
            <Sibling /> */}
        {/* <DerivedState /> */}
        {/* <LiftStateUp /> */}
        {/* <ToggleSwitch /> */}
        {/* <ToDo /> */}
        {/* <CounterChallenge /> */}
        {/* <Controlled /> */}
        {/* <RegistrationReact /> */}
        {/* <LoginForm /> */}
        <ContactForm />
      </>
    </MantineProvider>
  )
}



// export function Sibling() {
//   console.log("Sibling Component rendered");
//   return (
//     <div className="main-div">
//       <h2>Sibling Component</h2>
//     </div>
//   )
// }