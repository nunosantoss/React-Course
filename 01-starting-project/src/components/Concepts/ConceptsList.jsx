import Concepts from "./Concepts";
import { CORE_CONCEPTS } from "../../data";

export default function ConceptsList(){
  return(
    <ul>
    {CORE_CONCEPTS.map((concept) => (
        <Concepts key={concept.title} {...concept} />
    ))}
  </ul>
  )
}
