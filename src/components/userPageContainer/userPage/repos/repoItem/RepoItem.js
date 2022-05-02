import React from 'react';
import styles from './RepoItem.module.css'


const RepoItem = (props) => {
	const {html_url, name, description} = props
	return (
		<div className={styles.repo_item__wrapper}>
			<a className={styles.repo__link} href={html_url} target="_blank">
				{name}
			</a>
			<span className={styles.repo__description}>{description}</span>
		</div>
	)
}

export default RepoItem