import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./styles/global";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./components/Login/Login";
import Sobrenos from "./pages/Sobrenos/Sobrenos";
import View from "./pages/View/View";
import Edit from "./pages/Edit/Edit";
import CadProd from "./pages/CadProd/Cadprod";
import Cadastro from "./pages/Cadastro/Cadastro";
import Edite from './pages/Edite/Edite';
import Vieww from './pages/Vieww/Vieww';
import Cadu from './pages/Cadu/Cadu';


axios.defaults.baseURL = "https://back-end-test-t.herokuapp.com/produtos";
axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <>
              <h2>Perfil</h2>
            </>
          }
        />
        <Route path="/sobrenos" element={<Sobrenos />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/vieww/:id" element={<Vieww/>}/>
        <Route path="/edite/:id" element={<Edite/>}/>
        <Route path="/cadu" element={<Cadu/>}/>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadprod" element={<CadProd />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
