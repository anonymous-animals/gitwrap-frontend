import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './login.css';

const Login = ({ setToken }) => {
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
			url: 'http://localhost:4000/user/signin/',
			data: user,
		}).then((res) => {
			console.log(res);
			setToken(res.data.token);
		});
	};

	const handleChange = (event) => {
		event.preventDefault();
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	return (
		<div className='userFormContainer'>
			<h1>Login</h1>
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
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default Login;
