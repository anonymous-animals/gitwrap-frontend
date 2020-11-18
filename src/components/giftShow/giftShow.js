import React, { useEffect } from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

const GiftShow = ({ match, favorites, setFavorites, gift, setGift }) => {
	
	//useEffect(() => {
	// 	const giftUrl = `${match.params.id}`;

	// 	fetch(giftUrl)
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			setGift(res);
	// 		})

	// 		.catch(console.error);
	// }, []);

	// if (!gift) {
	// 	return null;
	// }

	const handleClick = (event) => {
		event.preventDefault();
		setFavorites([
			...favorites,
			{
				name: gift.name,
				image: gift.image,
				id: gift.id,
				category: gift.category,
			},
		]);
	};
	
	return (
		<div>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant='top' src='holder.js/100px180?text=Image cap' />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>ITEM DESCRIPTION</Card.Text>
				</Card.Body>
				<ListGroup className='list-group-flush'>
					<ListGroupItem>Price</ListGroupItem>
					<ListGroupItem>
						Category (Possibly turn into link to category page
					</ListGroupItem>
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
