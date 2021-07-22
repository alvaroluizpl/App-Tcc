import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableHighlight, Alert, ScrollView  } from 'react-native';
import { RNCamera } from 'react-native-camera';


export default class Contato extends Component {

	constructor (){
		super()

		this.state ={
			nome: '',
			email: '',
			texto: ''
		}
	}

	changeNome(nome){
		this.setState({nome})
	}
	changeEmail(email){
		this.setState({email})
	}
	changeTexto(texto){
		this.setState({texto})
	}
	
	buttonPressed(){
		if(this.state.nome && this.state.email && this.state.texto){
			Alert.alert('Enviado')
		} else {
			Alert.alert('Error, todos campos devem ser preenchidos!')
		}
	}

	render() {
		return (

			<ScrollView style={styles.container}>
			<Text style={{padding: 20, fontSize: 20, textAlign: 'center'}}>
				CONTATE-NOS
			</Text>

			<View style={{padding: 5}}>
			<TextInput style={styles.input} 
			placeholder="Nome" value={this.state.nome}
			onChangeText={(nome) => this.changeNome(nome)}
			/>
			<TextInput style={styles.input} 
			placeholder="Email" value={this.state.email}
			onChangeText={(email) => this.changeEmail(email)}
			/>
			<TextInput style={styles.mensagem} 
			multiline={true} numberOfLines={5}
			placeholder="Texto" value={this.state.texto}
			onChangeText={(texto) => this.changeTexto(texto)}
			/>
			</View>

			<TouchableHighlight>
				<Text style={styles.buttonEnv}
				onPress={() => this.buttonPressed()}
				>Enviar</Text>
			</TouchableHighlight>

			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
  container: {
      flex: 1,    
      backgroundColor: '#3F984E',
  },
  input: {
  	height: 40,
  	borderColor: '#FFF',
  	borderWidth: 2,
  	marginBottom: 5
  },
buttonContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 14
  },
  mensagem: {
  	height: 200,
  	borderColor: '#FFF',
  	borderWidth: 2,
  	marginBottom: 5,
  },
  buttonEnv: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 16,
    height: 25,
    width: 100,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  }
});
