import React from 'react'
import style from './Calculation.module.css'
import test from '../../assets/test.png'

function Calculation() {
    return (
        <section className={style.сalculation__section}>

            <h2 className={style.сalculations}>Расчёты</h2>

            <div className={style.сalculation_wrapper}>

                <div className={style.сalculation_info}>
                    <img className={style.сalculation_img} src={test} alt="" />
                    <div className={style.сalculation_info_wrapper}>
                        <p className={style.сalculation_price}>13 663 ₽</p>
                        <p className={style.сalculation_name}>Stussy x Converse one</p>
                    </div>
                    <div className={style.сalculation_text}>
                        <button type='button' className={style.сalculation_button}>Купить</button>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Calculation