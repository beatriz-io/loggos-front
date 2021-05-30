import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from '../../Components/Header/Header'
import CriarFormularioPesquisa from '../../Components/CriarFormularioPesquisa/CriarFormularioPesquisa'

export default function CreateResearch(){
    return(
        <div className="contentCreateResearch">
            <Header />
            <CriarFormularioPesquisa />
        </div>
    );
}
