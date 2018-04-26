import React, { Component } from "react";
import { Route, Link} from 'react-router';
import '../css/Recipes.css';
import EditRecipe from '../js/EditRecipe';
import DeleteRecipe from '../js/DeleteRecipe';
import CreateProposal from '../js/CreateProposal';
import CreateRecipe from "./CreateRecipe";
import RecipeList from "./RecipeList";

class Recipes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            recipes: [], 
        };
        this.getRec = this.getRec.bind(this);
        this.views = this.views.bind(this);
        this.getRec();
    }
    
    shouldComponentUpdate(nextProps, nextState){
        //nextState.Loaded !== this.state.Loaded || 
        return true;
    }
    componentWillMount(){
        this.views();
    }
    componentDidMount(){
        
    }
    getRec(_){
        fetch('http://localhost:5000/recipes')
        .then(response => response.json())
        .then(data => {
            console.log(data.data);
            this.setState({recipes: data.data, Loaded: true});
        })
        .then(data => this.render())
        .catch(err => console.log(err))
    }
    views(){
        const {recipes} = this.state;
        const howManyRecipes = recipes.length;
        const view = howManyRecipes > 0 ? 'hi' : <Route component={CreateProposal}/>
    }
    render() {
        const {recipes} = this.state;
        var howManyRecipes = 0;
        recipes.forEach(value => {
            if(value["TITLE"] && value["IMG"] && value["INFO"]){
                howManyRecipes++;
            }
        })
        return (
            <div>
                <div>Our community did {howManyRecipes} recipes</div>
                <RecipeList recipeList={this.state.recipes}/>
            </div>     
        )
    }
}

export default Recipes;