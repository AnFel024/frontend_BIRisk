import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import axios from 'axios';

const endpoint = '/get_chain'
const endpoint_transaction = 'http://192.168.0.7:8000/api/transaction_list'
const endpoint_mine = 'http://192.168.0.7:8000/mine_block'

class Status extends Component {
    constructor(props) {
        super(props);
        this.state = {
            length: [],
            address: '',
        }
    }

    componentDidMount() {
        axios.get(endpoint)
            .then(res => {
                const length = res.data.length;
                this.setState({ length });
            })
        axios.get(endpoint_transaction)
            .then(res => {
                let tam_transactions = 0
                res.data.slice(0).map(item => {
                    console.log(item.block_position)
                    if (item.block_position == '0'){
                        tam_transactions += 1;
                        console.log('Entro')
                    }
                })     
                this.setState({ tam_transactions });
            })
    }

    handleMine(event) {
        axios.get(endpoint_mine).
            then(res => {
                console.log(res.data)
            })
    }

    render() {
        return ( <Container>
            <br/>
            <Row>
            <Col sm = "6" >
                <h5><div><i className = "fa fa-cubes" ></i></div>Numero de bloques minados <hr/></h5>
            <h5 style = {{ color: '#007bff' }} >#<b>{ this.state.length }</b></h5>
            </Col> 
            <Col sm = "6"><br/>
            <h5><div>Transacciones pendientes por minar.  (<a href = "" onClick={this.handleMine}><i className = "fa fa-refresh" ></i></a>)<hr/>
            <h5 style = {{ color: '#007bff' } } >{this.state.tam_transactions}</h5></div></h5>
            </Col> 
            </Row> 
            </Container>
        )
    }
}

export default Status;