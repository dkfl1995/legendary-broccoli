import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Register extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>Type your fist name please: </label><input type="text" />
                </form>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Register);