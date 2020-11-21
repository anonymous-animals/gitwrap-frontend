import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './userForm.css';

const Login = ({ handleClose }) => {
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		axios({
			method: 'POST',
			// url: 'https://gitwrap-backend.herokuapp.com//user/signin/',
			url: 'http://localhost:4000/user/signup/',
			data: user,
		});
		handleClose();
	};

	const handleChange = (event) => {
		event.preventDefault();
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	return (
		<div className='userFormContainer'>
			<h1>create a username to begin</h1>
			<Form onSubmit={handleSubmit} className='userForm'>
				<Form.Group>
					<Form.Label> Username </Form.Label>
					<Form.Control
						type='username'
						name='username'
						onChange={handleChange}
						value={user.username}
						placeholder='Enter Username'
					/>
					<Form.Label>E mail</Form.Label>
					<Form.Control
						type='email'
						name='email'
						onChange={handleChange}
						value={user.email}
						placeholder='user@example.com'
					/>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						name='password'
						onChange={handleChange}
						value={user.password}
						placeholder='Enter Password'
					/>
				</Form.Group>
				<Link to='/login'>
					<Button
						variant='primary'
						className='login-button'
						type='submit'
						onClick={handleSubmit}>
						Submit
					</Button>
				</Link>
			</Form>
		</div>
	);
};

export default Login;
