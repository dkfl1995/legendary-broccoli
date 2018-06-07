import React, {Component} from 'react';
import Recipes from './Recipes';
import {Switch , Route, Link} from 'react-router-dom';
import CreateRecipe from './CreateRecipe';
import '../css/Main.css';

class Main extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        var img = {
            background: 'red',
        };
        return(
            <div className="main container-fluid">
                <div style={{img}} className="bg"></div>
                <Switch>
                    <Route path="/recipes" component={Recipes}/>
                    <Route path="/new" component={CreateRecipe} />
                </Switch>
            </div>
        );
    }
}

export default Main; 