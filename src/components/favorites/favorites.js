import React,  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './favorites.css'

const Favorites = ({ favorites }) => {
	const [totalPrice, setTotalPrice] = useState(0)

	let total = 0
	if (favorites) {
		for (let i = 0; i < favorites.length; i++) {
			total += favorites[i].price
		}
	}

	useEffect(() => {
		setTotalPrice(total)
	}, [])


	return (
		<div>
			<h1>Favorites</h1>
			<div className='large-container'>
			<div className='total'>
				<h1>Wishlist Items</h1>
				{favorites.map((favorite) => {
					return(
						<div key={favorite.name}>
							<h4>{favorite.name}</h4>
							<p>{favorite.price}</p>
						</div>
					)
				})}
				<h3>Total: ${totalPrice}</h3>
			</div>

			<div className='card-container'>
				{favorites.map((favorite) => {
					return (
						<div className='card' key={favorite.name}>
							<div>
								<Link to={`/gifts/${favorite.id}`}>
									<img src={favorite.image} alt={favorite.name}/>
									<p className='favorite-card-title'>{favorite.name}</p>
									<p>${favorite.price}</p>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
			</div>
		</div>
	);
};

export default Favorites;
