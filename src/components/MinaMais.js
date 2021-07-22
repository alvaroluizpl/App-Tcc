import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableHighlight, Alert, ScrollView  } from 'react-native';
import { RNCamera } from 'react-native-camera';


export default class MinaMais extends Component {

	constructor (){
		super()

		this.state ={
			estado: '',
			cidade: '',
			cep: '',
			bairro: '',
			rua: '',
			numero: ''
		}
	}

	changeEstado(estado){
		this.setState({estado})
	}
	changeCidade(cidade){
		this.setState({cidade})
	}
	changeCep(cep){
		this.setState({cep})
	}
	changeBairro(bairro){
		this.setState({bairro})
	}
	changeRua(rua){
		this.setState({rua})
	}
	changeNumero(numero){
		this.setState({numero})
	}


	buttonPressed(){
		if(this.state.estado && this.state.cidade && this.state.cep && this.state.bairro && this.state.rua  && this.state.numero){
			Alert.alert('Enviado')
		} else {
			Alert.alert('Error, todos campos devem ser preenchidos!')
		}
	}

	takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);

      alert(data.uri);
    }
  };

	render() {
		return (

			<ScrollView style={styles.container}>
			<Text style={{padding: 20, fontSize: 20, textAlign: 'center'}}>
				Aqui você pode solicitar o cadastro de uma nova mina, prossiga
				preenchendo os campos abaixo.
			</Text>

			<View style={{padding: 5}}>
			<TextInput style={styles.input} 
			placeholder="Estado" value={this.state.estado}
			onChangeText={(estado) => this.changeEstado(estado)}
			/>
			<TextInput style={styles.input} 
			placeholder="Cidade" value={this.state.cidade}
			onChangeText={(cidade) => this.changeCidade(cidade)}
			/>
			<TextInput style={styles.input} 
			placeholder="CEP" value={this.state.cep}
			onChangeText={(cep) => this.changeCep(cep)}
			/>
			<TextInput style={styles.input} 
			placeholder="Bairro" value={this.state.bairro}
			onChangeText={(bairro) => this.changeBairro(bairro)}
			/>
			<TextInput style={styles.input} 
			placeholder="Rua" value={this.state.rua}
			onChangeText={(rua) => this.changeRua(rua)}
			/>
			<TextInput style={styles.input} 
			placeholder="Número" value={this.state.numero}
			onChangeText={(numero) => this.changeNumero(numero)}
			/>
			</View>

			<RNCamera
  			 ref={camera => { this.camera = camera }}
  			 style = {styles.preview}
  			 type={RNCamera.Constants.Type.back}
  			 autoFocus={RNCamera.Constants.AutoFocus.on}
  			 flashMode={RNCamera.Constants.FlashMode.off}
  			 permissionDialogTitle={'Permission to use camera'}
  			 permissionDialogMessage={'We need your permission to use your camera phone'}
     		 />
     		 <View style={styles.buttonContainer}>
          		<TouchableHighlight onPress={this.takePicture} style={styles.capture}>
            	<Text style={styles.buttonText}> Foto </Text>
          		</TouchableHighlight>
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
      backgroundColor: '#52DBF3',
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
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20
  },
  buttonText: {
    fontSize: 14
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
