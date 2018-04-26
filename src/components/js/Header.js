import React, {Component} from 'react';
import '../css/Header.css';
import MobileMenu from '../js/MobileMenu';

class Header extends Component{
    
    constructor(props){
        super(props);
        this.animateMenu = this.animateMenu.bind(this);
        this.state = {clickMenu: false};
    }
    animateMenu(){
        this.setState({clickMenu: !this.state.clickMenu});
    }
    render(){
        let lineClasses = [];
        let menuClasses = [];
        const elem = <MobileMenu itemList={menuList} clicked={this.state.clickMenu}></MobileMenu>;
        if(this.state.clickMenu){
            lineClasses.push('is-clicked');
            menuClasses.push(/*'yellowed', */'rounded-circle');
        }
        return (
            <div className="header-container">
                <div className="header">
                    <div className={"menu " + menuClasses.join(' ')} onClick={this.animateMenu}>
                        <div className={"line-1 " + lineClasses.join(' ')}></div>
                        <div className={"line-2 " + lineClasses.join(' ')}></div>
                        <div className={"line-3 " + lineClasses.join(' ')}></div>
                    </div>
                    <div className="indicator-box">
                        <div className="indicator">
                            <i className="icon ion-spoon"></i>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu">
                    {this.state.clickMenu ? elem : null}
                </div>
            </div>
            
        );
    }
}

const menuList = [
    ['Profile', 'dashboard'],
    ['Create New Recipe', 'new'],
    ['Show Existing Recipes', 'recipes'],
]

export default Header;