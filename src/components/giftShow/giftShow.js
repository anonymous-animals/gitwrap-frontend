import React, { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

const GiftShow = ({ match, favorites, setFavorites, gifts, setGifts }) => {
	useEffect(() => {
		const giftUrl = `https://gitwrap-backend.herokuapp.com/gifts/${match.params.id}`;
	

		fetch(giftUrl)
			.then((res) => res.json())
			.then((res) => {
				setGifts(res);
				console.log(res);
			})

			.catch(console.error);
	}, []);

	if (!gifts) {
		return null;
	}

	const handleClick = (event) => {
		event.preventDefault();
		setFavorites([
			...favorites,
			{
				name: gifts.name,
				image: gifts.image,
				id: gifts.id,
				category: gifts.category,
			},
		]);
	};

	return (
		<div>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant='top' src={gifts.image} />
				<Card.Body>
					<Card.Title>{gifts.name}</Card.Title>
					<Card.Text>{gifts.description}</Card.Text>
				</Card.Body>
				<ListGroup className='list-group-flush'>
					<ListGroupItem>{gifts.price}</ListGroupItem>
					<ListGroupItem>{gifts.category}</ListGroupItem>
					<Card.Link href='#'>Buy Now</Card.Link>
				</ListGroup>
				<Card.Body>
					<Button variant='outline-warning'>Edit</Button>
					<Button variant='outline-danger'>Delete</Button>

					<Button variant='outline-primary' onClick={handleClick}>
						Add to Favorites
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default GiftShow;
