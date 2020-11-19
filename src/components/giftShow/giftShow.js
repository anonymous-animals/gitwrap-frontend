import React, { useEffect, useState } from 'react';
import {
	Card,
	ListGroup,
	ListGroupItem,
	Button,
	Form,
	Modal,
} from 'react-bootstrap';
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

	const [showModal, setShowModal] = useState(false);

	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);

	if (!gift) {
		return <h1>Loading...</h1>;
	}
	return (
		<div>
			{showModal ? (
				<Modal
					show={showModal}
					onHide={handleClose}
					backdrop='static'
					keyboard={false}>
					<div className='modal-form'>
						<h2>Edit this gift:</h2>
						<Form.Group>
							<Form.Label htmlFor='name'>Name</Form.Label>
							<Form.Control
								type='name'
								name='name'
								onChange={handleChange}
								value={gift.name}
								placeholder='name of gift'
							/>
							<Form.Group>
								<Form.Label>Description</Form.Label>
								<Form.Control
									as='textarea'
									rows={3}
									name='description'
									onChange={handleChange}
									value={gift.description}
									placeholder='brief description'
								/>
							</Form.Group>
							<Form.Label>Image</Form.Label>
							<Form.Control
								type='img-url'
								name='image'
								onChange={handleChange}
								value={gift.image}
								placeholder='image url please'
							/>
							<Form.Label>Price</Form.Label>
							<Form.Control
								type='price'
								name='price'
								onChange={handleChange}
								value={gift.price}
								placeholder='$0.00'
							/>
							<Form.Label>Purchase Link</Form.Label>
							<Form.Control
								type='purchase-link'
								name='purchase-link'
								onChange={handleChange}
								value={gift.link}
								placeholder='purchase url please'
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Category</Form.Label>
							<Form.Control
								as='select'
								onChange={handleChange}
								value={gift.category}
								type='category'
								name='category'>
								<option>tech</option>
								<option>food</option>
								<option>music</option>
								<option>adventure</option>
								<option>movies</option>
								<option>sports</option>
							</Form.Control>
						</Form.Group>
						<Button variant='primary' type='submit'>
							Submit
						</Button>
						<Button onClick={handleClose}>Close</Button>
					</div>
				</Modal>
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
					<Button variant='outline-warning' onClick={handleShow}>
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
