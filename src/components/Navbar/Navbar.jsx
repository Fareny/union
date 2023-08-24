// Navbar.js

import React from 'react';
import style from './Navbar.module.css';
import logo from '../../assets/telegram.png';

function Navbar({ userName }) {
    return (
        <div className={style.nav}>
            <div className={style.user__container}>
                <p className={style.sticker}>😎</p>
                <p className={style.userName}>{userName + ' >'}</p>
            </div>
            <div className={style.channel__container}>
                <div className={style.channel}>
                    <img className={style.channel__logo} src={logo} alt="" />
                    <div className={style.channel__info}>
                        <p className={style.channel__name}>@poizonshop</p>
                        <p className={style.channel__description}>наш Телеграмм-канал</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
