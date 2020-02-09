import React from 'react';

export default function WelcomePage() {
	return (
		<section className='welcome-page'>
			<div class='card text-faded bg-faded mb-3'>
				<header>
					{' '}
					<div class='card-header'>
						<div class='card'>
							<h1 class=' p-3 mb-3'>Welcome to the ultimate fan site!</h1>{' '}
						</div>

						<div class=' p-5 mb-5 d-flex justify-content-center'>
							{' '}
							<div class='card-header'>
								<img
									className='main-img'
									src='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
									alt='rick'
								/>{' '}
							</div>
						</div>
					</div>
				</header>
				<div class='card bg-danger mb-4'>
					{' '}
					<div class='card bg-danger mb-4'>
						{' '}
						<div class='card bg-danger mb-4'></div>
						<div class='card bg-danger mb-4'></div>{' '}
						<div class='card bg-danger mb-4'></div>{' '}
						<div class='card bg-danger mb-4'></div>{' '}
					</div>
				</div>
			</div>
		</section>
	);
}
