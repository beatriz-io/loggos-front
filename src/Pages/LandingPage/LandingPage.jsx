import React ,{useState} from "react";
import logoImg from "../../assets/logo.png"
import './style.css';
import img1 from '../../assets/lp1.png';
import img2 from '../../assets/lp2.png';
import Header from './../../Components/Header/Header'

export default function LandingPage(){
    return(        
        <div className="globalstyle">
            <Header />
            <div className="content">
                <div className="first-block">
                    <h4>Os dados que você precisava.</h4>
                    <h4>Mas muito mais rápido</h4>
                    <img src={img1} />
                    <p>Criar uma pesquisa</p>
                </div>

                <div className="second-block">
                    <h4>Ganhar dinheiro na internet?</h4>
                    <h4>Respondendo pesquisas?</h4>
                    <img src={img2} />
                    <p>Eu quero</p>
                </div>
             </div>
        </div>
    )
        
        
}