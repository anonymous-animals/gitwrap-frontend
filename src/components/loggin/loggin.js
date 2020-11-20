import React from 'react';
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import './loggin.css'

const handleSubmit = (event) => {
    event.preventDefault()
    axios({
        method: 'POST',
        url: 'http://gitwrap-backend.herokuapp.com/user/gifts',
        data: user,


    })
}

const handleChange = (event) => {
    event.preventDefault()
}

const loggin = () => {
    return (
			<div className='userFormContainer'>
				<h1>Loggin</h1>
				<Form onSubmit={handleSubmit} classname='userForm'>
					<Form.Group>
						<Form.Label> Username </Form.Label>
						<Form.Control
							type='name'
							name='name'
							onChange={handleChange}
							value={user.gifts.name}
							placeholder='Enter Username'
						/>
						<Form.Label>E mail</Form.Label>
						<Form.Control
							type='email'
							name='email'
							onChange={handleChange}
							value={user.gifts.email}
							placeholder='user@example.com'
						/>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							name='password'
							onChange={handleChange}
							value={user.gifts.password}
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

export default loggin;