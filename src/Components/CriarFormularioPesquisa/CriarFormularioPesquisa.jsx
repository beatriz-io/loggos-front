import React, { useState } from "react";
import {  Button, Container,TextField, Typography, makeStyles, IconButton, RadioGroup, FormControlLabel, Radio} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Icon from '@material-ui/core/Icon';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import './style.css';
import api from "../../Services/api";

const tiposDeInput = [
  'texto',
  'checkbox',
  'multipla escolha'
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root':{
      margin: theme.spacing(1)
    }
  },
  button: {
    margin: theme.spacing(1)
  },
  radio: {
    margin: theme.spacing(1)
  }

}))


function CriarFormularioPesquisa() {
  const classes = useStyles();
  const [option, setOption] = useState(['']);
  const [nomePesquisa, setNomePesquisa] = useState("");
  const [descricaoPesquisa, setDescricaoPesquisa] = useState('');
  const [inputFields, setInputFields] = useState([
    {question: '', inputType: tiposDeInput[0], options:option}    
  ]);


  let questions = inputFields;

  const data = {nomePesquisa, descricaoPesquisa, questions}

  const handleChangeIput= (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();    
    inputFields.forEach((input) => {
      
        if(input.options.length > 0 && input.inputType === 'texto'){
          input.options = '';
        } else {
          input.options = input.options.join();
        }
      
      })
    console.log(data)

      try{
        const response = await api.post('api/researchform/v1', data)
      } catch(error){
        alert('erro ao enviar a pesquisa')
      }

  }

  const handleAddFields = () => {
    setInputFields([...inputFields, {question:'', inputType:tiposDeInput[0], options:['']}])
  }

  const handleRemoveFields = (index) => {
    let values = [...inputFields];
    values.splice(index ,1);

    if(values.length === 0){
      values = [ {question: '', inputType: tiposDeInput[0], options:option}]
    }


    setInputFields(values);
  }

  const handleAddChoices = (i, index,event) => {
    const values = [...inputFields];
    values[index].options.push(option);
    setInputFields(values);
    console.log(inputFields)
  }

  const handleRemoveChoices = (i, index,event) => {
    const values = [...inputFields];
    console.log(i);
    values[index].options.splice(i, 1);
    setInputFields(values);
    console.log(values);
  }


  const handleChangeRadio = (index, event) => {
    const values = [...inputFields];    
    values[index].inputType = event.target.value;    

    if((values[index].inputType === 'checkbox' || values[index].inputType === 'multipla escolha') && values[index].options.length === 0){
      values[index].options = [''];
    }

    setInputFields(values);      
  }

  const handleSlaOq = (i, j, e) => {
    const values = [...inputFields];
    values[j].options[i] = e.target.value;
    setInputFields(values);
  }

  return (
    <Container className="container-criar-pesquisa"> 
    <div className="h1style">
      <h1>Crie sua pesquisa</h1>
    </div>
      <form className={classes.root} onSubmit={handleSubmit}>
        <div className="caixa-pergunta">
          <label htmlFor="">Nome da Pesquisa</label>
          <input type="text" value={nomePesquisa} onChange={(e) => setNomePesquisa(e.target.value)} />
          <label htmlFor="">Descrição da Pesquisa</label>
          <textarea type="textarea" value={descricaoPesquisa} onChange={(e) => setDescricaoPesquisa(e.target.value)}  />
        </div>
        
        {inputFields.map((inputField, index) => (          
          <div key={index} className="caixa-pergunta">                        
            <input
              name="question"
              placeholder="Digite sua pergunta"
              type="text"
              value={inputField.question}
              onChange={event => handleChangeIput(index, event)}
              fullWidth
            />

            <select name="" id="" onChange={(event) => handleChangeRadio(index, event)} className="selection-box">
              {tiposDeInput.map((tipo) => (
                <option value={tipo}>{tipo}</option>
              ))}
            </select>
            

            {
              (inputField.inputType === 'multipla escolha') &&  
                
              inputField.options.map((opcao, i) => (
              <div className="opcao" key ={i}>    
              <label htmlFor={`${"opcao"} ${i}me`}><RadioButtonUncheckedIcon />  </label>           
                  <input name='opcao' id={`${"opcao"} ${i}me`} placeholder={`${"Opção"} ${i+1}`} type="text" label='opcao' onChange={(event) => handleSlaOq(i, index, event)}/>
                  <IconButton onClick={(event) => handleRemoveChoices(i, index, event)}>
                    <RemoveIcon />
                  </IconButton>
                  <IconButton onClick={(event) =>handleAddChoices(i, index, event)}>
                    <AddIcon />
                  </IconButton>                
              </div>
                
               ))}

            {(inputField.inputType === 'checkbox') &&  
                
                inputField.options.map((opcao, i) => (
                <div className="opcao" key ={i}>    
                <label htmlFor={`${"opcao"} ${i}cb`}><CheckBoxOutlineBlankIcon />  </label>           
                    <input name='opcao' id={`${"opcao"} ${i}cb`} placeholder={`${"Opção"} ${i+1}`} type="text" label='opcao' onChange={(event) => handleSlaOq(i, index, event)}/>
                    <IconButton onClick={(event) => handleRemoveChoices(i, index, event)}>
                      <RemoveIcon />
                    </IconButton>
                    <IconButton onClick={(event) =>handleAddChoices(i, index, event)}>
                      <AddIcon />
                    </IconButton>                
                </div>
                  
                 ))}


            <IconButton onClick={() => handleRemoveFields(index)}>
              <RemoveIcon />
            </IconButton>
            <IconButton onClick={() =>handleAddFields()}>
              <AddIcon />
            </IconButton>
          </div>
        ))}

        <input type="submit" className={classes.button}  onSubmit={handleSubmit} value="ENVIAR" />
      </form>
    </Container>
  );
}

export default CriarFormularioPesquisa;
