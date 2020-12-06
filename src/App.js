import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './components/notFound/notFound';
import UserForm from './components/userForm/userForm';
import './App.css';

import Nav from './components/Nav/nav';
import Home from './components/home/home';
import Favorites from './components/favorites/favorites';
import GiftForm from './components/giftForm/giftForm';
import GiftList from './components/giftList/giftList';
import GiftShow from './components/giftShow/giftShow';
import GiftListPrice from './components/giftListPrice/giftListPrice';
import Login from './components/login/login';

function App() {
	const [gifts, setGifts] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [token, setToken] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);
	const [userId, setUserId] = useState('');
	return (
		<div className='App'>
				<div>
					<header>
						<Nav
							loggedIn={loggedIn}
							setToken={setToken}
							setLoggedIn={setLoggedIn}
						/>
					</header>
					<main>
						<Switch>
							<Route exact path='/' render={() => <Home token={token} />} />
							<Route path='/new-user' component={UserForm} />
							<Route path='/add-gift' component={GiftForm} />
							<Route
								path='/login'
								render={() => (
									<Login
										token={token}
										setToken={setToken}
										loggedIn={loggedIn}
										setLoggedIn={setLoggedIn}
										userId = {userId}
										setUserId = {setUserId}
									/>
								)}
							/>
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
										userId={userId}
										setToken={setToken}
										token={token}

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
										token={token}
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
			<footer>
				<div>
					<p>&copy; 2020 Anonymous Animals</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
