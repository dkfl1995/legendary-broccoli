import React, {Component} from 'react';
import {Switch, Link, Route} from 'react-router-dom';
import '../css/CreateProposal.css';
import CreateRecipe from './CreateRecipe';

class CreateProposal extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            //btnClicked: false
        };
        this.toggleCreateRecipe = this.toggleCreateRecipe.bind(this);
    }
    toggleCreateRecipe(){
        this.setState(this.state, () => {
            this.state.btnClicked = !this.state.btnClicked;
        });
        
    }
    render(){  
        
        return(
            <div>
                <div className="proposition-box"></div>
                <h1>It seems you love to cook</h1>
                <p> I highly recommend you to create a new recipe to have access for it everytime, everywhere, for everybody</p>
                <Link to="/new"><button className="create-btn">Create</button></Link>        
            </div>
            
        );
    }
}

export default CreateProposal;