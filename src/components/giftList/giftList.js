import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './giftList.css';

const GiftList = ({ match, gifts, setGifts, token }) => {

	useEffect(() => {
		const giftsUrl = `https://gitwrap-backend.herokuapp.com/gifts/category/${match.params.category.toLowerCase()}`;
		// const giftsUrl = `http://localhost:4000/gifts/category/${match.params.category.toLowerCase()}`;

		fetch(giftsUrl, {
			headers: {
				"Authorization": `Bearer ${token}`
			}
		})
			.then((res) => res.json())
			.then((res) => {
				setGifts(res);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	if (!gifts) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<h1>
				{match.params.category.charAt(0).toUpperCase() +
					match.params.category.slice(1)}{' '}
				Gifts
			</h1>
			<div className='gift-container'>
				{gifts.map((gift) => {
					return (
						<div key={gift._id} className='card'>
							<div>
								<Link to={`/gifts/${gift._id}`}>
									<img className='card-image' src={gift.image} alt={gift.name} />
									<h3>{gift.name}</h3>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default GiftList;
