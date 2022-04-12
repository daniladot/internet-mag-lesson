import React from 'react';
import styles from './Header.module.scss'

function Header(props) {
    return (
        <section className={styles.Header}>
            <nav>
                <ul>
                    <li><img
                        src="https://static.yakitoriya.ru/static/build/img/svg/yaki_logo.svg"
                        alt="Якитория - доставка суши"/></li>
                    <li>Акции</li>
                    <li>Рестораны</li>
                    <li>О доставке</li>
                    <li><a href="#"><span className="module.Header-region__active">Москва и МО </span></a>
                    </li>
                    <li>Login</li>
                    <li><a className={styles.Basket} href="#">Пустая корзина</a></li>
                </ul>
            </nav>
        </section>
    );
}

export default Header;
