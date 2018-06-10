import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Login extends Component {
    validate(){
        if(this.name){
            let arr = this.name.split('');
            console.log(arr);
        }
    }
    render() {
        return (
            <div>
                <form>
                    <label>Enter your username: </label><input type="text" ref={(name) => this.name = name} onChange={this.validate.bind(this)}/>
                    <label>Enter your password: </label><input type="password" ref={pw => this.pw = pw} onChange={this.validate.bind(this)}/>
                </form>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Login);