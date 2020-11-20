import React from 'react';
import { Form, Button } from 'react-bootstrap'
import './loggin.css'

const loggin = () => {
    return (
			<div>
                <h1>Loggin</h1>
				<Form>
					<Form.Group controlId='formGroupEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control type='email' placeholder='Enter email' />
					</Form.Group>
					<Form.Group controlId='formGroupPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control type='password' placeholder='Password' />
					</Form.Group>
				</Form>
			</div>
		);
};

export default loggin;