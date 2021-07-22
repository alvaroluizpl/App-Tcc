import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './components/Home';
import Principal from './components/Principal';
import Informacoes from './components/Informacoes';
import Localizacao from './components/Localizacao';
import MinaMais from './components/MinaMais';
import Contato from './components/Contato';
import Lista from './components/Lista';
import Chat from './components/Chat';

const Rotas = (props) => {
	return(
	<Router>
	<Scene key='root'>
    <Scene key='home' component={Home} title="Login" />
    <Scene key='principal' component={Principal} initil title="Nascentes D'águas" />
    <Scene key='informacoes' component={Informacoes} title="Informações" />
    <Scene key='localizacao' component={Localizacao} title="Localiza Mina" />
    <Scene key='minaMais' component={MinaMais} title="Mina Mais" />
    <Scene key='contato' component={Contato} title="Contato" />
    <Scene key='lista' component={Lista} title="Minas Existentes" />
    <Scene key='chat' component={Chat} title="Chat" />
    </Scene>
  </Router>
);

}

export default Rotas;
