import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = ({gifts, setGifts}) => {
		//const giftsUrl = ``;
        const giftCategories = ["Tech","Food", "Music", "Adventure", "Movies", "Sports"]

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