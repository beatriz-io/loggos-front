import React, { useState } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
function FormularioCadastro(props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [chavePIX, setChavePIX] = useState("");

  return (
    <div className="content-form-cadastro">
      <form onSubmit={
          (e) => {
              e.preventDefault();  
              if(password !== confirmPassword) {
                alert("As senhas não batem");
              }
              console.log({nome, email, password, confirmPassword, chavePIX})
      }}>        
        <TextField
          id="nome"
          label="Nome"
          variant="outlined"
          fullWidth
          margin="normal"
          value={nome}
          onChange={e => setNome(e.target.value)}
          style={
            {
              backgroundColor: "#FFF",
              width: "420px"
            }
          }
        />
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
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <TextField
          id="password"
          label="Confirm Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <TextField
          id="cpf"
          label="CPF"
          variant="outlined"
          fullWidth
          margin="normal"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
        <TextField
          id="chavePIX"
          label="ChavePIX"
          variant="outlined"
          fullWidth
          margin="normal"
          value={chavePIX}
          onChange={e => setChavePIX(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>
    </div>
  );
}

export default FormularioCadastro;
