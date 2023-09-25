import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '../src/Pages/Home';
import Contact from '../src/Pages/Contact';
import Services from '../src/Pages/Services';
import Error from '../src/Pages/Error';
import Job from '../src/Pages/Job';
import About from '../src/Pages/About';
import Privacy from '../src/Pages/Privacy';
import '../src/index.scss';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';

ReactDOM.createRoot(
	document.getElementById('root')
).render(
	<>
		<BrowserRouter basename='/'>
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
					path='/services'
					element={<Services />}
				/>
				<Route
					path='/career'
					element={<Job />}
				/>
				<Route
					path='/privacy-policy'
					element={<Privacy />}
				/>
				<Route
					path='/about'
					element={<About />}
				/>
				<Route
					path='/*'
					element={<Error />}
				/>
			</Routes>
		</BrowserRouter>
	</>
);
