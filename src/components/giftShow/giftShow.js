import React, { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './giftShow.css';

const GiftShow = ({ match, favorites, setFavorites }) => {
	const [gift, setGift] = useState();

	useEffect(() => {
		const giftUrl = `https://gitwrap-backend.herokuapp.com/gifts/${match.params.id}`;

		fetch(giftUrl)
			.then((res) => res.json())
			.then((res) => {
				setGift(res);
			})

			.catch(console.error);
	}, []);
	const [modal, setModal] = useState(false);

	const editShowPage = () => {
		setModal(true);
	};

	const closeModal = () => {
		setModal(false);
	};

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
	const handleChange = (event) => {
		event.preventDefault();
		setGift({ ...gift, [event.target.name]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		// Write your PUT fetch() or axios() request here
		axios({
			method: 'PATCH',
			url: `https://gitwrap-backend.herokuapp.com/gifts/${match.params.id}`,
			data: gift,
		});
	};

	const handleDelete = () => {
		// Write your DELETE fetch() or axios() request here
		axios({
			method: 'DELETE',
			url: `https://gitwrap-backend.herokuapp.com/gifts/${match.params.id}`,
		});
	};

	if (!gift) {
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
							<input onChange={handleChange} name='name' value={gift.name} />
							<input onChange={handleChange} name='image' value={gift.image} />
							<input onChange={handleChange} name='price' value={gift.price} />
							<br />
							<button type='submit'>Submit</button>
						</form>
						<button onClick={closeModal}>Close</button>
					</div>
				</div>
			) : null}
			<Card style={{ width: '18rem' }}>
				<Card.Img variant='top' src={gift.image} />
				<Card.Body>
					<Card.Title>{gift.name}</Card.Title>
					<Card.Text>{gift.description}</Card.Text>
				</Card.Body>
				<ListGroup className='list-group-flush'>
					<ListGroupItem>{gift.price}</ListGroupItem>
					<ListGroupItem>{gift.category}</ListGroupItem>
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
			<Link to='/'>
				<Button variant='outline-primary'>Back to Home</Button>
			</Link>
		</div>
	);
};

export default GiftShow;
