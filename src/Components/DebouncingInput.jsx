import { useEffect, useState } from "react";

export default function DebouncingInput() {
  const [term, setTerm] = useState("");

  useEffect(() => {
    const search = () => {
      console.log("Searching For : " + term);
    };
    if (term) {
      const debounce = setTimeout(() => search(), 3000);
      return () => clearTimeout(debounce);
    }
  }, [term]);

  return (
    <div>
      <input type="search" onChange={(e) => setTerm(e.target.value)} />
    </div>
  );
}
