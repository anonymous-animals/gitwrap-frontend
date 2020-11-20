import React from 'react';
import { Link } from 'react-router-dom';

const Favorites = ({ favorites }) => {
	return (
		<div>
			<h1>Favorites</h1>
			<div className='favorites-container'>
				{favorites.map((favorite) => {
					return (
						<div key={favorite.name}>
							<div>
								<Link to={`/gifts/${favorite.id}`}>
									<img src={favorite.image} alt={favorite.name} />
									<p className='favorite-card-title'>{favorite.name}</p>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Favorites;
