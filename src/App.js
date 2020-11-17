import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav/nav';
import Home from './components/home/Home';
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
			<main>
				<Switch>
					<Route
						exact
						path='/'
						render={() => <Home gifts={gifts} setGifts={setGifts} />}
					/>
					<Route
						exact
						path='/gifts'
						render={() => <GiftList gifts={gifts} setGifts={setGifts} />}
					/>
					<Route
						path='/gifts/:id'
						render={(routerProps) => <GiftShow match={routerProps.match} />}
					/>
					<Route path='/add-gift' component={GiftForm} />
					<Route path='/favorites' component={Favorites} />
				</Switch>
			</main>
		</div>
	);
}

export default App;
