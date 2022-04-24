import React from 'react';
import './App.css';
import Home from './pages/Home';
import Navigation from './components/Navigation'
import Login from './pages/Login'
import Register from './pages/Register'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navigation />
    <Switch>
   
    <Route path="/register">
      <Register />
    </Route>
    <Route path="/login">
      <Login />
      </Route>
      <Route exactPath="/">
      <Home />
    </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
