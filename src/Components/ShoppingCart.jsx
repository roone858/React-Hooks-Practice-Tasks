import { useState, useEffect } from "react";

export default function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [data, setData] = useState([]);

  function handleBuy(id) {
    const product = data.find((p) => p.id == id);
    const newItems = [...items, product];
    setItems(newItems);
    localStorage.setItem("cartItems", JSON.stringify(newItems));
  }
  function handleDelete(id) {
    const filterItems = items.filter((item) => item.id != id);
    setItems(filterItems);
    localStorage.setItem("cartItems", JSON.stringify(filterItems));
  }

  useEffect(() => {
    const localItems = JSON.parse(localStorage.getItem("cartItems"));
    setItems(localItems);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <div className="border " style={{ backgroundColor: "gray" }}>
        <h2> Your Shopping Cart</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id }>
              {" "}
              {item.title}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <ul>
        {data?.map((p) => (
          <li className="p-2 d-flex justify-content-between" key={p.id}>
            {p.title}
            <button onClick={() => handleBuy(p.id)}>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
