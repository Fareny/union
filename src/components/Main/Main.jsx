import React from 'react'
import style from './Main.module.css'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

function Main() {
    return (
        <div className={style.main}>

            <div className={style.main__wrapper}>

                <div className={style.coins}>
                    <div className={style.coins__wrapper}>
                        <h4 className={style.coins__title}>Баллы</h4>
                        <MdKeyboardArrowRight className={style.coins__icon} />
                    </div>
                    <div className={style.coins__value_wrapper}>
                        <p className={style.coins__value}>₽</p>
                        <p className={style.coins__text}>0</p>
                    </div>
                </div>
                <div className={style.invite}>
                    <div className={style.invite__wrapper}>
                        <h4 className={style.invite__title}>Зови <br /> друзей</h4>
                        <MdKeyboardArrowRight className={style.invite__icon} />
                    </div>

                    <p className={style.invite__text}>Дарим по 500₽ - тебе и приведенному другу</p>

                </div>

            </div>

            <div className={style.order}>
                <h4 className={style.order__title}>Выбрать<br />и заказать</h4>
                <BsFillArrowRightCircleFill className={style.order__icon} />
            </div>

        </div>
    )
}

export default Main