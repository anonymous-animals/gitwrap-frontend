import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav/nav';
import Home from './components/home/Home';
import Favorites from './components/favorites/favorites';
import GiftForm from './components/giftForm/giftForm';
import GiftList from './components/giftList/GiftList';
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
					<Route exact path='/' render={() => <Home />} />
					<Route
						exact
						path='/gifts/:category'
						render={(routerProps) => (
							<GiftList
								gifts={gifts}
								setGifts={setGifts}
								match={routerProps.match}
							/>
						)}
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
