import React, { Component } from 'react';
import { Container } from './styles';

export default class Qrcode extends Component {
  render() {
    return(
        <Container>
          <img src={this.props.url}></img>
        </Container>
    );
  }
}
