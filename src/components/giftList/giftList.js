import React, { useEffect, } from 'react';
import { Link } from 'react-router-dom';

const GiftList = ({ match, gifts, setGifts }) => {
	useEffect(() => {
		const giftsUrl = 'dummy-data.json';

		fetch(giftsUrl)
			.then((res) => res.json())
			.then((res) => {
				setGifts(res);
				console.log(res)
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
			<h1>{match.params.category} Gifts</h1>
			<div className='gift-container'>
				{gifts.filter(gift => gift.category.toLowerCase() === match.params.category).map(gift => {
					return (
						<div key={gift.name}>
							<div>
								<Link to={`/gifts/${match.params.category}`}>
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
