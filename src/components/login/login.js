import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Form, Button, Modal, Container, Row, Col } from 'react-bootstrap';
import Home from '../home/home';
import NewUser from '../userForm/userForm';
import axios from 'axios';
import Logo from '../../imgs/gitwrapLogo.png';
import './login.css';


const Login = ({ setToken, setLoggedIn, loggedIn, userId, setUserId }) => {
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
	});

	const [redirect, setRedirect] = useState(false)
	const [showModal, setShowModal] = useState(false);
	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);
	const [error, setError] = useState('');
	

	const handleSubmit = (event) => {
		event.preventDefault();
		axios({
			method: 'POST',
			// url: 'https://gitwrap-backend.herokuapp.com/user/signin/',
			url: 'http://localhost:4000/user/signin/',
			data: user,
		})
			.then((res) => {
				setToken(res.data.token);
				setUserId(res.data.userId)
				if (res.data.token) {
					setLoggedIn(true)
					setRedirect(true)
				} else {
					setError(res.data);
				}
			})
			.catch(console.error);
	};

	const handleChange = (event) => {
		event.preventDefault();
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	if (redirect) {
		return	<Redirect to='/' />;
	}

	return (
		<div>
			<div className='img-container'>
				<img src={Logo} />
			</div>
			<Container>
				<Row>
					<Col xs={{ order: 'last' }}></Col>
					<Col xs>
						<div className='userFormContainerTwo'>
							<div className='userFormContainer'>
								<h5>Login to Find the Perfect Gift!</h5>
								<h5 className='error'>{error}</h5>
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
									<div className='button-container'>
										<Button
											variant='primary'
											className='login-button'
											type='submit'
											onClick={handleSubmit}>
											Login
										</Button>
										<Button className='login-button' onClick={handleShow}>
											Sign Up
										</Button>
									</div>
								</Form>
							</div>
						</div>
					</Col>
					<Col xs={{ order: 'first' }}></Col>
				</Row>
			</Container>
		</div>
	);
};

export default Login;
