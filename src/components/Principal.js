import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const info = require('../imgs/menu_informativo.png');
const localiza = require('../imgs/menu_localiza.png');
const minamais = require('../imgs/menu_minas.png');
const contato = require('../imgs/menu_contato.png');
const lista = require('../imgs/menu_lista.png');
const chat = require('../imgs/menu_chat.png');

export default class minas extends Component{
	render() {
		return (

			<View style={styles.menu}>
				<Text style={styles.texto}> BEM-VINDO </Text>

				<View style={styles.apresentacao1}>
				   <TouchableHighlight 
				    onPress={() => { Actions.informacoes();}}
				   >
					<Image style={styles.apresentacao3} source={info} />
				   </TouchableHighlight>
				   <TouchableHighlight 
				    onPress={ () => { Actions.localizacao();}}
				   >	
					<Image style={styles.apresentacao3} source={localiza} />
				   </TouchableHighlight>
				</View>

				<View style={styles.apresentacao2}>
				 <TouchableHighlight
 				  onPress={() => { Actions.lista();}}
				 >
				  <Image style={styles.apresentacao3} source={lista} />
				 </TouchableHighlight>
				 <TouchableHighlight 
				  onPress={() => { Actions.minaMais();}}
				 >
				  <Image style={styles.apresentacao3} source={minamais} />
				 </TouchableHighlight>
				</View>
				<View style={styles.apresentacao2}>
				 <TouchableHighlight
 				  onPress={() => { Actions.contato();}}
				 >
				  <Image style={styles.apresentacao3} source={contato} />
				 </TouchableHighlight>
				 <TouchableHighlight 
				  onPress={() => { Actions.chat();}}
				 >
				  <Image style={styles.apresentacao3} source={chat} />
				 </TouchableHighlight>
				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	texto:{
		marginTop: 10,
		fontSize: 30,
		

	},
	apresentacao1: {
		marginTop: 10,
		flexDirection: 'row'
	},
	apresentacao2: {

		flexDirection: 'row'
		
	},
	apresentacao3: {
		margin: 15
	},
	menu: {
		alignItems: 'center',
		
	}
});
