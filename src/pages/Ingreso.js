import React, { useState } from 'react'

const Ingreso = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!email.trim()) {
			alert('Por favor ingrese el email')
		}
		if (!password.trim()) {
			alert('Por favor ingrese la contraseña')
		}
		if (password.length < 8) {
			alert('minimo 8 caracteres')
		}
		console.log('Paso todas las validaciones')
	}

	return (
		<>
			<h1>Iniciar Sesión</h1>
			<form onSubmit={handleSubmit}>
				<input
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					type="email"
				/>
				<input
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					type="password"
				/>
				<button>Iniciar Sesión</button>
			</form>
		</>
	)
}

export default Ingreso
