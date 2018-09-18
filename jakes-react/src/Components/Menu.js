import React, { Component } from 'react';
import '../App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Button, ButtonGroup, Glyphicon } from 'react-bootstrap';
import MediaQuery from 'react-responsive';



class Menu extends Component {
    constructor(props) {
        super(props);
 
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.handleMenuSelect = this.handleMenuSelect.bind(this);

        this.state = {
            dropDownActive: false,
        };
    }

    toggleDropDown() {
        const currentState = this.state.dropDownActive;
        this.setState({ dropDownActive: !currentState });
    }

    handleMenuSelect(selectedView) {
        this.props.onSelect(selectedView);
        //this.setState({currentView: selectedView});
    }

    createMenuItems(style) {
        let menuItems = ['Essays', 'New Skills', 'Projects', 'Take of the Day', 'About Jake'];
        let navItems = [];

        menuItems.forEach((item, index) => {
            navItems.push(<p key={index} className={this.props.currentView === item ? "isCurrentView link" : "link"} onClick={() => this.handleMenuSelect(item)}>{item}</p>)
        });
        return navItems;
    }

    render() {
        return (
            <div className="Menu">
                <MediaQuery minWidth={701}>
                    {this.createMenuItems("link")}
                </MediaQuery>
                <MediaQuery maxWidth={700}>
                    <div className="navBar dropdown" onClick={this.toggleDropDown}>
                        <p className="currentView">{this.state.currentView}</p>
                        <i className="fas fa-bars hamburgerMenu"></i>
                        <div id="myDropdown" className={this.state.dropDownActive ? "dropdown-content show": "dropdown-content"} >
                            {this.createMenuItems()}
                        </div>
                    </div>
                </MediaQuery>
            </div>
        );
    }
}

export default Menu;