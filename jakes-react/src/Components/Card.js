import React, { Component } from 'react';
import '../App.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


class SingleCard extends Component {
    render() {
        return (
            <div className="cardContainer">
                <Card>
                    <CardImg top width="100%" className="cardImage" src="https://images.unsplash.com/photo-1534406315430-4d7cf92bc690?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b9a56c7acb7650c2c6370e44faee1711&auto=format&fit=crop&w=934&q=80" alt="Card image cap" />
                    <CardBody className="cardBody">
                        <CardTitle className="cardTitle">Hello, this is a test long card title.</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default SingleCard;