import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Crud from './pages/Crud'
import Home from './pages/Home'
import Ingreso from './pages/Ingreso'
import Perfil from './pages/Perfil'

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/crud" component={Crud} />
					<Route exact path="/ingreso" component={Ingreso} />
					<Route exact path="/perfil" component={Perfil} />
				</Switch>
			</BrowserRouter>
		</>
	)
}

export default App
