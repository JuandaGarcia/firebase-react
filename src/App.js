import React, { useState, useEffect } from 'react'
import { db } from './config/firebase'

const App = () => {
	const [tareas, setTareas] = useState([])
	const [newTarea, setNewTarea] = useState('')

	useEffect(() => {
		getData()
	}, [])

	const getData = async () => {
		try {
			const data = await db.collection('tareas').get()
			const docs = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
			setTareas(docs)
		} catch (error) {
			alert(error)
		}
	}

	const eliminarTarea = async (id) => {
		try {
			await db.collection('tareas').doc(id).delete()
			const arrayfiltrado = tareas.filter((tarea) => tarea.id !== id)
			setTareas(arrayfiltrado)
		} catch (error) {
			alert(error)
		}
	}

	const editarTarea = async (tarea) => {
		const edit = prompt('Editar tarea', tarea.description)
		if (edit) {
			try {
				await db.collection('tareas').doc(tarea.id).update({
					description: edit,
				})
				const arrayEditado = tareas.map((item) =>
					item.id === tarea.id
						? { id: item.id, description: edit, completed: tarea.completed }
						: item
				)
				setTareas(arrayEditado)
			} catch (error) {
				alert(error)
			}
		}
	}

	const crearTarea = async (event) => {
		event.preventDefault()

		const newTareaObject = {
			description: newTarea,
			completed: false,
		}

		try {
			const data = await db.collection('tareas').add(newTareaObject)
			setNewTarea('')
			setTareas([...tareas, { id: data.id, ...newTareaObject }])
		} catch (error) {
			alert(error)
		}
	}

	const handleChange = (event) => {
		const text = event.target.value
		setNewTarea(text)
	}

	return (
		<>
			<div>
				{tareas.map((tarea) => {
					return (
						<div key={tarea.id}>
							<h2>{tarea.description}</h2>
							<p>
								<strong>Completed:</strong> {tarea.completed ? 'Yes' : 'No'}
							</p>
							<button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
							<button onClick={() => editarTarea(tarea)}>Editar</button>
						</div>
					)
				})}
			</div>
			<div>
				<form onSubmit={crearTarea}>
					<input
						placeholder="Ingrese nueva tarea"
						type="text"
						required
						value={newTarea}
						onChange={handleChange}
					/>
					<button>Añadir Tarea</button>
				</form>
			</div>
		</>
	)
}

export default App
