import React from 'react'
import { Component } from 'react'
import Display from './Display'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import logoImg from '../logo.svg'

class Home extends Component {
    render() {
        return (
            <div>
                
                <br/>
                <Container>
                    <Carousel>
                        <Carousel.Item>
                            <img 
                            className="d-block w-100"
                            src={logoImg}
                            alt="ai text generator"/>
                        </Carousel.Item>
                    </Carousel>
                    <br />
                    <br />
                    <h1> 🔥👌 Online Artificial Intelligence AI (API) with OpenAI 🤯🔥 </h1>
                    <br />
                    <br />
                </Container>
            </div>
        )
    }
}

export default Home;
