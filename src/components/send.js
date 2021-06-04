import React, { Component } from 'react';
import { Form, Container, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';

const getEndpoint = 'http://192.168.0.7:8002/api/iRegitrarTransaccion/'
class Send extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipient: '',
            amount: 0,
            time: '',
            sender: '',
        }
        this.handleRecipient = this.handleRecipient.bind(this);
        this.handleAmount = this.handleAmount.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleRecipient(event) {
        
        this.setState({ recipient: event.target.value });
    }

    handleAmount(event) {
        this.setState({ amount: event.target.value });
    }

    componentDidMount() {
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(getEndpoint+this.state.recipient+'/'+this.state.amount)   
        axios.get(getEndpoint+this.state.recipient+'/'+this.state.amount).
            then(res => {
                console.log(res.data)
            })
    }

    render() {
            return ( 
                <Container>
                    <br/>
                    <h3><b> BC1Coin</b></h3>
                    <h4>
                        <b style={{ color: '#007bff' }}>Envio de BC1coins.</b>
                    </h4>
        
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">
                                Destinatario:
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control onChange={this.handleRecipient} value={this.state.recipient} placeholder="Ingresa la direccion del destinatario.">
                                </Form.Control>
                            </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">Cantidad</Form.Label>
                                    <Col sm="2">
                                        <Form.Control onChange={this.handleAmount} placeholder="Cantidad" value={this.state.amount} />
                                    </Col>
                                    <Col sm="0.5">
                                        <b> BC1</b>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Col sm="5">
                                        <Button variant="primary" type="submit"> Enviar</Button>
                                    </Col>
                                </Form.Group>
                            </Form>
                    </Container>
            );
    }   
}

export default Send;