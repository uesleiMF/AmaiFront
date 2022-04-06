import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./styles/global";
import { Routes, Route } from 'react-router';
import { BrowserRouter} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Sobrenos from "./pages/Sobrenos/Sobrenos";
import View from "./pages/View/View";
import Edit from "./pages/Edit/Edit";
import CadProd from "./pages/CadProd/Cadprod";
import Cadastro from "./pages/Cadastro/Cadastro";
import Cadu from './pages/Cadu/Cadu';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";




ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Navbar />
    <BrowserRouter>
     
    <Routes>
            
         <Route exact path="/" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
         <Route path="/dashboard" element={<Dashboard/>} />
          
         
        <Route path="/home" element ={<Home />} />
        <Route path="/sobrenos" element={<Sobrenos />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/cadu" element={<Cadu/>}/>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadprod" element={<CadProd />} />
        
            
       

      </Routes>
   
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
