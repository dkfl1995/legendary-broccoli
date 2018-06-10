import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import '../css/App.css';
import Header from '../js/Header';
import Recipes from '../js/Recipes';
import CreateRecipe from '../js/CreateRecipe';
import Main from '../js/Main';


class App extends Component {
  constructor(props){
    super(props); 
  }
  render(){
    return(
        <div className="relative app">  
          <div className="header-box sticky">
            <Header/>
          </div>
          <div className="relative main-box">
            <Main/>
          </div> 
        </div>
    );
  }
}

export default App;
