import React, {Component} from 'react';
import '../components/Header.css';
import MobileMenu from '../components/MobileMenu.js';

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
            menuClasses.push('yellowed', 'rounded');
        }
        return (
            <div>
                <div className="header container">
                    <div className={"menu " + menuClasses.join(' ')} onClick={this.animateMenu}>
                        <div className={"line-1 " + lineClasses.join(' ')}></div>
                        <div className={"line-2 " + lineClasses.join(' ')}></div>
                        <div className={"line-3 " + lineClasses.join(' ')}></div>
                    </div>
                    <div className="indicator-box">
                        <div className="indicator">
                            <i className="icon ion-arrow-swap"></i>
                            <div className="count"></div>
                        </div>
                        <div className="indicator">
                            <i className="icon ion-heart"></i>
                            <div className="count"></div>
                        </div>
                        <div className="indicator">
                            <i className="icon ion-bag"></i>
                            <div className="count"></div>
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
    'Home',
    'Shop',
    'Blog',
    {'Pages': ['Contact', 'FAQ', '404 Page', 'Coming soon']},
    'Products',
    'Brands',
    'Today\'s deals',
    'New arrivals',
    'Gift cards'
];

export default Header;