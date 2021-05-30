import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logoImg from './../../assets/logo.png';
import FormularioCadastro from './../../Components/FormularioCadastro/FormularioCadastro'
import Header from '../../Components/Header/Header'
import img1 from  '../../assets/cadastro1.png'


import "./Style.css";
import { FormatListNumbered } from "@material-ui/icons";
import api from "../../Services/api";
const crypto = require('crypto');
const secret = 'MY_SUPER_SECRET_KEY'
//const hash = crypto.createHmac('sha256',)

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [CPF, setCPF] = useState("");
  const [chavePIX, setChavePIX] = useState("");
  const[useTerms, setUseTerms] = useState(false);
  
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(password !== confirmPassword){
      alert("as senhas não batem");
      return;
    }
    if(!useTerms){
      alert("voce precisa concordar com os termos de uso")
      return;
    }

    const data = {name, email, password, CPF, chavePIX}
    console.log({name, email, password, confirmPassword, CPF, chavePIX, useTerms})

    try{
      const response = await api.post('api/User/v1', data);
      history.push('login')
    } catch(error){
      alert('register failed, try again')
    }
  }
 return(
        
     <div className="globalstyle">
            <Header />
            <div className="content">
                <div className="first-block-register">
                    <h4>Usaremos essas informações apenas para pagamentos!</h4>                  
                    <img src={img1} alt=""/>                    
                </div>

                <div className="second-block-register">
                  <form onSubmit={handleSubmit} className="form-register">
                    <label htmlFor="">Name</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    <label htmlFor="">E-mail</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value) }/>
                    <label htmlFor="">Senha</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value) }/>
                    <label htmlFor="">Confirmar Senha</label>
                    <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value) }/>
                    <label htmlFor="">CPF</label>
                    <input type="text" value={CPF} onChange={e => setCPF(e.target.value) }/>
                    <label htmlFor="">Chave PIX</label>
                    <input type="text" value={chavePIX} onChange={e => setChavePIX(e.target.value) }/>
                    <div className="use-terms">
                      <input type="checkbox" checked={useTerms} onChange={e => setUseTerms(e.target.checked)}/><label htmlFor="">Concordo com os Termos de Uso</label>
                    </div>
                    <button type="submit" variant="contained" color="primary">
                      Enviar
                    </button>
                  </form>
                </div>
            </div>
        </div>

 ); 
}