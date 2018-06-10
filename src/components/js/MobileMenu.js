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

const MobileMenuElem = (props) => {
    //Getting prop array of menu list
    var list = props.itemList;
    //service var for view result in unordered list
    var arr;
    //pushing result of mapping prop array
    arr = list.map((value, key) => {
        var anchor, name;
        value.map((subvalue, subkey) => {
            anchor = subvalue;
            name = value[0]; 
        });
        return <li key={key}><Link to={'/' + anchor}>{name}</Link></li>
    });
    return(
        <ul>
            {arr}
        </ul>
    );
}

export default MobileMenuElem;