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
	const [favorites, setFavorites] = useState([]);

	return (
		<div className='App'>
			<header>
				<Nav />
			</header>
			<main>
				<Switch>
					<Route exact path='/' render={() => <Home />} />
					<Route path='/add-gift' component={GiftForm} />
					<Route path='/favorites' component={Favorites} />
					<Route
						exact
						path='/gifts/:id'
						render={(routerProps) => (
							<GiftShow
								match={routerProps.match}
								favorites={favorites}
								setFavorites={setFavorites}
								gifts={gifts}
								setGifts={setGifts}
							/>
						)}
					/>
					<Route
						exact
						path='/:category'
						render={(routerProps) => (
							<GiftList
								gifts={gifts}
								setGifts={setGifts}
								match={routerProps.match}
							/>
						)}
					/>
				</Switch>
			</main>
		</div>
	);
}

export default App;
