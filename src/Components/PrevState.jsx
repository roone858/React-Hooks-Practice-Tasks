import { useEffect, useState } from "react";
import usePrevState from "./hooks/usePrevState";

export default function PrevState() {
  const [value, setValue] = useState("");
  const [state, setState] = useState("");
  const prevState = usePrevState(state);

  useEffect(() => {});
  useEffect(() => {
    if (state || value) {
      const debounce = setTimeout(() => setState(value), 3000);
      return () => clearTimeout(debounce);
    }
  }, [state, value]);

  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <div>
      <input onChange={handleChange} type="text" />
      <div>
        <p>Current State : {state}</p>
        <p>Prev State : {prevState}</p>
      </div>
    </div>
  );
}
