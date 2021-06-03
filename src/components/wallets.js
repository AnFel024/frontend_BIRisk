import React, { Component } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';

const endpoint = 'http://192.168.0.7:8002/api/iConsultarFondos/'
class wallets extends Component {
    constructor(props){
        super(props);
        this.state = {
            wallets: [],
        }
    }
    
    componentDidMount() {
        axios.get(endpoint)
            .then(res => {
                console.log(res.data)
                this.setState({ wallets : JSON.parse(res.data) });
            })
    }

    render(){
        return (
            <Container>
                <h3 class="mt-5"><b>Informacion de Billeteras</b></h3>
                <p>{this.state.wallets.slice(0).amount}</p>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Llave privada</th>
                            <th>Llave publica</th>
                            <th>Cantidad (BC1Coins)</th>
                            <th>Nombres</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.wallets.slice(0).map(item => 
                            <tr key={item}>
                                <td><b>{item.private_key}</b></td>
                                <td><b>{item.public_key.replace(',','')}</b></td>
                                <td><b>{item.amount}</b></td>
                                <td><b>{item.name} {item.last_name}</b></td>
                            </tr>
                        )}        
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default wallets;