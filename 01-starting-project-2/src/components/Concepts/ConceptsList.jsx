import Concept from "./Concept";
import { CORE_CONCEPTS } from "../../data";

export default function ConceptsList(){
  return(
    <ul>
    {CORE_CONCEPTS.map((concept) => (
        <Concept key={concept.title} {...concept} />
    ))}
  </ul>
  )
}
