import { CORE_CONCEPTS } from "./data";
import Header from './components/Header/Header'
import Concepts from './components/Concepts/Concepts'

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
                <Concepts key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
