import React from "react";
import styled from "styled-components";

const Card = ({
	character: {
		name,
		birth_year,
		gender,
		mass,
		hair_color,
		skin_color,
		eye_color
	}
}) => {
	console.log(name);

	return (
		<StyledCard>
			<h2>{name}</h2>
			<p>{`Birth Year: ${birth_year}`}</p>
			<p>{`Mass: ${mass}`}</p>
			<p>{`Hair Color: ${hair_color}`}</p>
			<p>{`Skin Color: ${skin_color}`}</p>
			<p>{`Eye Color: ${eye_color}`}</p>
			<p>{`Gender: ${gender}`}</p>
		</StyledCard>
	);
};

const StyledCard = styled.div`
	min-width: 250px;
	max-width: 350px;
	background-color: rgba(255, 255, 255, 0.8);
	border: 1px solid rgba(0, 0, 0, 0.3);
	margin: 1rem;

	display: flex;
	flex-direction: column;
	padding: 0 2rem 1rem;

	h2 {
		text-align: start;
	}

	p {
		margin: 0.2rem 0;
		text-align: start;
	}
`;

export default Card;
