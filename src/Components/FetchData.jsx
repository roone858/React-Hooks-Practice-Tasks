import { useEffect, useState } from "react";

export default function FetchData() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      <ul>
        {data?.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
