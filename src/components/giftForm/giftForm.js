import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './giftForm.css';

const GiftForm = () => {
	const history = useHistory();
	const [gift, setGift] = useState({
		name: '',
		description: '',
		image: '',
		price: '',
		purchaseLink: '',
		category: ['adventure'],
	});
	const handleChange = (event) => {
		event.preventDefault();
		setGift({ ...gift, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios({
			method: 'POST',
			url: 'http://localhost:4000/gifts',
			data: gift,
		});
		history.push('/');
	};
	return (
		<div class='form'>
			<h2>Add A New Gift</h2>
			<Form onSubmit={handleSubmit} class='formContainer'>
				<Form.Group>
					<Form.Label htmlFor='name'>Name</Form.Label>
					<Form.Control
						type='name'
						name='name'
						id='name'
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
							id='description'
							onChange={handleChange}
							value={gift.description}
							placeholder='brief description'
						/>
					</Form.Group>
					<Form.Label>Image</Form.Label>
					<Form.Control
						type='img-url'
						name='image'
						id='image'
						onChange={handleChange}
						value={gift.image}
						placeholder='image url please'
					/>
					<Form.Label>Price</Form.Label>
					<Form.Control
						type='price'
						name='price'
						id='price'
						onChange={handleChange}
						value={gift.price}
						placeholder='$0.00'
					/>
					<Form.Label>Purchase Link</Form.Label>
					<Form.Control
						type='purchase-link'
						name='purchase-link'
						id='purchase-link'
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
			</Form>
		</div>
	);
};

export default GiftForm;
