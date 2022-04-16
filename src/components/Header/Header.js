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
                    <li><span><a href="#"><img  className={styles.Point} src="https://w7.pngwing.com/pngs/239/38/png-transparent-computer-icons-location-others-angle-desktop-wallpaper-black.png" alt="Point"/></a></span><a href="#"><span className={styles.Header_region__active}>Москва и МО </span></a>
                    </li>
                    <li><a href="#"><img className={styles.Login} src="https://avatars.mds.yandex.net/i?id=6915e065b1dadbdb3e33120d763b1890-4575500-images-thumbs&n=13" alt="Login"/> Login</a></li>
                    <li><a className={styles.Basket} href="#">Пустая корзина</a></li>
                </ul>
            </nav>
        </section>
    );
}

export default Header;
