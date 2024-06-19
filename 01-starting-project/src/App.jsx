import { useState } from "react";
import ConceptsList from "./components/Concepts/ConceptsList";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton/TabButton";
import { EXAMPLES, MENU_BUTTONS } from "./data";

function App() {
  const [topic, setTopic] = useState(null);

  function handleSelect(selectedTopic) {
    setTopic(selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ConceptsList />
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
          {MENU_BUTTONS.map((button) => (
            <TabButton key={button.name} isSelected={topic === button.name} onSelect={() => handleSelect(button.name)}>
            {button.name}            
            </TabButton>
          ))}
          </menu>
          <div id="tab-content">
            {!topic ? (
              <span>Please select a topic.</span>
            ) : (
              <>
                <h3>{EXAMPLES[topic].title}</h3>
                <p>{EXAMPLES[topic].description}</p>
                <pre>
                  <code>
                    {EXAMPLES[topic].code}
                  </code>
                </pre>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
