import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/MobileMenu.css';
import Header from '../js/Header';
import Dashboard from '../js/Dashboard';

export class Arrow extends React.Component{
    render(){
        return null;
    }
}

class MobileMenu extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        //Getting prop array of menu list
        var list = this.props.itemList;
        //checking
        console.log(list);
        //service var for view result in unordered list
        var arr;
        //pushing result of mapping prop array
        arr = list.map((value, key) => {
            // //if the elem of array is object with submenu elems we doing operation below
            // if(typeof(key) === 'object'){
            //     //creating service array for the result
            //     var el = [];                
            //     //pushing list of obj elems within li wrap.
            //     for(var name in key){
            //         //creating sublist-- array for iterating submenu elems
            //         var obj = key[name];
            //         var sublist = obj.map(function(value,index){
            //             //pushing result in service array
            //             el.push(<li key={index}><Link to="/create-recipe">{key[name][index]}</Link></li>);
            //         });
            //     }
            //     //return to render submenu list elems
            //     return <li key={key}>{name}<ul>{el}</ul></li>;
            // }
            //return to render menu list elems
            var anchor, name;
            value.map((subvalue, subkey) => {
                anchor = subvalue;
                name = value[0]; 
                console.log(anchor);
            });
            return <li key={key}><Link to={'/' + anchor}>{name}</Link></li>
        });
        return(
            <ul>
                {arr}
            </ul>
        );
    }
}

export default MobileMenu;