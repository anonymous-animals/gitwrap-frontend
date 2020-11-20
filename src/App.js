import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './components/notFound/notFound';
import './App.css';

import Nav from './components/Nav/nav';
import Home from './components/home/home';
import Favorites from './components/favorites/favorites';
import GiftForm from './components/giftForm/giftForm';
import GiftList from './components/giftList/giftList';
import GiftShow from './components/giftShow/giftShow';
import GiftListPrice from './components/giftListPrice/giftListPrice';
import Login from './components/login/login';
import UserForm from './components/userForm/userForm';

function App() {
	const [gifts, setGifts] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [logged, setLogged] = useState(false);
	// const [submitted, setSubmitted] = useState(false);

	return (
		<div className='App'>
			<header>
				<Nav logged={logged} />
				{logged ? null : <Login />}
			</header>
			<main>
				<Switch>
					<Route exact path='/' render={() => <Home />} />
					<Route path='/add-gift' component={GiftForm} />
					<Route path='/add-user' component={UserForm} />
					<Route
						exact
						path='/favorites'
						render={() => <Favorites favorites={favorites} />}
					/>
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
						path='/category/:category'
						render={(routerProps) => (
							<GiftList
								gifts={gifts}
								setGifts={setGifts}
								match={routerProps.match}
							/>
						)}
					/>
					<Route
						exact
						path='/price/:price'
						render={(routerProps) => (
							<GiftListPrice
								gifts={gifts}
								setGifts={setGifts}
								match={routerProps.match}
							/>
						)}
					/>
					<Route component={NotFound} />
				</Switch>
			</main>
		</div>
	);
}

export default App;
