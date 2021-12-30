import { Typography } from "@mui/material";
import { useEffect } from "react";
export default function About() {
	useEffect(() => {
		document.title = 'About - Template'
	})
  return (
    <>
      <Typography variant="h1">About Section</Typography>
      <Typography variant="body1">
        This about section is all about developing a flask and react
        application.
      </Typography>
    </>
  );
}
