import React from 'react'
import style from './Distribution.module.css'
import tokio from '../../assets/tokio.jpg'
function Distribution() {
    return (
        <div className={style.distribution}>

            <div className={style.distribution__wrapper}>

                <img className={style.distribution__image} src={tokio} alt="" />

                <div className={style.distribution__text}>
                    <div className={style.presents}>
                        <p className={style.present}>Розыгрыш подарков</p>
                        <p className={style.present__timer}>Осталось: 04:02:33:30</p>
                    </div>

                    <div className={style.text}>Выйграй Iphone 14 Pro, Be@rBrick 1000%, Apple Watch 8!</div>

                    <button className={style.distribution__button}>Участовать</button>
                </div>

            </div>




        </div>
    )
}

export default Distribution