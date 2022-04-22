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
                    <p> Start by picking any of the use-cases below to start generating AI content.</p>
                    <br />
                    <br />
                    <Row>
                        <Col>
                        <Display 
                            header="Marketing Emails"
                            title="Cold Email Template"
                            text="This is perfect for marketing agents or companies who need fresh ideas daily on cold email content"
                            theLink="/cold-emails" />

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;
