import React, { useState } from "react";
import { Button, TextField, Typography } from "@material-ui/core";

export default function FormularioLogin(props) {  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={
        (e) => {
            e.preventDefault();  
            console.log({email, password})
    }}>
      <Typography variant="h3">Login</Typography>

      <TextField
        id="email"
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Entrar
      </Button>
    </form>
  );
}   
