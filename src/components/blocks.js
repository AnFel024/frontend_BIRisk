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
                <h3 class="mt-5"><b>Bloques</b></h3>
                
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Nonce</th>
                            <th>Timestamp</th>
                            <th>Hash del bloque anterior</th>
                            <th>Hash del bloque actual</th>
                            <th>Numero de transacciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.transactions.slice(0).map(item => 
                            <tr key={item}>
                                <td><b>{item.Nonce}</b></td>
                                <td><b>{item.timestamp}</b></td>
                                <td><b>{item.hash_pointer}</b></td>
                                <td><b>{item.id}</b></td>
                                <td><b>{item.number_of_transactions}</b></td>
                            </tr>
                        )}        
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default Transactions;