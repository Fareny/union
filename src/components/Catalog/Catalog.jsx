import React from 'react'
import style from './Catalog.module.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { VscSettings } from 'react-icons/vsc'
import CatalogItem from '../CatalogItem/CatalogItem'

function Catalog() {
    return (
        <section className={style.catalog}>

            <div className={style.catalog__wrapper}>

                <h2 className={style.catalog__title}>Каталог</h2>

                <div className={style.catalog__options}>
                    <AiOutlineSearch className={style.search__icon} />
                    <VscSettings className={style.settings__icon} />
                </div>

            </div>

            <ul className={style.catalog__list}>
                <CatalogItem />
            </ul>


        </section>
    )
}

export default Catalog