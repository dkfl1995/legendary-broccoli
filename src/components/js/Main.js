import React, {Component} from 'react';
import Recipes from './Recipes';
import {Switch , Route, Link} from 'react-router-dom';
import CreateRecipe from './CreateRecipe';
import Register from './Register';
import Login from './Login';

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
                    <Route path="/recipes" component={Recipes} />
                    <Route path="/new" component={CreateRecipe} />
                    <Route path="/login" component={Login} />
                    <Route path="/account" component={Register} />
                </Switch>
            </div>
        );
    }
}

export default Main; 