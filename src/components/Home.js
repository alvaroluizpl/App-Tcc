import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableHighlight } from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Home extends Component {

state = {
    name: '',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.label, { marginTop: 40 }]}>
          Entre com seu e-mail :
        </Text>
        <TextInput
          placeholder='E-mail'
          style={styles.textInput}
          onChangeText={(text) => {
            this.setState({
              name: text,
            });
          }}
          value={this.state.name}
        />
        <TouchableHighlight
          onPress={() => {
            Actions.principal({
              name: this.state.name,
            });
          }}
        >
          <Text style={styles.button}>
            Entrar
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 20,
    marginLeft: 15,
  },
  textInput: {
    height: 40,
    margin: 10,
    backgroundColor: 'white',
    width: 300,
  },
  button: {
    backgroundColor: 'steelblue',
    color: 'white',
    fontSize: 16,
    height: 25,
    width: 100,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  }
});
