import { useSelector } from "react-redux";
import React from "react";

function navbarCustom() {
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default navbarCustom;
