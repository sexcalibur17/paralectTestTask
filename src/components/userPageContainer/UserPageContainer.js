import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Loader from '../common/loader/Loader';
import UserPage from './userPage/userPage';

const UserPageContainer = () => {

	const params = useParams()
	const navigate = useNavigate()

	const [user, setUser] = useState(null)
	const [repos, setRepos] = useState(null)

	const getUser = async (username) => {
		const response = await fetch(` https://api.github.com/users/${username}`)
		if (!response.ok) {
			throw await response.json()
		}
		const user = await response.json()
		setUser(user)
		return user
	}

	const getRepos = async (username, page = 1) => {
		setRepos(null)
		const response = await fetch(` https://api.github.com/users/${username}/repos?page=${page}&per_page=4`)
		const repos = await response.json()
		setRepos(repos)
		return repos
	}

	useEffect(() => {
		getUser(params.userId)
			.catch(e => {
				navigate('/error-page', {state: {...e}})
				return {}
			}).then(user => getRepos(user.login))
	}, [params.userId])

	return (
		user
			? <UserPage user={user} repos={repos} getRepos={getRepos} setRepos={setRepos}/>
			: <Loader/>
	)
}

export default UserPageContainer
