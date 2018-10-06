import React, { Component } from 'react';
import '../App.css';
import SingleCard from './Card.js';

class ContentContainer extends Component {

    render() {
        return (
            <div className="Content">
                <h1 className="selectedHeader">{this.props.currentView}</h1>
                <div className="cardDeckContainer">
                    <SingleCard/>
                    <SingleCard/>
                    <SingleCard/>
                    <SingleCard/>
                    <SingleCard/>
                </div>  
            </div>
        );
    }
}

export default ContentContainer;