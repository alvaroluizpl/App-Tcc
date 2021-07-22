import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Rotas from './src/Rotas';


export default class appTcc extends Component {
  render() {
    return (
      <Rotas />
    );
  }
}

AppRegistry.registerComponent('appTcc', () => appTcc);
