import React, { useState } from "react";
import {  Button, Container,TextField, Typography, makeStyles, IconButton, RadioGroup, FormControlLabel, Radio} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import Header from '../../Components/Header/Header'
import ResponderPesquisa from '../../Components/ResponderPesquisa/ResponderPesquisa'
import RemoveIcon from '@material-ui/icons/Remove';
import Icon from '@material-ui/core/Icon';
import './style.css';


export default function AnswerResearch(){
  
   
    return(
        
        <div >
        
            <Header />
            <ResponderPesquisa />
        </div>
    );
}

