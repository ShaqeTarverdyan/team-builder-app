import React from 'react';
import { Route, Switch } from "react-router-dom";
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Navbar from './components/header/Navbar';
import Home from './components/Home';
import AccountPage from './components/account/AccountPage';
import EditAccount from './components/account/EditAccount';
import TopicsDashboard from './components/topics/TopicsDashboard';
import Projects from './components/projects/Projects';

const  App = () => {
  return (
    <div >
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component = {SignIn}/>
        <Route exact path="/register" component={SignUp}/>
        <Route exact path="/account" component={AccountPage}/>
        <Route exact path="/account/edit" component={EditAccount}/>
        <Route exact path="/topics" component={TopicsDashboard}/>
        <Route exact path="/projects" component={Projects}/>
      </Switch>
    </div>
  );
}

export default App;
