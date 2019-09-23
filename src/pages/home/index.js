import React, { Component } from 'react';

import api from '../../services/api';
import Qrcode from '../../components/Qrcode';

import { Container } from './styles';

export default class home extends Component {

  state = {
    qrcode: "",
    url: ""
  }

  async getUrl(){ 
    try{
      const response = await api.post("/url",{
        url: this.state.url
      });
      this.setState({ qrcode: response.data.qrcode });
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Container>
        <h1>Qrcode Dinâmico</h1>
        <div className="input-container">
            <input 
              type="text" 
              placeholder="Digite o link" 
              onChange={e => this.setState({ url: e.target.value })} 
            />
            <button onClick={e => this.getUrl()}>ok</button>
        </div>
        <div className="qrcode-container">
            {this.state.qrcode ? <Qrcode url={this.state.qrcode} /> : <div />}
        </div>
        
      </Container>
    );
  }
}
