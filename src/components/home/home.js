import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	const giftCategories = [
		'tech',
		'food',
		'music',
		'adventure',
		'movies',
		'sports',
	];

	return (
		<div>
			<h1>Gift Categories</h1>
			<div className='gift-container'>
				{giftCategories.map((category) => {
					return (
						<div key={category}>
							<div>
								<Link to={`/gifts/${category}`}>
									<p className='gift-card-title'>{category}</p>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
