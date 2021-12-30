import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/assets/global/Navbar";

import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import { Container } from "@mui/material";
import Footer from "./Components/assets/global/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Container maxWidth="md">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
