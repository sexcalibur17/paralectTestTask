import React, {useEffect, useLayoutEffect, useState} from 'react';
import styles from './Paginator.module.css'
import {getPagination} from '../../utils/paginatorUtils';

const Paginator = (props) => {

	const {qty, getRepos, username} = props
	const [currentPage, setCurrentPage] = useState(1)
	const [pageAmount, setPageAmount] = useState(0)
	const [pages, setPages] = useState([])

	useLayoutEffect(()=>{
		setPageAmount(Math.ceil(qty / 4))
	},[qty])

	useEffect(()=>{
		getRepos(username,currentPage)
		if((pages.indexOf(currentPage)===pages.length-1&&currentPage!==pageAmount) || pages.indexOf(currentPage)<0){
			setPages(getPagination(pageAmount, currentPage))
		}
	}, [pages, getRepos, username, currentPage, pageAmount])

	const goBack = () => {
		if (currentPage > 1) {
			setCurrentPage(prevState => prevState - 1)
		}
	}

	const goForward = () => {
		if (currentPage < pageAmount) {
			setCurrentPage(prevState => prevState + 1)
		}
	}

	const changeCurrentPage = (pageNumber) => {
		setCurrentPage(pageNumber)
	}

	return (
		<div className={styles.paginator__wrapper}>
			<span className={styles.paginator__amount}>
				{4 * (currentPage - 1) + 1}-{4 * currentPage} of {qty} items
			</span>
			<button disabled={currentPage === 1}
					onClick={goBack}
					className={`${styles.paginator__button} ${styles.paginator__button_direction}`}>
				{'<'}
			</button>
			{pages.map(el => {
				return <button key={el} className={currentPage === el
					? `${styles.active} ${styles.paginator__button}`
					: styles.paginator__button}
							   onClick={() => {
								   changeCurrentPage(el);
							   }}>{el}</button>
			})}
			{ (pageAmount > 5 && pages.length < 5) &&
				<>
					<span>...</span>
					<button onClick={()=>changeCurrentPage(pageAmount)}
							className={styles.paginator__button}>
						{pageAmount}
					</button>
				</>
			}
			<button disabled={currentPage === pageAmount}
					className={`${styles.paginator__button} ${styles.paginator__button_direction}`}
					onClick={goForward}>
				{'>'}
			</button>
		</div>
	)
}

export default Paginator
