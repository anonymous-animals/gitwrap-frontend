import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './home.css';
import LandingImage from '../../imgs/landing-image.png';
import techimg from '../../imgs/Techimage.png';
import foodimage from '../../imgs/foodimage.png';
import musicimage from '../../imgs/musicimg.png';
import adventureimage from '../../imgs/adventureimg.png';
import moviesimage from '../../imgs/movieimg.png';
import sportsimage from '../../imgs/sportsimg.png';

const Home = () => {
	const giftCategories = [
		{ name: 'tech', image:techimg},
		{ name: 'food', image: foodimage},
		{ name: 'music', image: musicimage},
		{ name: 'adventure', image: adventureimage }  ,
		{ name: 'sports', image:  sportsimage  },
		{ name: 'movies', image:  moviesimage  },
	];

	const price = ['25', '50', '100', '150', '300', '2000'];

	return (
		<div className='container'>
			<div className='welcome-area'>
				<h1>Welcome to Gitwrap</h1>
				<h3>
					{' '}
					Let us help you find the perfect gift for everyone on your list.
				</h3>
				
					<img className='image' src={LandingImage} />
				
				<div className='home-button-container'>
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
				<h2 className='browse-text' >Browse Gifts By Category</h2>
				<div className='category-area'>
					{giftCategories.map((category) => {
						return (
							<div key={category.name}>
								<div className='card-div'>
									<Link to={`/category/${category.name}`}>
										<Card style={{ width: '15rem', height: '12rem' }}>
											<Card.Img className= 'catimage' src={category.image}/>
										</Card>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<div id='price' className='section-container'>
				<h2 className='browse-text'>Browse Gifts By Price</h2>
				<div className='category-area'>
					{price.map((price) => {
						return (
							<div key={price}>
								<div>
									<Link to={`price/${price}`}>
										<Card style={{ width: '15rem', height: '12rem' }}>
											<Card.Body className='price-card-body'>
												<Card.Title className='price-card-text'>
													Under ${price}
												</Card.Title>
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
