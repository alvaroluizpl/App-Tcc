import React, { Component } from 'react';
import { WebView, View } from 'react-native';

export default class HistoryMapa extends Component {

	constructor(props) {

		super(props);
		this.state = {
			dados: {} 
		};

		this.webView = null;
	}

  trackMap(dados) {
		setTimeout(() => this.webView.postMessage(dados), 200);
	}

	render() {

		var dados = this.state.dados;

		dados.func = "track";

		const pontos = JSON.stringify(dados);

		return(

			<View style={{flex: 1}}>

					<WebView
						source={{uri: 'file:///android_asset/mapaapi.html'}}
	 			       	ref={( webView ) => this.webView = webView}
	                    onNavigationStateChange={() => this.trackMap(pontos)}
					/>
			</View>
			);
	}

}
