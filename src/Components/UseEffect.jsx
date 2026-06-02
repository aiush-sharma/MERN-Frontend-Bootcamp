import React from "react";
import { useEffect } from "react";

function UseEffect() {
  const [data, useData] = useEffect(data);
  async function FetchData() {
    try {
      const response = await fetch("https://www.dummyjson.com/products");
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log("Error Occured", err);
    }
  }
  useEffect(() => {
    console.warn("component useeffect mounted");
    FetchData();
  });
  return (
    <>
      <h1>Hello world</h1>;<p>Its me Use Effect</p>
    </>
  );
}
export default UseEffect;
