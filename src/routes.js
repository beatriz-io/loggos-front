import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import UserHome from './Pages/UserHome/UserHome';
import CreateResearch from './Pages/CreateResearch/CreateResearch';
import AnswerResearch from './Pages/AnswerResearch/AnswerResearch';





export default function Routes(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path ="/" exact component={LandingPage} />
          <Route path ="/register" component={Register} />
          <Route path ="/login" component={Login} />
          <Route path = "/userHome" component={UserHome} />
          <Route path = "/createResearch" component={CreateResearch} />
          <Route path = "/answerresearch" component={AnswerResearch} />
        </Switch>
      </BrowserRouter>
    )
  }