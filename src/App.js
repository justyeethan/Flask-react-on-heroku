import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/assets/global/Navbar";

import Home from "./Components/pages/Home";
import About from "./Components/pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
