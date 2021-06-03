import React, { Component } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';

const endpoint = 'http://192.168.0.7:8000/api/transaction_list'
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
                this.setState({ transactions : res.data });
            })
    }

    render(){
        return (
            <Container>
                <h3 class="mt-5"><b>Transacciones</b></h3>
                <p>(Refresque la pagina para obtener nuevas transacciones.)</p>
                
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Origen</th>
                            <th>Destino</th>
                            <th>Cantidad (BC1Coins)</th>
                            <th>Marca de tiempo</th>
                            <th>Bloque de transaccion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.transactions.slice(0).map(item => 
                            <tr key={item}>
                                <td><b>{item.sender}</b></td>
                                <td><b>{item.receiver}</b></td>
                                <td><b>{item.amount}</b></td>
                                <td><b>{item.timestamp}</b></td>
                                { item.block_position == '0' ? (
                                    <td><b>Transaccion pendiente de minar</b></td>
                                    ) : (<td><b>{item.block_position}</b></td>)}
                            </tr>
                        )}        
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default Transactions;