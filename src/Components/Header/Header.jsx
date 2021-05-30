import React ,{useState} from "react";
import logoImg from "../../assets/logo.png"
import {Link} from 'react-router-dom';
import './style.css';

export default function Header(){
    return(
        <div className="globalstyle">
            <section className="content-header">                        
                <div className="header">
                <img src={logoImg} alt="Loggos" />
                    <ul>
                        <li className="header1"><Link className="link" to="/"> Home</Link></li>
                        <li className="header1"><Link className="link" to="/">Sobre</Link></li>
                        <li className="header1"><Link className="link" to="/">Suporte</Link></li>
                        <li className="header2"> <Link className="link" to="/register">Cadastrar</Link></li>
                        <li className="header2"><Link className="link" to="/login" >Login</Link></li>
                    </ul>

                </div>
            </section>
        </div>
    )
}