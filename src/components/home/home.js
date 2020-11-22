import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './home.css';
import StockPhoto from '../../imgs/stockphoto.png';
import Blue from '../../imgs/'

const Home = () => {
	const giftCategories = [
		'tech',
		'food',
		'music',
		'adventure',
		'movies',
		'sports',
	];

	// const priceCategories = [
	// 	'under $25',
	// 	'under $50',
	// 	'under $100',
	// 	'under $150',
	// 	'under $300',
	// 	'A real splurge',
	// ];

	const price = ['25', '50', '100', '150', '300', '2000'];

	return (
		<div className='container'>
			<div className='welcome-area'>
				<h1>Welcome to Gitwrap</h1>
				<h3>
					{' '}
					Let us help you find the perfect gift for everyone on your list.
				</h3>
				<div className='img-container'>
					<img src={StockPhoto} />
				</div>
				<div id='home-button-container'>
					<Button
						className='home-button'
						href='#category'
						variant='outline-primary'
						size='lg'>
						Browse by Category
					</Button>
					<Button
						className='home-button'
						href='#price'
						variant='outline-primary'
						size='lg'>
						Browse by Price
					</Button>
				</div>
			</div>

			<div id='category' className='section-container'>
				<h2>Browse Gifts By Category</h2>
				<div className='category-area'>
					{giftCategories.map((category) => {
						return (
							<div key={category}>
								<div className='card-div'>
									<Link to={`/category/${category}`}>
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
				<h2>Browse Gifts By Price</h2>
				<div className='category-area'>
					{price.map((price) => {
						return (
							<div key={price}>
								<div>
									<Link to={`price/${price}`}>
										<Card style={{ width: '20rem', height: '15rem' }}>
											<Card.Body>
												<Card.Title>Under ${price}</Card.Title>
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
