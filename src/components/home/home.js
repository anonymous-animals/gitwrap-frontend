import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './home.css';

const Home = () => {
	const giftCategories = [
		'tech',
		'food',
		'music',
		'adventure',
		'movies',
		'sports',
	];

	const priceCategories = [
		'under $25',
		'under $50',
		'under $100',
		'under $150',
		'under $300',
		'A real splurge',
	];

	return (
		<div className='container'>
			<div className='welcome-area'>
				<h1>welcome.</h1>
				<h3> find the perfect gift for everyone on your list.</h3>
				<Button href='#category' variant='outline-primary'>
					Browse by Category
				</Button>
				<Button href='#price' variant='outline-primary'>
					Browse by Price
				</Button>
			</div>

			<div id="category" className='section-container'>
				<h3>Browse Gifts By Category</h3>
				<div className='category-area'>
					{giftCategories.map((category) => {
						return (
							<div key={category}>
								<div class='card-div'>
									<Link to={`/${category}`}>
										<Card style={{ width: '20rem', height: '15rem' }}>
											<Card.Body>
												<Card.Title>{category}</Card.Title>
											</Card.Body>
										</Card>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<div id='price' className='section-container'>
				<h3>Browse Gifts By Price</h3>
				<div className='category-area'>
					{priceCategories.map((category) => {
						return (
							<div key={category}>
								<div>
									<Link to={`/${category}`}>
										<Card style={{ width: '20rem', height: '15rem' }}>
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
		</div>
	);
};

export default Home;
