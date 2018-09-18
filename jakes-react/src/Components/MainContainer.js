import React, { Component } from 'react';
import '../App.css';
import Menu from './Menu.js';
import ContentContainer from './ContentContainer.js';

class MainContainer extends Component {
    constructor(props) {
        super(props);


    }


    render() {
        return (
            <div className="flex-container">
                <Menu currentView={this.props.currentView} onSelect={this.props.handleMenuSelect}/>
                <ContentContainer currentView={this.props.currentView}>

                </ContentContainer>
            </div>
        );
    }
}

export default MainContainer;