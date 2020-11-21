import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import NewUser from '../userForm/userForm';
import axios from 'axios';
import './login.css';

const Login = ({ setToken, setLoggedIn }) => {
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
	});

	const [showModal, setShowModal] = useState(false);
	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);

	const handleSubmit = (event) => {
		event.preventDefault();
		axios({
			method: 'POST',
			// url: 'https://gitwrap-backend.herokuapp.com//user/signin/',
			url: 'http://localhost:4000/user/signin/',
			data: user,
		})
			.then((res) => {
				setToken(res.data.token);
			})
			.then(() => {
				setLoggedIn(true);
			});
	};

	const handleChange = (event) => {
		event.preventDefault();
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	return (
		<div className='userFormContainer'>
			<h1>Welcome to Gitwrap</h1>
			<h3>Please Login to Begin</h3>
			<Modal
				show={showModal}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}
				className='modal-form'>
				<NewUser handleClose={handleClose} />
			</Modal>
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
					<Form.Label>E-mail</Form.Label>
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
				<Button
					variant='primary'
					className='login-button'
					type='submit'
					onClick={handleSubmit}>
					Submit
				</Button>
				<Button className='login-button' onClick={handleShow}>
					I'm New Here
				</Button>
			</Form>
		</div>
	);
};

export default Login;
