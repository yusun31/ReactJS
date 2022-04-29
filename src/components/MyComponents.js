import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponents extends Component {
    // static defaultProps = {
    //     name: "리액트JS"
    // }
    render() {
        const { name, age } = this.props;
        return (
        <div>
           <h3> Hello {name} / {age} </h3>
        </div>
        );
    }
}
MyComponents.defaultProps = {
    name: "리액트JS"    
};
MyComponents.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
};
export default MyComponents;