import React, { Component } from 'react';
import logo from './images/eds-game.jpg';
import './App.css';
import images from './images/images';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Ed, Edd n Eddy Clicky</h1>
				</header>
				<p className="App-intro">
					Click a picture below and try to remember which ones  you've clicked.
        </p>
				<div className="container">
					<div className="row">
						<div className="imagebox">
							{images}
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default App;
