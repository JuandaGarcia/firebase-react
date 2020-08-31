import React, { useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { auth, db } from '../config/firebase'

const Ingreso = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isRegister, setIsRegister] = useState(true)
	const history = useHistory()

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

		if (isRegister) {
			registrar()
		} else {
			login()
		}
	}

	const registrar = useCallback(async () => {
		try {
			const res = await auth.createUserWithEmailAndPassword(email, password)
			await db.collection('users').doc(res.user.uid).set({
				email: res.user.email,
				uid: res.user.uid,
				hola: 'mundo',
			})
			setEmail('')
			setPassword('')
			console.log(res.user)
			history.push('/perfil')
		} catch (error) {
			alert(error.code)
			alert(error.message)
		}
	}, [email, password, history])

	const login = useCallback(async () => {
		try {
			const res = await auth.signInWithEmailAndPassword(email, password)
			setEmail('')
			setPassword('')
			console.log(res.user)
			history.push('/perfil')
		} catch (error) {
			alert(error.code)
			alert(error.message)
		}
	}, [email, password, history])

	return (
		<>
			<h1>{isRegister ? 'Registro' : 'Iniciar Sesión'}</h1>
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
				<button>{isRegister ? 'Registrarse' : 'Iniciar Sesión'}</button>
				<br />
				<br />
				<button onClick={() => setIsRegister(!isRegister)} type="button">
					{isRegister ? 'Ingresar' : 'Crear Cuenta'}
				</button>
			</form>
		</>
	)
}

export default Ingreso
