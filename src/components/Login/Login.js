import { LoginContainer, LostPass } from './styles';

import { toast } from "react-toastify";
import './style.css';

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, TextField, Link } from '@material-ui/core';
import React, { Component } from 'react';
import swal from 'sweetalert';

const axios = require('axios');
const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  login = () => {

    const pwd = bcrypt.hashSync(this.state.password, salt);

    axios.post('https://listpr.herokuapp.com/login', {
      username: this.state.username,
      password: pwd,
    }).then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user_id', res.data.id);
      this.props.history.push('/cadastro');
    }).catch((err) => {
      if (err.response && err.response.data && err.response.data.errorMessage) {
        swal({
          text: err.response.data.errorMessage,
          icon: "error",
          type: "error"
        });
      }
    });
  }

  render() {
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
      <form className="mx-8" >
        <input
         id="standard-basic"
         type="text"
         autoComplete="off"
         name="username"
         value={this.state.username}
         onChange={this.onChange}
         placeholder="User Name"
         required
       />
       <br /><b    />
        <input
          id="standard-basic"
          type="password"
          autoComplete="off"
          name="password"
          value={this.state.password}
          onChange={this.onChange}
          placeholder="Password"
          required      />
        
        <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            disabled={this.state.username == '' && this.state.password == ''}
            onClick={this.login}
          >
            Login
          </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </form>

             </LoginContainer>
  </div>
  </div>
  );
};
}
