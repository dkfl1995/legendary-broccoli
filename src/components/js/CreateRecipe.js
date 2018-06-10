import React, {Component, Fragment} from 'react';
import {Link, Route, Redirect} from 'react-router-dom';
import '../css/CreateRecipe.css';

import Recipes from './Recipes';


class CreateRecipe extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            img: '',
            info: '',
            msg: ''
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.createRecipe = this.createRecipe.bind(this);
        this.handleChangeImg = this.handleChangeImg.bind(this);
        this.handleChangeInfo = this.handleChangeInfo.bind(this);
    }
    handleChangeTitle(event){
        var value = event.target.value;
        this.setState({title: value});   
    }
    handleChangeImg(event){
        var value = event.target.value;
        this.setState({img: value});   
    }
    handleChangeInfo(event){
        var value = event.target.value;
        this.setState({info: value});   
    }
    createRecipe(){
        if(!this.state.img || !this.state.info || !this.state.title){

        }else{
            fetch('http://localhost:5000/recipe/new',{
                method: 'POST',
                headers: {
                    "Access-Control-Allow-Origin": "http://localhost:3000",
                    "Content-type": "application/json"
                },
                body: JSON.stringify(this.state) 
            })
            .then(response => response.json(this.state))
            .then(data => {
                data == "success" ? this.setState({msg: "Thanks"}): null; 
            })
            .catch(err => console.log(err));
        }
    }
    render(){
        return(
            <div>
                <form>
                    <input type="text" placeholder="Name of recipe" onChange={this.handleChangeTitle} value={this.state.title} required/>
                    <input type="text" placeholder="http://www.domain.com/img" onChange={this.handleChangeImg} value={this.state.img} required/>
                    <textarea rows="20" cols="20" onChange={this.handleChangeInfo} value={this.state.info} required/>
                    <input type="submit" value="Save" onClick={e => {e.preventDefault(); this.createRecipe()}}/>
                </form>
                {
                    this.state.msg ? 
                    <Fragment>
                        <div>{this.state.msg}</div>
                        <Redirect to={Recipes}/>
                    </Fragment> 
                    : null
                }
            </div>
        );
    }
}

export default CreateRecipe;