import React, {useEffect, useState} from 'react';
import styles from './UserPage.module.css'
import {useNavigate, useParams} from 'react-router-dom';
import Loader from '../common/loader/Loader';

const UserPage = () => {

	const params = useParams()
	const navigate = useNavigate()

	const [user, setUser] = useState(null)
	const [repos, setRepos] = useState(null)

	const getUser = async (username) => {
		const response = await fetch(` https://api.github.com/users/${username}`)
		if (!response.ok) {
			const state = await response.json()
			navigate('/error', {state: {...state}})
			return
		}
		return await response.json()
	}

	const getRepos = async (user) => {
		const response = await fetch(` https://api.github.com/users/${user.login}/repos`)
		const repos = await response.json()
		setUser(user)
		setRepos(repos)
		return {user, repos}
	}

	useEffect(() => {
		getUser(params.userId)
			.then(user => getRepos(user))
	}, [])

	console.log(user, repos)

	return (
		user
			? <div>
				user here
			</div>
			: <Loader/>
	)
}

export default UserPage


//TODO add throw error behavior