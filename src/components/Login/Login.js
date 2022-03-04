import { Container, LoginContainer, LostPass } from './styles';
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import './style.css';
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = (props) => {
  const navigate = useNavigate();
  const [emailLogin, setEmailLogin] = useState("");
  const [senha, setSenha] = useState("");

  function reload() {
    window.location.reload()
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const login = {
      email: emailLogin,
      password: senha,
    };

    axios.post("/auth/login", login).then((response) => {
      const token = response.data.token;
      localStorage.setItem("token", token);
    });

    navigate("/home");
  };

  return (
    
    <div className="container">
    <div className="card mt-2 bg-warning">
      <div className="card-title">
        <div className="row">
          <div className="col">
            
            <h3 className="mx-3 my-3 text-center">Acessar Conta</h3>
          </div>
        </div>
      </div>
      
      <LoginContainer>
      <form className="mx-8" onSubmit={handleSubmit}>
        <input
          required
          type="email"
          placeholder="E-mail"
          id="emailLogin"
          className="mx-4 w-48 text-black"
          onChange={(event) => setEmailLogin(event.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Senha"
          id="senha"
          className="mx-4 w-48 text-black"
          onChange={(event) => setSenha(event.target.value)}
        />
        
          <LostPass>
            <a href='!#'>
              <span class="senhaLogin">Esqueceu sua senha?</span>
            </a>
            <input type='submit' value='Acessar!' class="submitButton"/>
          </LostPass>
        </form>

             </LoginContainer>
  </div>
  </div>
  );
};
export default Login;
