// Search.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Search.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

function Search() {
    return (
        <div className={style.search__container}>
            <AiOutlineSearch className={style.search__icon} />
            {/* <input className={style.search} placeholder='Найти кроссовки' type="text" /> */}
            <NavLink className={style.search__wrapper} to="/search"><input className={style.search} placeholder='Найти кроссовки' type="text" /></NavLink>
        </div>
    );
}

export default Search;
