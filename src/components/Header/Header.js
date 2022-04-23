import React, {useState} from "react";
import styles from "./Header.module.scss"
import Modal from "./Modal/modal";
import {Link} from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import Cities from "./Сities/Сities";
import Busket from "../Busket/Busket";
import RegistrationForm from "./RegistrationForm/RegistrationForm";


export default function Header(props) {

    const [modalActive, setModalActive] = useState(false)
    const [loginModalActive, setLoginModalActive] = useState(false)
    const [citiesModalActive, setCitiesModalActive] = useState(false)


    return (
        <section className={styles.Header}>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>
                            <img
                                src="https://www.aislelabs.com/wp-content/uploads/2020/04/1280px-YO_Sushi_logo.svg_.png"
                                alt="Sushi-store"/>
                        </Link>
                    </li>

                    <li><p>Акции</p></li>
                    <li><p>Рестораны</p></li>
                    <li><p>О доставке</p></li>
                    <li><p onClick={() => setLoginModalActive(true)}>Login</p></li>
                    <li><p onClick={() => setCitiesModalActive(true)}
                           className={styles.Header_region__active}>Cities</p></li>
                    <li  onMouseEnter={() => setModalActive(true)} onMouseLeave={() => setModalActive(false)}><p>Корзина</p></li>
                </ul>
            </nav>
            <Modal active={loginModalActive} setActive={setLoginModalActive}>
                <LoginForm/>
            </Modal>
            <Modal active={citiesModalActive} setActive={setCitiesModalActive}>
                <Cities/>
            </Modal>
            {modalActive && <Busket className={styles.Basket} setModalActive={setModalActive}/>}
        </section>

    )
}

