import React, { Component } from 'react';
import '../App.css';
import { PageHeader } from 'react-bootstrap';

class Title extends Component {
    render() {
        return (
            <div className="Intro-Title">
                <div className="titleContainer">
                    <h1 onClick={() => this.props.handleTitleSelect(this.props.homeTitle)} className="Title">{"Jake's Takes"}</h1>
                </div>
                <p className="Intro">{'A collection of essays and writings cataloging my erratic array of interests'}</p>
            </div>
        );
    }
}

export default Title;
