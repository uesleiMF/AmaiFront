import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./styles/global";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Sobrenos from "./pages/Sobrenos/Sobrenos";
import View from "./pages/View/View";
import Edit from "./pages/Edit/Edit";
import CadProd from "./pages/CadProd/Cadprod";
import Cadastro from "./pages/Cadastro/Cadastro";
import Cadu from './pages/Cadu/Cadu';
import Login from "./components/Login/Login";




ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Navbar />
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobrenos" element={<Sobrenos />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/cadu" element={<Cadu/>}/>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadprod" element={<CadProd />} />
        <Route path="/login" element={<Login/>} />

      </Routes>
   
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
