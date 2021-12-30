import { useState, useEffect } from "react";
import { Typography } from "@mui/material";

export default function Home() {
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
      <Typography variant="h1">
        Hello World
      </Typography>
      <Typography variant="body1">{data}</Typography>
    </>
  );
}
