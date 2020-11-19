import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './nav.css';

const nav = () => {
	return (
		<div>
			<Navbar bg='light' expand='lg'>
				<Link to='/'>
					<Navbar.Brand id='brand'>gitWrap</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Link to='/add-gift' className='nav-link'>
							Add a Gift
						</Link>
						<Link to='/favorites' className='nav-link'>
							Favorites
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default nav;
