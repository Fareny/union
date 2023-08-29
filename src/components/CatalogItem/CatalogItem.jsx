import React from 'react'
import style from './CatalogItem.module.css'
import img from '../../assets/test.png'

function CatalogItem() {

    const items = [
        {
            name: "Кофейный напиток",
            price: "5.99",
            description: "Ароматный кофейный напиток с молоком.",
            photo: ["кофе1.jpg", "кофе2.jpg", "кофе3.jpg"]
        },
        {
            name: "Пицца Маргарита",
            price: "12.99",
            description: "Классическая пицца с томатами и моцареллой.",
            photo: ["пицца1.jpg", "пицца2.jpg", "пицца3.jpg"]
        },
        {
            name: "Салат Цезарь",
            price: "8.49",
            description: "Свежий салат с курицей, сыром и соусом Цезарь.",
            photo: ["салат1.jpg", "салат2.jpg", "салат3.jpg"]
        },
        {
            name: "Бургер Чизбургер",
            price: "9.99",
            description: "Сочный бургер с говяжьей котлетой и сыром.",
            photo: ["бургер1.jpg", "бургер2.jpg", "бургер3.jpg"]
        },
        {
            name: "Спагетти Болоньезе",
            price: "11.49",
            description: "Итальянская паста с мясным соусом Болоньезе.",
            photo: ["паста1.jpg", "паста2.jpg", "паста3.jpg"]
        },
        {
            name: "Десерт Тирамису",
            price: "6.99",
            description: "Классический итальянский десерт с маскарпоне и кофе.",
            photo: ["десерт1.jpg", "десерт2.jpg", "десерт3.jpg"]
        }
    ];



    return (
        items.map(item => (
            <li key={item.name} className={style.item}>

                <img className={style.img} src={img} alt="" />

                <div className={style.info}>

                    <p className={style.price}>{item.price}</p>
                    <p className={style.name}>{item.name}</p>

                </div>

                <div className={style.button__wrapper}>
                    <button type='button' className={style.button}>Купить</button>
                </div>

            </li>
        ))
    )
}

export default CatalogItem