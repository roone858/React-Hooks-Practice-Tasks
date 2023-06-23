// import FetchData from "./Components/FetchData";
// import ToDoList from "./Components/ToDoList";
// import Form from "./Components/Form";
// import ThemeSwitcher from "./Components/ThemeSwitcher";
// import ShoppingCart from "./Components/ShoppingCart";
// import MousePosition from "./Components/MousePosition";
// import DebouncingInput from "./Components/DebouncingInput";
import { createContext } from "react";
import ModalDialog from "./Components/ModalDialog";
import { products } from "./products";
import ComponentOne from "./Components/Context/ComponentOne";
import ComponentTow from "./Components/Context/ComponentTow";
// import PrevState from "./Components/PrevState";
export const Store = createContext();
function App() {
  return (
    <>
    <Store.Provider value={products}>
      <ModalDialog content={<p> Hi. How are u ? </p>} />
      <ComponentOne/>
      <ComponentTow/>
    
    </Store.Provider>
    </>
  );
}

export default App;
