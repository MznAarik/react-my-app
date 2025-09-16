import React from "react";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

import { ToggleSwitch } from "./components/projects/ToggleSwitch/ToggleSwitch";
import { ToDo } from "./components/projects/ToDo/Todo";
import CounterChallenge from "./components/hooks/useState/Challenge";
import { Controlled } from "./components/hooks/useState/Controlled";
import RegistrationForm from "./components/hooks/useState/RegistrationForm";
import RegistrationReact from "./components/hooks/useState/RegistrationReact";
import LoginForm from "./components/hooks/useState/LoginForm";
import ContactForm from "./components/hooks/useState/ContactForm";
import ReactUseEffect from "./components/hooks/useEffect";
import { EffectChallenge } from "./components/hooks/useEffect/EffectChallenge";
import { HowNotToFetchApi } from "./components/hooks/useEffect/HowNotToFetchApi";
import { HowToFetchApi } from "./components/hooks/useEffect/HowToFetchApi";
import { UseRef } from "./components/hooks/useRef";
import { ForwardRefs } from "./components/hooks/useRef/ForwardRefs";
import { UseID } from "./components/hooks/useId";
import { ParentComponent } from "./components/LearnReact/PropDrilling";
import { Home } from "./components/ContextAPI/Home"
import { BioProvider } from "./components/ContextAPI";
import { About } from "./components/ContextAPI/About";
import Services from "./components/ContextAPI/Services";

export default function App() {
  return (
    <MantineProvider>
      <>

        {/* <ToggleSwitch /> */}
        {/* <ToDo /> */}
        {/* <CounterChallenge /> */}
        {/* <Controlled /> */}
        {/* <RegistrationReact /> */}
        {/* <LoginForm /> */}
        {/* <ContactForm /> */}
        {/* <ReactUseEffect /> */}
        {/* <EffectChallenge /> */}
        {/* <HowNotToFetchApi /> */}
        {/* <HowToFetchApi /> */}
        {/* <ForwardRefs /> */}
        {/* <UseID /> */}
        {/* <ParentComponent /> */}
        <BioProvider>
          <Home />
          <About />
          <Services />
        </BioProvider>
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