import { useContext } from "react";
import { Store } from "../../App";

export default function ComponentOne() {
  const products = useContext(Store);
  return <div>{products[2]?.title}</div>;
}
