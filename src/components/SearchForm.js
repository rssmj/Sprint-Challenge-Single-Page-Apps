import axios from 'axios';
import CharacterCard from './CharacterCard';
import React, { useState, useEffect } from 'react';
import { Form, FormControl } from 'react-bootstrap';

export default function SearchForm() {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState('');

	useEffect(() => {
		axios
			.get(`https://rickandmortyapi.com/api/character/`, {
				params: { key: 'id' }
			})
			.then(response => {
				console.log(response);
				const searchData = response.data.results.filter(character => {
					return character.name.toLowerCase().includes(query.toLowerCase());
				});
				setData(searchData);
			});
	}, [query]);
	const handleInputChange = event => {
		setQuery(event.target.value);
	};
	return (
		<section className='search-form'>
			<div class='lg mb-5 bd-glow'>
				<Form>
					<FormControl
						type='text'
						name='name'
						value={query}
						onChange={handleInputChange}
						placeholder='Search Rick & Morty!!'
					/>
				</Form>
				<div class='card bg-faded mb-3'></div>
			</div>

			{data.map(char => (
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
