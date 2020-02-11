import React from "react";
import styled from "styled-components";

const Search = ({ search, setSearch }) => {
	return (
		<StyledSearch>
			<input
				type="text"
				value={search}
				placeholder="Search for your favorite character..."
				onChange={e => setSearch(e.target.value)}
			/>
		</StyledSearch>
	);
};

const StyledSearch = styled.form`
	width: 100%;

	input {
		height: 3rem;
		background-color: rgba(255, 255, 255, 0.7);
		border: 1px solid rgba(0, 0, 0, 0.3);
		font-family: "Roboto", sans-serif;
		font-size: 1rem;
		width: 300px;
		padding: 0 1rem;
		margin: 2rem;
	}
`;

export default Search;
