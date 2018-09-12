import React, { Component } from 'react';
import '../App.css';

class Title extends Component {
    render() {
        return (
            <div className="Intro-Title">
                <h1 className="Title">{"Jake's Takes"}</h1>
                <p className="Intro">{'A collection of essays and writings cataloging my erratic array of interests'}</p>
            </div>
        );
    }
}

export default Title;
