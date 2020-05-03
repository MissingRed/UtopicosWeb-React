import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router'
import '../styles/login.css'

import app from '../Database/base.js'
import { AuthContext } from '../Database/Auth.js'

const Login = ({ history }) => {
	const handleLogin = useCallback(
		async (event) => {
			event.preventDefault()
			const { email, password } = event.target.elements
			try {
				await app.auth().signInWithEmailAndPassword(email.value, password.value)
				history.push('/')
			} catch (error) {
				alert(error)
			}
		},
		[history]
	)

	const { currentUser } = useContext(AuthContext)

	if (currentUser) {
		return <Redirect to="/" />
	}

	return (
		<div className="login-container">
			<div>
				<img src="/img/reducido.png" alt="Utópicos" />
				<span>Inicia sesión para ingresar al panel administrador</span>
				<form onSubmit={handleLogin}>
					<input placeholder="Correo" name="email" type="email" />
					<input
						placeholder="Contraseña"
						name="password"
						className="line-input"
						type="password"
					/>
					<button type="submit">Iniciar Sesión</button>
				</form>
			</div>
			<img src="/img/bobble.svg" className="bobble" alt="" />
		</div>
	)
}

export default withRouter(Login)
