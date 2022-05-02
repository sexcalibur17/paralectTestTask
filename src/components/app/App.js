import React from 'react';
import styles from './App.module.css'
import gitLogo from '../../assets/images/githubIcon.svg'
import {NavLink, Route, Routes} from 'react-router-dom';
import IndexPage from '../indexPage/indexPage';
import SearchBar from '../searchBar/SearchBar';
import UserPageContainer from '../userPageContainer/UserPageContainer';
import ErrorPage from '../errorPage/ErrorPage';

const App = () => {
  return <div className={styles.app}>
    <div className={styles.header__wrapper}>
      <header className={`${styles.header} ${styles.container}`}>
        <NavLink to='/'>
          <img src={gitLogo} alt='logo'/>
        </NavLink>
        <SearchBar/>
      </header>
    </div>
    <div className={`${styles.content__wrapper} ${styles.container}`}>
      <Routes>
        <Route path='/' element={<IndexPage/>}/>
        <Route path='/:userId' element={<UserPageContainer/>}/>
        <Route path='/error-page' element={<ErrorPage/>}/>
      </Routes>
    </div>
  </div>
}

export default App;
