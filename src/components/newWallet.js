import React, { Component } from 'react';
import { Form, Container, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';

const getEndpoint = 'http://192.168.0.7:8002/api/iNuevaBilletera/'
class newWallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            last_name: ''   
        }
        this.handleName = this.handleName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleName(event) {
        console.log('2')
        this.setState({ name: event.target.value });
    }

    handleLastName(event) {
        this.setState({ last_name: event.target.value });
    }

    componentDidMount() {
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(getEndpoint+this.state.name+'/'+this.state.last_name)   
        axios.get(getEndpoint+this.state.name+'/'+this.state.last_name).
            then(res => {
                console.log(res.data)
            })
    }

    render() {
            return ( 
                <Container>
                    <br/>
                    <h3><b> BC1Coiin</b></h3>
                    <h4>
                        <b style={{ color: '#007bff' }}>Creación de billetera.</b>
                    </h4>
        
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">
                                Nombre:
                            </Form.Label>
                            <Col sm="4">
                                <Form.Control onChange={this.handleName} value={this.state.name} placeholder="Ingresa el nombre.">
                                </Form.Control>
                            </Col>
                            <Form.Label column sm="2">
                                Apellido:
                            </Form.Label>
                            <Col sm="4">
                                <Form.Control onChange={this.handleLastName} value={this.state.last_name} placeholder="Ingresa el apellido.">
                                </Form.Control>
                            </Col>
                            </Form.Group>    <Form.Group as={Row}>
                                    <Col sm="5">
                                        <Button variant="primary" type="submit"> Enviar</Button>
                                    </Col>
                                </Form.Group>
                            </Form>
                    </Container>
            );
    }   
}

export default newWallet;