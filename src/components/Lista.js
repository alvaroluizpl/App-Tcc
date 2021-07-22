import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, Image, Modal, TouchableHighlight, AlertIOS } from 'react-native';

const areal = require('../imgs/areal.png');
const belvedere = require('../imgs/belvedere.png');
const boasorte = require('../imgs/boasorte.png');
const bocadomato = require('../imgs/bocadomato.png');
const caiera = require('../imgs/caiera.png');
const campobom = require('../imgs/campobom.png');

export default class Lista extends Component {

	state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

	render() {
		return (
			 <ScrollView style={styles.container}>

			 	<View style={styles.postContainer}>
			  	 	<Text style={styles.postTitle}>Areal</Text>
			  	 	<Text style={styles.postDescription}>NASCENTE DE UTILIDADE PÚBLICA AREAL - RUA SEBASTIANA DA SILVA</Text>
			  	 	<Modal
          		 		animationType="fade"
         		 		transparent={false}
          		 		visible={this.state.modalVisible}
                 		onRequestClose={() => {
                 		AlertIOS.alert('Imagem Fechada');
          				}}>
          				<View style={{padding: 22}}>
            				<View>
              					<Image source={areal}/>

              					<TouchableHighlight
                					onPress={() => {
                  					this.setModalVisible(!this.state.modalVisible);
               					 	}}>
                					<Text>Fechar Imagem</Text>
              					</TouchableHighlight>
           				 	</View>
          				</View>
        			</Modal>

        			<TouchableHighlight
          				onPress={() => {
            			this.setModalVisible(true);
          				}}>
          				<Text>Clique para ver a foto da Nascente</Text>
       			 	</TouchableHighlight>
			  	</View>

			  	<View style={styles.postContainer}>
			  	 <Text style={styles.postTitle}>Nascente Belvedere</Text>
			  	 <Text style={styles.postDescription}>NASCENTE DE UTILIDADE PÚBLICA BELVEDERE – ROD. LÚCIO MEIRA</Text>
			  	 <Modal
          		 		animationType="fade"
         		 		transparent={false}
          		 		visible={this.state.modalVisible}
                 		onRequestClose={() => {
                 		AlertIOS.alert('Imagem Fechada');
          				}}>
          				<View style={{marginTop: 22}}>
            				<View>
              					<Image source={belvedere} />

              					<TouchableHighlight
                					onPress={() => {
                  					this.setModalVisible(!this.state.modalVisible);
               					 	}}>
                					<Text>Fechar Imagem</Text>
              					</TouchableHighlight>
           				 	</View>
          				</View>
        			</Modal>

        			<TouchableHighlight
          				onPress={() => {
            			this.setModalVisible(true);
          				}}>
          				<Text>Clique para ver a foto da Nascente</Text>
       			 	</TouchableHighlight>
			  	</View>

			  	<View style={styles.postContainer}>
			  	 <Text style={styles.postTitle}>Nascente Boa Sorte</Text>
			  	 <Text style={styles.postDescription}>NASCENTE DE UTILIDADE PÚBLICA BOA SORTE - ELY MARIA DA SILVA BRAGA</Text>
			  	 <Modal
          		 		animationType="fade"
         		 		transparent={false}
          		 		visible={this.state.modalVisible}
                 		onRequestClose={() => {
                 		AlertIOS.alert('Imagem Fechada');
          				}}>
          				<View style={{marginTop: 22}}>
            				<View>
              					<Image source={boasorte} />

              					<TouchableHighlight
                					onPress={() => {
                  					this.setModalVisible(!this.state.modalVisible);
               					 	}}>
                					<Text>Fechar Imagem</Text>
              					</TouchableHighlight>
           				 	</View>
          				</View>
        			</Modal>

        			<TouchableHighlight
          				onPress={() => {
            			this.setModalVisible(true);
          				}}>
          				<Text>Clique para ver a foto da Nascente</Text>
       			 	</TouchableHighlight>
			  	</View>

			  	<View style={styles.postContainer}>
			  	 <Text style={styles.postTitle}>Nascente Boca do Mato</Text>
			  	 <Text style={styles.postDescription}>NASCENTE DE UTILIDADE PÚBLICA BOCA DO MATO – RUA ANTONIO PEREIRA LOPES Nº 1562</Text>
			  	 <Modal
          		 		animationType="fade"
         		 		transparent={false}
          		 		visible={this.state.modalVisible}
                 		onRequestClose={() => {
                 		AlertIOS.alert('Imagem Fechada');
          				}}>
          				<View style={{marginTop: 22}}>
            				<View>
              					<Image source={bocadomato} />

              					<TouchableHighlight
                					onPress={() => {
                  					this.setModalVisible(!this.state.modalVisible);
               					 	}}>
                					<Text>Fechar Imagem</Text>
              					</TouchableHighlight>
           				 	</View>
          				</View>
        			</Modal>

        			<TouchableHighlight
          				onPress={() => {
            			this.setModalVisible(true);
          				}}>
          				<Text>Clique para ver a foto da Nascente</Text>
       			 	</TouchableHighlight>
			  	</View>

			  	<View style={styles.postContainer}>
			  	 <Text style={styles.postTitle}>Nascente Caiera</Text>
			  	 <Text style={styles.postDescription}>NASCENTE DE UTILIDADE PÚBLICA CAIEIRA SÃO PEDRO - RUA EUTERPE</Text>
			  	 <Modal
          		 		animationType="fade"
         		 		transparent={false}
          		 		visible={this.state.modalVisible}
                 		onRequestClose={() => {
                 		AlertIOS.alert('Imagem Fechada');
          				}}>
          				<View style={{marginTop: 22}}>
            				<View>
              					<Image source={caiera} />

              					<TouchableHighlight
                					onPress={() => {
                  					this.setModalVisible(!this.state.modalVisible);
               					 	}}>
                					<Text>Fechar Imagem</Text>
              					</TouchableHighlight>
           				 	</View>
          				</View>
        			</Modal>

        			<TouchableHighlight
          				onPress={() => {
            			this.setModalVisible(true);
          				}}>
          				<Text>Clique para ver a foto da Nascente</Text>
       			 	</TouchableHighlight>
			  	</View>

			  	<View style={styles.postContainer}>
			  	 <Text style={styles.postTitle}>Nascente Campo Bom</Text>
			  	 <Text style={styles.postDescription}>NASCENTE DE UTILIDADE PÚBLICA CAMPO BOM - ESTR. MANOEL COUTINHO DE CARVALHO </Text>
			  	 <Modal
          		 		animationType="fade"
         		 		transparent={false}
          		 		visible={this.state.modalVisible}
                 		onRequestClose={() => {
                 		AlertIOS.alert('Imagem Fechada');
          				}}>
          				<View style={{marginTop: 22}}>
            				<View>
              					<Image source={campobom} />

              					<TouchableHighlight
                					onPress={() => {
                  					this.setModalVisible(!this.state.modalVisible);
               					 	}}>
                					<Text>Fechar Imagem</Text>
              					</TouchableHighlight>
           				 	</View>
          				</View>
        			</Modal>

        			<TouchableHighlight
          				onPress={() => {
            			this.setModalVisible(true);
          				}}>
          				<Text>Clique para ver a foto da Nascente</Text>
       			 	</TouchableHighlight>
			  	</View>


			 </ScrollView>
		);
	}
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#AF8787'
  },
  postContainer: {
  	marginHorizontal: 20,
  	marginVertical: 10,
  	padding: 20,
  	backgroundColor: '#FFF',
  	borderRadius: 3
  },
  postTitle: {
  	fontSize: 18,
  	fontWeight: 'bold'
  },
  postDescription: {
  	color: '#666'
  }
});
