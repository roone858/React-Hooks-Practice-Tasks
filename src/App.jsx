// import FetchData from "./Components/FetchData";
// import ToDoList from "./Components/ToDoList";
// import Form from "./Components/Form";
// import ThemeSwitcher from "./Components/ThemeSwitcher";
// import ShoppingCart from "./Components/ShoppingCart";
// import MousePosition from "./Components/MousePosition";
// import DebouncingInput from "./Components/DebouncingInput";
import { createContext, useEffect, useState } from "react";
import ModalDialog from "./Components/ModalDialog";
import ComponentOne from "./Components/Context/ComponentOne";
import ComponentTow from "./Components/Context/ComponentTow";
// import PrevState from "./Components/PrevState";
export const Store = createContext();
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!products.length) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((result) => setProducts(result));
      console.log("i called fire");
    }
  }, [products]);
  return (
    <>
      <Store.Provider value={products}>
        <ModalDialog content={<p> Hi. How are u ? </p>} />
        <ComponentOne />
        <ComponentTow />
      </Store.Provider>
    </>
  );
}

export default App;
