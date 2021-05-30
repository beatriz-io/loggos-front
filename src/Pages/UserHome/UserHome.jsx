import { AssignmentReturnRounded } from "@material-ui/icons";
import React, { useState } from "react";
import Header from '../../Components/Header/Header'
import './style.css'

export default function UserHome(){
    const [classNamePrimary, setClassNamePrimary] = useState("user-home-content-active")
    const [classNameSecundary, setClassNameSecundary] = useState("user-home-content-inactive")
    const handleClass = () => {
        if(classNamePrimary === "user-home-content-active"){
            setClassNamePrimary("user-home-content-inactive")
            setClassNameSecundary("user-home-content-active")
        } else if(classNamePrimary === "user-home-content-inactive"){
            setClassNamePrimary("user-home-content-active")
            setClassNameSecundary("user-home-content-inactive")
        }
        //return 'user-home-content-active'
    }
    //"user-home-content"
    return(
        <div>
            <Header />
            <div className="user-home-content">
                <div className={classNamePrimary} onClick={handleClass}>
                    <p>Minhas Pesquisas</p>
                </div>
                <div className={classNameSecundary} onClick={handleClass}>
                    <p>Minhas Respostas</p>
                </div>
            </div>
        </div>
    );
}