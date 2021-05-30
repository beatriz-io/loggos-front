import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logoImg from './../../assets/logo.png';
import { Button, TextField, Typography } from "@material-ui/core";
import api from '../../Services/api';
import Header from './../../Components/Header/Header'


export default function Login(props) {  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function login(e){
    e.preventDefault();

    const data = {
        email,
        password
    }

    try{
        const response = await api.post('api/Auth/v1/signin', data);
        localStorage.setItem('email', email);
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);

        history.push('/userHome');
    } catch(eror) {
        alert('login failed: try again');
    }
  }

  return (
    <div className="globalstyle">
    <Header />
    <div className="content">

        <div className="second-block-register">
          <form onSubmit={login} className="form-register">
            <label htmlFor="">E-mail</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <label htmlFor="">Senha</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button type="submit" variant="contained" color="primary">
             Entrar
           </button>
          </form>
        </div>
    </div>
</div>

    // <form onSubmit={login}>
    //   <Typography variant="h3">Login</Typography>

    //   <TextField
    //     id="email"
    //     label="Email"
    //     variant="outlined"
    //     fullWidth
    //     margin="normal"
    //     value={email}
    //     onChange={e => setEmail(e.target.value)}
    //   />
    //   <TextField
    //     id="password"
    //     label="Password"
    //     variant="outlined"
    //     type="password"
    //     fullWidth
    //     margin="normal"
    //     value={password}
    //     onChange={e => setPassword(e.target.value)}
    //   />
    //   <Button type="submit" variant="contained" color="primary">
    //     Entrar
    //   </Button>
    // </form>
  );
}   
