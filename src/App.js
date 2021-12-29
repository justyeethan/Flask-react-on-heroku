import { React, useState, useEffect } from "react";
import Home from "./Components/pages/Home";

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((payload) => {
        setData(payload.data);
      });
  });

  return (
    <>
      <h1>Hello World</h1>
      <h2>{data}</h2>
    </>
  );
}

export default App;
