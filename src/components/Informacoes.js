import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';

export default class Informacoes extends Component {
	
	constructor(props) {
    super(props);
    this.state = {
      titleText: "Nascentes",
      bodyText: 'Nascente conhecida também como mina d’água, cabeceira e fonte, é o aparecimento de água na superfície de um terreno, dando origem a cursos d’águas. As nascentes são fontes de água que surgem em determinadas superfícies do solo, proveniente de água da chuva que é absorvida pelo solo ou de rochas permeáveis, nessa camada permeável, acumula-se água, por cima de uma camada não permeável, com isso, a água infiltrada se reúne e emerge na superfície do solo. A nascente fornece água para córregos, riachos e cursos d’águas que abastecem os rios, não fazendo a preservação das nascentes perde-se vazão de água, assim, diminuindo o curso d’água podendo secar e consequentemente lesando a qualidade da água, afetando assim todos os seres vivos que dela necessitam. '
    };
  }

	render() {
		return (
      <ScrollView  style={styles.container}>
		    <View style={styles.postContainer}>
		     <Text style={styles.baseText}>
           <Text style={styles.titleText} onPress={this.onPressTitle}>
            {this.state.titleText}{'\n'}{'\n'}
           </Text>
           <Text numberOfLines={8}>
           {this.state.bodyText}
           </Text>
          </Text>
        </View>
      </ScrollView>
		);
	}
}

const styles = StyleSheet.create({
  container: {
      flex: 1,    
      backgroundColor: '#FA8258',
  },
  postContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 3
  },
  baseText: {
  	fontSize: 18,
    fontFamily: 'Cochin',
    textAlign: 'justify',

  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
