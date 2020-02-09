import axios from 'axios';
import CharacterCard from './CharacterCard';
import React, { useEffect, useState } from 'react';

export default function CharacterList() {
	// TODO: Add useState to track data from useEffect
	const [character, setCharacter] = useState([]);

	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
		axios
			.get(`https://rickandmortyapi.com/api/character/`, {
				params: { key: 'id' }
			})
			.then(response => {
				console.log(response);
				setCharacter(response.data.results);
			})
			.catch(error => {
				console.log(error);
			});
	}, [character]);

	return (
		<section className='character-list'>
			{character.map(char => (
				<CharacterCard
					key={char.id}
					name={char.name}
					status={char.status}
					img={char.image}
					species={char.species}
					origin={char.origin.name}
					location={char.location.name}
				/>
			))}
		</section>
	);
}
