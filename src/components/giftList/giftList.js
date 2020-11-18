import React, { useEffect, } from 'react';
import { Link } from 'react-router-dom';
import './giftList.css'

const GiftList = ({ match, gifts, setGifts }) => {
	
	useEffect(() => {
		const giftsUrl =
			`https://gitwrap-backend.herokuapp.com/gifts/${match.params.category}`;

		fetch(giftsUrl)
			.then((res) => res.json())
			.then((res) => {
				setGifts(res);
				console.log(res);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	if (!gifts) {
		return null;
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
						<div key={gift.name}>
							<div>
								<Link to={`/gifts/${match.params.category}/${gift.id}`}>
									<img src={gift.image} alt={gift.name} />
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
