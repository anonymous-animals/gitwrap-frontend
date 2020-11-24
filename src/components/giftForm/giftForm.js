import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
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
		category: 'adventure',
	});
	const handleChange = (event) => {
		event.preventDefault();
		setGift({ ...gift, [event.target.name]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		axios({
			method: 'POST',
			url: 'https://gitwrap-backend.herokuapp.com/gifts',
			// url: 'http://localhost:4000/gifts',
			data: gift,
		});
		history.push('/');
	};
	return (
		
		<div className='form'>
			<h2>Add A New Gift</h2>
			<Form onSubmit={handleSubmit} className='formContainer'>
				<Form.Group>
					<Form.Label htmlFor='name'>Name</Form.Label>
					<Form.Control
						type='name'
						name='name'
						onChange={handleChange}
						value={gift.name}
						placeholder='Name of Gift'
					/>
					<Form.Group>
						<Form.Label>Description</Form.Label>
						<Form.Control
							as='textarea'
							rows={3}
							name='description'
							onChange={handleChange}
							value={gift.description}
							placeholder='Brief Description'
						/>
					</Form.Group>
					<Form.Label>Image</Form.Label>
					<Form.Control
						type='img-url'
						name='image'
						onChange={handleChange}
						value={gift.image}
						placeholder='Image Url Please'
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
						placeholder='Purchase Url Please'
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
