import React, {Component} from 'react';
import Recipes from './Recipes';
import {BrowserRouter ,Switch , Route, Link} from 'react-router-dom';
import CreateRecipe from './CreateRecipe';
import '../css/Main.css';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.loopImg = this.loopImg.bind(this);
        this.state = {
            img: this.props.bgImgList
        };
    }
    loopImg(){

    }
    render(){
        var img = {
            background: 'url('+ bgImg +') no-repeat cover center center',
        };
        return(
            <div className="main container-fluid">
                <div onLoadedData={this.loopImg} style={img} className="bg"></div>
                <Switch>
                    <Route path="/recipes" component={Recipes}/>
                    <Route path="/new" component={CreateRecipe} />
                </Switch>
                <div>Photo by Gaelle Marcel on Unsplash</div>
            </div>
        );
    }
}

export default Main; 