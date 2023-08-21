import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '../src/Pages/Home';
import Contact from '../src/Pages/Contact';
import Error from '../src/Pages/Error';
import '../src/index.css';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';

ReactDOM.createRoot(
	document.getElementById('root')
).render(
	<>
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/contact'
					element={<Contact />}
				/>
				<Route
					path='*'
					element={<Error />}
				/>
			</Routes>
		</BrowserRouter>
	</>
);