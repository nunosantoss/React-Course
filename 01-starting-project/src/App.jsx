import image from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function generateRandom(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const dynamicMessage = reactDescriptions[generateRandom(2)];

  return (
    <header>
      <img src={image} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {dynamicMessage} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function Concepts(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

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
