import React, { useEffect, useState } from 'react';
import {
	Card,
	ListGroup,
	ListGroupItem,
	Button,
	Form,
	Modal,
	Alert,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './giftShow.css';

const GiftShow = ({ match, favorites, setFavorites, userId, token, setToken }) => {
	const [gift, setGift] = useState();
	const [showModal, setShowModal] = useState(false);
	const [deleteAlert, setDeleteAlert] = useState(false);
	const [editAlert, setEditAlert] = useState(false);

	useEffect(() => {
		const giftUrl = `https://gitwrap-backend.herokuapp.com/gifts/${match.params.id}`;
		// const giftUrl = `http://localhost:4000/gifts/${match.params.id}`;

		fetch(giftUrl)
			.then((res) => res.json())
			.then((res) => {
				setGift(res);
			})

			.catch(console.error);
	}, []);

	const handleClick = (event) => {
		event.preventDefault();
		axios({
			method: 'PUT',
			// url: 'https://gitwrap-backend.herokuapp.com/gifts',
			url: `http://localhost:4000/user/${userId}/${match.params.id}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: gift,
		});

		// setFavorites([
		// 	...favorites,
		// 	{
		// 		name: gift.name,
		// 		image: gift.image,
		// 		id: gift._id,
		// 		category: gift.category,
		// 		description: gift.description,
		// 		link: gift.link,
		// 		price: gift.price,
		// 	},
		// ]);
	};
	const handleChange = (event) => {
		event.preventDefault();
		setGift({ ...gift, [event.target.name]: event.target.value });
		setEditAlert(true);
	};
	const handleSelection = (event) => {
		event.preventDefault();
		setGift({ ...gift, [event.target.name]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		axios({
			method: 'PATCH',
			// url: `https://gitwrap-backend.herokuapp.com/gifts/${match.params.id}`,
			url: `http://localhost:4000/gifts/${match.params.id}`,
			data: gift,
		});
		setShowModal(false);
	};

	const handleDelete = () => {
		axios({
			method: 'DELETE',
			// url: `https://gitwrap-backend.herokuapp.com/gifts/${match.params.id}`,
			url: `http://localhost:4000/gifts/${match.params.id}`,
		});
		setDeleteAlert(true);
	};

	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);

	if (!gift) {
		return <h1>Loading...</h1>;
	}
	return (
		<div>
			{deleteAlert ? (
				<Alert
					variant='danger'
					onClose={() => setDeleteAlert(false)}
					dismissible>
					<Alert.Heading>Success!</Alert.Heading>
					Your gift has been successfully deleted
				</Alert>
			) : null}
			{editAlert ? (
				<Alert
					variant='success'
					onClose={() => setEditAlert(false)}
					dismissible>
					<Alert.Heading>Success!</Alert.Heading>
					Your gift has been successfully edited
				</Alert>
			) : null}
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
						<Button type='submit' onClick={handleSubmit}>
							Submit
						</Button>
					</div>
				</Modal>
			) : null}

			<div className='gift-card'>
				<Card style={{ width: '30rem' }}>
					<Card.Img variant='top' src={gift.image} />
					<Card.Body>
						<Card.Title>{gift.name}</Card.Title>
						<Card.Text>{gift.description}</Card.Text>
					</Card.Body>
					<ListGroup className='list-group-flush'>
						<ListGroupItem>${gift.price}</ListGroupItem>
						<ListGroupItem>
							Category:
							<br />
							{typeof gift.category === 'string'
								? gift.category.charAt(0).toUpperCase() + gift.category.slice(1)
								: gift.category.map((type) => <p>{type}</p>)}
						</ListGroupItem>
						<Card.Link href={gift.link} target='_blank'>
							Buy Now
						</Card.Link>
					</ListGroup>
					<div className='modal-buttons'>
						<Card.Body>
							<Button
								variant='outline-warning'
								className='button'
								onClick={handleShow}>
								Edit
							</Button>
							<Button
								variant='outline-danger'
								className='button'
								onClick={handleDelete}>
								Delete
							</Button>
							<Button
								variant='outline-primary'
								className='button'
								onClick={handleClick}>
								Add to Favorites
							</Button>
						</Card.Body>
					</div>
				</Card>
				<Link to='/'>
					<Button variant='outline-primary' class-Name='back-to-home-button'>
						Back to Home
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default GiftShow;
