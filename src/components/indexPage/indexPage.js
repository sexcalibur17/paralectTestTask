import React from 'react';
import styles from './indexPage.module.css'
import search from '../../assets/images/searchIcon.svg'

const IndexPage = () => {
	return (
			<div className={styles.index_page__item}>
				<img src={search} alt='search icon' className={styles.item__picture}/>
				<span className={styles.item__title}>
					Start with searching a GitHub user
				</span>
			</div>
	)
}
export default IndexPage