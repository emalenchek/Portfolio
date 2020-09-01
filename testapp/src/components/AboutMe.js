import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'reactstrap';
import grocery from '../grocery-project.JPG';
import covid from '../covid-stat-tracker.JPG';

class AboutMe extends Component {
    state = {
        name: "Ethan Malenchek"
    };

    render() {
        return(
            <div>
                <Container>
                    <Row className="mb-5 d-flex justify-content-center">
                        <Col className="col-md-8 col-sm-6">                               
                            <div>
                                <h1 className="text-center mb-5">About Me</h1>
                                <hr />
                            </div>
                                
                            <div>
                                <p className="text-center" style={{fontSize: 1.25 + 'em'}}>
                                    Hi! My name is Ethan Malenchek, and I am a senior at Ohio University
                                    studying Computer Science. I 
                                    plan to graduate in May 2021.
                                </p>
                                <p className="text-center" style={{fontSize: 1.25 + 'em'}}>
                                    I have 3 years of 
                                    HTML/CSS experience and solid foundations in 
                                    JavaScript. These foundations include Vanilla JS 
                                    and ES6, as well as libraries and frameworks including: 
                                    Node.js, Express.js, and React.js. Other technologies 
                                    that I use occasionally include: Git/GitHub, Bootstrap, Heroku, Postman,
                                    Bash/Shell, and MongoDB.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    
                    <Row className="mb-5 d-flex justify-content-center">
                        <Col className="col-md-8 col-sm-6">                               
                            <div>
                                <h1 className="text-center mb-5" id="projects">Projects</h1>
                                <hr />
                            </div>
                                
                            <div>
                                <Card className="mb-5">
                                    <div>                                       
                                        <img src={grocery} alt="Grocery Project" className="img-fluid" />
                                        <h3 className="text-center"><a href="https://salty-tor-54455.herokuapp.com/">Grocery List Application</a></h3>
                                        <p className="text-center"></p>
                                    </div>
                                </Card>
                            </div>
                            <div>
                                <Card className="mb-5">
                                    <div>                                       
                                        <img src={covid} alt="Covid Stats Tracker" className="img-fluid" />
                                        <h3 className="mt-5 text-center"><a href="https://covid-stats-tracker.herokuapp.com/">COVID Stats Tracker</a></h3>
                                        <p className="text-center"></p>
                                    </div>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default AboutMe;