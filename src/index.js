import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./styles/global";
import { Routes, Route } from 'react-router';
import { BrowserRouter, Navigate} from "react-router-dom";

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
import Main from "./pages/Main/index";
import Signup from "./pages/Singup/index";
import "./index.css";

	const user = localStorage.getItem("token");



ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Navbar />
    <BrowserRouter>
     
    <Routes>
    
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		
         
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
