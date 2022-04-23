import React, {useState} from 'react';
import styles from './Header.module.scss'
import Modal from "./Modal/modal";
import {Link} from  'react-router-dom';
import LoginForm from "./LoginForm/LoginForm";
import Cities from "./Сities/Сities";
import Busket from "../Busket/Busket";
import RegistrationForm from "./RegistrationForm/RegistrationForm";


function Header(props) {

    const [modalActive, setModalActive] = useState(false)
    const [loginModalActive, setLoginModalActive] = useState(false)
    const [citiesModalActive, setCitiesModalActive] = useState(false)


    return (
        <section className={styles.Header}>
            <nav>
                <ul>
                    <li>
                        <img src="https://static.yakitoriya.ru/static/build/img/svg/yaki_logo.svg" alt="Якитория - доставка суши" />
                    </li>
                    <li>Акции</li>
                    <li>Рестораны</li>
                    <li>О доставке</li>
                    <li><span><a href="#"><img className={styles.Point} src="https://w7.pngwing.com/pngs/239/38/png-transparent-computer-icons-location-others-angle-desktop-wallpaper-black.png" alt="Point" /></a></span><a href="#"><span className={styles.Header_region__active}>Москва и МО </span></a>
                    <li>
                        <Link to={'/'}>
                            <img
                                src="https://www.aislelabs.com/wp-content/uploads/2020/04/1280px-YO_Sushi_logo.svg_.png"
                                alt="Sushi-store"/>
                        </Link>
                    </li>
                    <li><p>Акции</p></li>
                    <li><p>Рестораны</p></li>
                    <li><p>О доставке</p></li>
                    <li><p onClick={() => setLoginModalActive(true)}>Login</p></li>
                    <li><p onClick={() => setCitiesModalActive(true)} className={styles.Header_region__active}>Cities</p></li>
                    <li><p onClick={() => setModalActive(true)}>Корзина</p></li>
                </ul>
            </nav>
            <Modal active={loginModalActive} setActive={setLoginModalActive}>
                <LoginForm />
            </Modal>
            <Modal active={citiesModalActive} setActive={setCitiesModalActive}>
             <Cities />
            </Modal>
            <Modal active={modalActive} setActive={setModalActive}>
               <Busket />
            </Modal>
        </section>
    );
}

export default Header;
