import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav/nav';

import Favorites from './components/favorites/favorites';
import GiftForm from './components/giftForm/giftForm';
import GiftList from './components/giftList/giftList';

function App() {
	const [gifts, setGifts] = useState([]);

	return (
		<div className='App'>
			<Nav />
			my squad is dope i can second that.
		</div>
	);
}

export default App;
