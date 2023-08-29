import React from 'react'
import style from './Paid.module.css'
import test from '../../assets/test.png'

function Paid() {
    return (
        <section className={style.paid_section}>

            <h2 className={style.paid}>Оплачивается</h2>

            <div className={style.paid_wrapper}>

                <img className={style.paid_img} src={test} alt="" />

                <div className={style.paid_info}>
                    <div className={style.paid_info_wrapper}>
                        <p className={style.paid_price}>13 663 ₽</p>
                        <p className={style.paid_name}>Stussy x Converse one star </p>
                    </div>
                    <p className={style.paid_text}>Расчёт готов</p>
                </div>

            </div>

        </section>
    )
}

export default Paid