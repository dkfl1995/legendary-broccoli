import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import '../css/CreateRecipe.css';

class CreateRecipe extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            img: '',
            info: '',
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.createRecipe = this.createRecipe.bind(this);
        this.handleChangeImg = this.handleChangeImg.bind(this);
        this.handleChangeInfo = this.handleChangeInfo.bind(this);
    }
    handleChangeTitle(event){
        console.log(event.target.value);
        var value = event.target.value;
        this.setState({title: value});   
    }
    handleChangeImg(event){
        console.log(event.target.value);
        var value = event.target.value;
        this.setState({img: value});   
    }
    handleChangeInfo(event){
        console.log(event.target.value);
        var value = event.target.value;
        this.setState({info: value});   
    }
    createRecipe(){
        if(!this.state.img || !this.state.info || !this.state.title){
            
        }else{
            fetch('http://localhost:5000/recipe/new',{
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(this.state) 
            })
            .then(response => response.json(this.state))
            .then(data => {
                data == "success" ? this.setState({msg: "Thanks"}): null; 
                console.log(data)
            })
            .catch(err => console.log(err));
        }
    }
    render(){
        // console.log(this.state);
        return(
            <div>
                <form onSubmit={this.createRecipe}>
                    <input type="text" placeholder="Name of recipe" onChange={this.handleChangeTitle} value={this.state.title} required/>
                    <input type="text" placeholder="http://www.domain.com/img" onChange={this.handleChangeImg} value={this.state.img} required/>
                    <textarea rows="20" cols="20" onChange={this.handleChangeInfo} value={this.state.info} required/>
                    <Link to="/recipes"><input type="submit" value="Save" /></Link>
                </form>
                
            </div>
        );
    }
}

export default CreateRecipe;