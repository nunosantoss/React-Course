import { useState } from "react";
import { MENU_BUTTONS, EXAMPLES } from "../../data";
import TabButton from "../TabButton/TabButton";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";

export default function Examples() {
  const [topic, setTopic] = useState(null);

  function handleSelect(selectedTopic) {
    setTopic(selectedTopic);
  }

  return (
    <Section id="examples" title="Examples">

    <Tabs buttons={MENU_BUTTONS.map((button) => (
          <TabButton
            key={button.name}
            isSelected={topic === button.name}
            onClick={() => handleSelect(button.name)}
          >
            {button.text}
          </TabButton>
        ))}>
      <div id="tab-content">
        {!topic ? (
          
          <span>Please select a topic.</span>
        ) : (
          <>
            <h3>{EXAMPLES[topic].title}</h3>
            <p>{EXAMPLES[topic].description}</p>
            <pre>
              <code>{EXAMPLES[topic].code}</code>
            </pre>
          </>
        )}
      </div>
    </Tabs>

    </Section>
  );
}
