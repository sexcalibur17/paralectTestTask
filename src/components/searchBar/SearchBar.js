import React, {useState} from 'react';
import styles from './SearchBar.module.css'
import searchIcon from '../../assets/images/searchIcon.svg';
import {useNavigate} from 'react-router-dom';

const SearchBar = () => {

	const [inputValue, setInputValue] = useState('')

	const navigate = useNavigate()

	const handleSearch = (e) => {
		e.preventDefault()
		navigate(`/${inputValue}`)
		setInputValue('')
	}

	const handleInput = (e) => {
		setInputValue(e.target.value)
	}


	return  <form className={styles.header__search_wrapper}>
		<button onClick={handleSearch}
			className={styles.header__search_button}>
			<img src={searchIcon}
				alt='search'/>
		</button>
		<input onChange={handleInput}
			   value={inputValue}
			   type='text'
			   className={styles.header__search_input}/>
	</form>
}

export default SearchBar