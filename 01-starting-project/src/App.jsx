import { useState } from "react";
import ConceptsList from "./components/Concepts/ConceptsList";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton/TabButton";
import { EXAMPLES } from "./data";

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
            <TabButton isSelected={topic === 'components'} onSelect={() => handleSelect("components")}>
              COMPONENTS
            </TabButton>
            <TabButton isSelected={topic === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={topic === 'props'} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={topic === 'state'} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            {!topic ? (
              <span>Please select a topic.</span>
            ) : (
              <>
                <h3>{EXAMPLES[topic].title}</h3>
                <p>{EXAMPLES[topic].description}</p>
                <pre>
                  <code></code>
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
