import React from 'react';
import styles from './userPage.module.css'
import followersIcon from '../../../assets/images/followersIcon.svg'
import followIcon from '../../../assets/images/followIcon.svg'
import Loader from '../../common/loader/Loader';
import Repos from './repos/Repos';
import Paginator from '../../paginator/Paginator';

const numberFormatter = (number) => {
	if (number > 1000000) {
		return (Math.round(number / 100000) / 10 + 'm')
	} else if (number > 1000) {
		return (Math.round(number / 100) / 10 + 'k')
	} else {
		return number
	}
}


const UserPage = ({user, repos, getRepos, setRepos}) => {

	const qty = user.public_repos

	return (
		<div className={styles.user_page__wrapper}>
			<div className={styles.user__info}>
				<img src={user.avatar_url} className={styles.info__img} alt="user picture"/>
				<span className={styles.info__name}>{user.name}</span>
				<a href={user.html_url} target="_blank"
				   className={styles.info__link_profile}>
					{user.login}
				</a>
				<div className={styles.info__follow}>
					<div className={styles.follow__item}>
						<img src={followersIcon} alt=""/>
						{numberFormatter(user.followers)} followers
					</div>
					<div className={styles.follow__item}>
						<img src={followIcon} alt=""/>
						{numberFormatter(user.following)} following
					</div>
				</div>
			</div>
			<div className={styles.user__repos}>
				{repos ? <Repos user={user} repos={repos}/>
					: <Loader/>
				}
				{qty > 4 && <Paginator setRepos={setRepos} qty={qty} getRepos={getRepos} username={user.login}/>}
			</div>
		</div>
	)
}

export default UserPage