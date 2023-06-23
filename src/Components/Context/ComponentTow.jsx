import { useContext } from "react";
import { Store } from "../../App";

export default function ComponentTow() {
  const products = useContext(Store);
  return <div>{products[0]?.title}</div>;
}
