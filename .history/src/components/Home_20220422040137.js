import React from 'react'
import { Component } from 'react'
import Display from './Display'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import logoImg from '../logo2.png'
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

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
                            alt="ai text generator"
                            />
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
                            header="Product Descriptions"
                            title="Generate Product Descriptions"
                            text="Generate product descriptions for any type of products, simply enter the name and short product description to get started"
                            theLink="/product-description" />
                        </Col>

                        <Col>
                        <Display
                            header="Marketing Emails"
                            title="Cold Email Template"
                            text="This is perfect for marketing agents or companies who need fresh ideas daily on cold email content that is created by AI technology"
                            theLink="/cold-emails" />
                        </Col>

                        <Col>
                        <Display
                            header="Creating Tweets"
                            title="Generate Tweets"
                            text="Start generating tweet ideas with hashtags for your online social media campaigns on twitter. Create endless unique tweet ideas. no more writers block."
                            theLink="/tweets" />
                        </Col>
                    </Row>

                    <br />
                    <br />
                    <br />
                </Container>
            </div>
        )
    }
}

export default Home;
