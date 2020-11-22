import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './giftListPrice.css';

const GiftList = ({ match, gifts, setGifts }) => {
	useEffect(() => {
		const giftsUrl = `https://gitwrap-backend.herokuapp.com/gifts/price/${match.params.price}`;

		fetch(giftsUrl)
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
			Under $	{match.params.price} Gifts
			</h1>
			<div className='gift-container'>
				{gifts.map((gift) => {
					return (
						<div key={gift._id} className='card'>
							<div>
								<Link to={`/gifts/${gift._id}`}>
									<img src={gift.image} alt={gift.name} />
									<h3>{gift.name}</h3>
                  <h5>${gift.price}</h5>
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
