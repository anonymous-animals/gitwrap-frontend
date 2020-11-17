import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/nav';

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
