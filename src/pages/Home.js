import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<ul>
			<li>
				<Link to="/crud">CRUD</Link>
			</li>
			<li>
				<Link to="/ingreso">Auth</Link>
			</li>
		</ul>
	)
}

export default Home
