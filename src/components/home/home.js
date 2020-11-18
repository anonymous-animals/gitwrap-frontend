import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Home = () => {
	const giftCategories = [
		'Tech',
		'Food',
		'Music',
		'Adventure',
		'Movies',
		'Sports',
	];

	return (
		<div>
			<div className='gift-container'>
				{giftCategories.map((category) => {
					return (
						<div key={category}>
							<div>
								<Link to={`/gifts/${category}`}>
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
