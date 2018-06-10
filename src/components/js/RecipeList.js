import React, { Component } from "react";
import { Router, Route, Link, Switch} from 'react-router';
import '../css/RecipeList.css';
import Recipes from "./Recipes";
import RecipeListElem from "./RecipeElem";

class RecipeList extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            recipes: this.props.recipeList,
        }
        this.renderRec = this.renderRec.bind(this);
    }
    renderRec(recipes){
        var recipe, id, title, img, info;
        for(let key in recipes){
            if(recipes[key].constructor == Number){
                id = recipes[key];
            }else if(key == "TITLE"){
                title = recipes[key];
            }else if(key == "IMG"){
                img = recipes[key];
            }else if(key == "INFO"){
                info = recipes[key];
            }
            (title && info) ? recipe = <RecipeListElem title={title} img={img} info={info} /> : null;
        }
        return recipe;
    }
    render(){
        const data = this.props.recipeList;
        return(
            <div>
                <div className="recipe-list">{data ? data.map(this.renderRec) : null}</div>
            </div>
        );
    }
}

export default RecipeList;