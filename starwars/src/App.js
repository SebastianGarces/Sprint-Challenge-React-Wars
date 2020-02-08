import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Card from "./components/Card/Card.component";
import Search from "./components/Search/Search.component";
import { ReactComponent as StarWarsLogo } from "./starwarslogo.svg";

import styled from "styled-components";

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	const [people, setPeople] = useState();
	const [search, setSearch] = useState("");

	useEffect(() => {
		axios
			.get("https://swapi.co/api/people/")
			.then(res => setPeople(res.data.results))
			.catch(err => console.log("error: ", err));
	}, []);

	if (!people) return <h1 className="loading">Loading</h1>;

	const filteredPeople = people.filter(character => {
		return (
			character.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
		);
	});

	return (
		<div className="App">
			<StarWarsLogo className="Header" />
			<Search search={search} setSearch={setSearch} />
			<CardContainer>
				{filteredPeople.map(character => {
					return <Card character={character} key={character.url} />;
				})}
			</CardContainer>
		</div>
	);
};

const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	flex-grow: 1;
	align-items: center;
	max-width: 1440px;
	margin: 0 auto;
`;

export default App;
