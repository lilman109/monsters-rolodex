import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/CardList/CardList.jsx';
import { SearchBox } from './components/SearchBox/SearchBox.jsx';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: '',
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	};

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) => {
			return (
				monster.name.toLowerCase().includes(searchField.toLowerCase()) ||
				monster.email.toLowerCase().includes(searchField.toLowerCase())
			);
		});

		return (
			<div className="App">
				<h1>Monster Rolodex</h1>
				<SearchBox
					placeholder="search monsters"
					searchChange={this.onSearchChange}
				></SearchBox>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
