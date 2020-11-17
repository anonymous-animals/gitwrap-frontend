import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/nav';
import Home from './components/home/home';
import Favorites from './components/favorites/favorites';
import GiftForm from './components/giftForm/giftForm';
import GiftList from './components/giftList/giftList';
import GiftShow from './components/giftShow/giftShow';

function App() {
	const [gifts, setGifts] = useState([]);

	return (
		<div className='App'>
			<header>
				<Nav />
			</header>
			<main></main>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/gifts' component={GiftList} />
				<Route path='/gift/:id' component={GiftShow} />
				<Route path='/add-gift' component={GiftForm} />
				<Route path='/favorites' component={Favorites} />
			</Switch>
		</div>
	);
}

export default App;
