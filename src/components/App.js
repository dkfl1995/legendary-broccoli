import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import logo from '../logo.svg';
import './App.css';
import Header from '../components/Header';

const baseURI = 'http://localhost:5000';

class App extends Component {
  constructor(props){
   super(props); 
   this.state = {
    recipes: []
   };
   this.renderRec = this.renderRec.bind(this);
   this.getProd = this.getRec.bind(this);
  }
  renderRec(recipe){
    return <div key={recipe.id}>{recipe.name}</div>
  }
  componentDidMount(){
    this.getProd();
  }
  getRec(_){
    fetch('http://localhost:5000/recipes')
    .then(response => response.json())
    .then(response => this.setState({recipes: response.data}))
    .catch(err => console.log(err))
  }
  render() {
    const { recipes } = this.state;
    console.log(this.state);
    return (
      <div>
        <Header></Header>
        <div>{recipes.map(this.renderRec)}</div>
        
      </div>
    );
  }
}

export default App;
