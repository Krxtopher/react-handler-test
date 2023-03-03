import { useState } from "react";
import {
  Container,
  SegmentedControl,
  Box,
  Tabs,
} from "@cloudscape-design/components";

import "@cloudscape-design/global-styles/index.css";
import "./App.css";
import { Instructions } from "./Instructions";
import { ButtonListNoHandlers } from "./ButtonListNoHandlers";
import { ButtonListClosureHandlers } from "./ButtonListClosureHandlers";
import { ButtonListDelegateHandler } from "./ButtonListDelegateHandler";

const buttonCount = 5000;
const items = new Array<{ id: number }>();
for (let i = 0; i < buttonCount; i++) {
  items.push({ id: i });
}

function App() {
  return (
    <div className="App">
      <Container>
        <Tabs
          tabs={[
            {
              id: "instructions",
              label: "Instructions",
              content: <Instructions />,
            },
            {
              id: "no-handlers",
              label: "No handlers",
              content: <ButtonListNoHandlers items={items} />,
            },
            {
              id: "closure-handlers",
              label: "Closure handlers",
              content: <ButtonListClosureHandlers items={items} />,
            },
            {
              id: "delegate-handlers",
              label: "Delegate handler",
              content: <ButtonListDelegateHandler items={items} />,
            },
          ]}
        />
      </Container>
    </div>
  );
}

export default App;
