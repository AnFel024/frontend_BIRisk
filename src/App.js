import React, { Component } from 'react';
import './App.css';
import Status from './components/status'
import Send from './components/send';
import NewWallet from './components/newWallet';
import Blocks from './components/blocks';
import Transactions from './components/transaction';
import Wallets from './components/wallets';
import axios from 'axios';

const endpoint = '/mine_block'
class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="App">
        <Block/>
      </div>
    )
  }
}

export default App;