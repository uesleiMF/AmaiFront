import React, { Component } from 'react';
import swal from 'sweetalert';
import { Button,Link } from '@material-ui/core';
import { LoginContainer, LostPass } from './styles';

import { toast } from "react-toastify";
import './style.css';

import "bootstrap/dist/css/bootstrap.min.css";





const axios = require('axios');

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirm_password: ''
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  register = () => {

    axios.post('https://listpr.herokuapp.com/register', {
      username: this.state.username,
      password: this.state.password,
    }).then((res) => {
      swal({
        text: res.data.title,
        icon: "success",
        type: "success"
      });
      this.props.history.push('/');
    }).catch((err) => {
      swal({
        text: err.response.data.errorMessage,
        icon: "error",
        type: "error"
      });
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
    
          <input
            id="standard-basic"
            type="password"
            autoComplete="off"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            placeholder="Password"
            required
             />
            <input
            id="standard-basic"
            type="password"
            autoComplete="off"
            name="confirm_password"
            value={this.state.confirm_password}
            onChange={this.onChange}
            placeholder="Confirm Password"
            required
          />
<Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            disabled={this.state.username == '' && this.state.password == ''}
            onClick={this.register}
          >
            Register
          </Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/login">
            Login
          </Link>
          
          
          
          </form>
  
               </LoginContainer>
    </div>
    </div>
    );
  };
  }
  