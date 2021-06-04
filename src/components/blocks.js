import React, { Component } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';

const endpoint = 'http://192.168.0.7:8000/api/blockchain'
class Transactions extends Component {
    constructor(props){
        super(props);
        this.state = {
            transactions: [],
        }
    }
    
    componentDidMount() {
        axios.get(endpoint)
            .then(res => {
                console.log(res.data)
                this.setState({ transactions : res.data });
            })
    }

    render(){
        return (
            <Container>
                <h3 class="mt-5"><b>SARC APP</b></h3>                
            </Container>
        )
    }
}

export default Transactions;