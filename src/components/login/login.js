import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
	});
	const [showModal, setShowModal] = useState(true);
	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);

	const handleSubmit = (event) => {
		event.preventDefault();
		axios({
			method: 'POST',
			url: 'http://gitwrap-backend.herokuapp.com/user/gifts',
			data: user,
		});
	};

	const handleChange = (event) => {
		event.preventDefault();
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	return (
		<div className='loginFormContainer'>
			<Modal
				show={showModal}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}>
				<h2>Welcome</h2>
				<h3>Please log in to find your perfect gift</h3>
				<Form onSubmit={handleSubmit} className='loginForm'>
					<Form.Group>
						<Form.Label> Username </Form.Label>
						<Form.Control
							type='username'
							name='username'
							onChange={handleChange}
							value={user.username}
							placeholder='Enter Username'
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
					<Button variant='primary' className='login-button' type='submit'>
						Submit
					</Button>
					<Link to='/add-user' className='login-button' onClick={handleClose}>
						I'm new here
					</Link>
				</Form>
			</Modal>
		</div>
	);
};

export default Login;
