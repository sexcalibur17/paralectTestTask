import React from 'react';
import styles from './Repos.module.css'
import RepoItem from './repoItem/RepoItem';
import noRepos from '../../../../assets/images/noRepos.svg'

const Repos = ({user, repos}) => {
	return (
		repos.length ?
			<>
				<h1 className={styles.repo__title}>Repositories ({user.public_repos})</h1>
				<div className={styles.repo__wrapper}>
					{repos?.map(el => {
						return <RepoItem key={el.id} html_url={el.html_url} name={el.name}
										 description={el.description}/>
					})}
				</div>
			</>
			: <div className={styles.no_repo}>
				<img src={noRepos} alt="no repos?"/>
				<span> Repository list is empty </span>
			</div>
	)
}

export default Repos