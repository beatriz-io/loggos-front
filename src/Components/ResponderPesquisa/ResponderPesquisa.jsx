import React, { useState } from "react";
import { Button, TextField, Typography, Input, Container, Checkbox, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import api from "../../Services/api";
import './style.css';

function ResponderPesquisa(props) {

    let dados;        
    const handleLoadPage = async () => {
        try{
            const response = await api.get('api/researchform/v1')
            dados = response.data[0];
            console.log(dados);
        } catch(error){
            alert('erro ao enviar a pesquisa')
        }
    }

    window.onload = handleLoadPage;
    
    return (

    <form className='form-responder-pesquisa' onSubmit={
        (e) => {
            e.preventDefault();                          
    }}>
      <h1>{console.log(dados)}</h1>    
         {
            //  dados.map((pergunta) => (
            //      <div className='container-resposta'>
            //          <div className="container-pergunta"></div>
            //          <h3>{pergunta.pergunta}</h3>                     
            //          {
            //              pergunta.tipoInput === 'radio'  &&

            //             pergunta.opcoes.map((opcao, i) => (
            //                 <div className="opcoes-rb">
            //                     <input type="radio" value={opcao} label={opcao} id={`${opcao}rb`} name={pergunta.pergunta}/>
            //                     <label htmlFor={`${opcao}rb`}>{opcao}</label>
            //                 </div>
            //             ))
            //          }

            //          {
            //              pergunta.tipoInput === 'checkbox' &&   
                         
            //                 pergunta.opcoes.map((opcao, i) => (
            //                     <div className="opcoes-cb">
            //                         <input type="checkbox" value= {opcao} id={`${opcao}cb`} name = {pergunta.pergunta} />
            //                         <label htmlFor={`${opcao}cb`}>{opcao}</label>
            //                     </div>
            //                 ))
                            
            //             //  pergunta.opcoes.map((opcao) => (
            //             //     <FormControlLabel key={opcao} label={opcao} control={<Checkbox />} value={opcao} />
            //             //     ))
            //          }

            //          {
            //              pergunta.tipoInput === 'text' &&
            //              <input type="text" />
            //          }
            //      </div>
            //  ))
         
             }

     
      <input type="submit"  value="Enviar" />
              
    </form>
  );
}

export default ResponderPesquisa;
