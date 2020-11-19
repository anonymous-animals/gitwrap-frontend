import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

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
			<div className='gift-container'>
				{giftCategories.map((category) => {
					return (
						<div key={category}>
							<div>
								<Link to={`/category/${category}`}>
									<Card style={{ width: '18rem' }}>
										<Card.Body>
											<Card.Title>{category}</Card.Title>
											<Card.Text>
												Some quick example text to build on the card title and
												make up the bulk of the card's content.
											</Card.Text>
										</Card.Body>
									</Card>
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
