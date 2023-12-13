import React, { Component } from 'react';
import logo from './logo.svg';
// import Pokedex from './Pokedex';
import Pokegame from './Pokegame';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <Pokedex /> */}
				<Pokegame />
			</div>
		);
	}
}

export default App;
