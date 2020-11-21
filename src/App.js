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

	return (
		<div className='App'>
			{!loggedIn ? (
				<Login token={token} setToken={setToken} setLoggedIn={setLoggedIn} />
			) : (
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
			)}
			<footer>
				<p>&copy; 2020 Anonymous Animals</p>
			</footer>
		</div>
	);
}

export default App;
