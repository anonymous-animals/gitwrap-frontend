import React, { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import axios from 'axios';
import './giftShow.css';

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
	const [modal, setModal] = useState(false);

	const editShowPage = () => {
		setModal(true);
	};
	console.log(modal);

	const closeModal = () => {
		setModal(false);
	};

	const handleClick = (event) => {
		event.preventDefault();
		console.log(modal);
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
	const handleChange = (event) => {
		event.preventDefault();
		setGifts({ ...gifts, [event.target.name]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		// Write your PUT fetch() or axios() request here
		axios({
			method: 'PATCH',
			url: `https://gitwrap-backend.herokuapp.com/gifts/${match.params.id}`,
			data: gifts,
		});
	};

	const handleDelete = () => {
		// Write your DELETE fetch() or axios() request here
		axios({
			method: 'DELETE',
			url: `https://gitwrap-backend.herokuapp.com/gifts/${match.params.id}`,
		});
	};

	if (!gifts) {
		return <h1>Loading...</h1>;
	}
	return (
		<div>
			{modal ? (
				<div className='edit-modal'>
					<div className='modal-form'>
						<h2>Edit this show:</h2>
						<form onSubmit={handleSubmit}>
							<label htmlFor='name' />
							<input onChange={handleChange} name='name' value={gifts.name} />
							<input onChange={handleChange} name='image' value={gifts.image} />
							<input onChange={handleChange} name='price' value={gifts.price} />
							<br />
							<button type='submit'>Submit</button>
						</form>
						<button onClick={closeModal}>Close</button>
					</div>
				</div>
			) : null}
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
					<Button variant='outline-warning' onClick={editShowPage}>
						Edit
					</Button>
					<Button variant='outline-danger' onClick={handleDelete}>
						Delete
					</Button>

					<Button variant='outline-primary' onClick={handleClick}>
						Add to Favorites
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default GiftShow;
