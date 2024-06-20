import { MENU_BUTTONS } from "../../data";
import TabButton from "../TabButton/TabButton";

export default function Tabs({ children, buttons, ContainerType = "menu" }) {
  
  return (
    <>
      <ContainerType>
        {buttons}
      </ContainerType>
      {children}
    </>
  );
}
