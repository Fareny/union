// SearchList.js

import React, { useState } from 'react';
import style from './SearchList.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

function SearchList() {

    const [search, setSearch] = useState('');

    return (
        <div className={style.search__container}>
            <AiOutlineSearch className={style.search__icon} />
            <input
                className={style.search}
                type="text"
                placeholder="Поиск..."
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className={style.find}>



            </div>
        </div>

    );
}

export default SearchList;
