import React from 'react';
import styles from './ErrorPage.module.css'
import userIcon from '../../assets/images/userIcon.svg'

const ErrorPage = () => {
	return (
		<div className={styles.error_page__item}>
			<img className={styles.item__picture} src={userIcon} alt='user icon'/>
			<span className={styles.item__title}>User not found</span>
		</div>
	)
}

export default ErrorPage