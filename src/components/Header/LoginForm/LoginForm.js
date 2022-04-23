import styles from './LoginForm.module.scss'
import React, {useState} from 'react';
import Modal from "../Modal/modal";
import {Link} from "react-router-dom";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import {Route, Router, Routes} from "react-router-dom";

function LoginForm(props) {

    const [registrationForm, setRegistrationForm] = useState(false)


    return (
        <div className={styles.LoginForm}>
            <form action="#" autoComplete="on">
                <h2 className={styles.Title}>Log in</h2>
                <p>
                    <label className={styles.LogIn} > Your email or username </label>
                    <br/>
                    <input type="text" className={styles.LogInInput} placeholder="myusername or mymail@mail.com"/>
                </p>
                <p>
                    <label > Your password </label>
                    <br/>
                    <input type="password" placeholder="enter your password"/>
                </p>
                <p className={styles.keeplogin}>
                    <input type="checkbox" value="loginkeeping"/>
                      <label >Keep me logged in</label>
                </p>
                <button className={styles.LoginButton}>Send</button>
                <p className={styles.Change_link}>
                    Not a member yet ?
                    <a href="#" className={styles.To_subscribe} onClick={() => setRegistrationForm(!registrationForm)}> Join us</a>
                    {/*<a href="#" className={styles.To_subscribe} onClick={() => setRegistrationForm(true)}> Join us</a>*/}
                </p>
            </form>
            {/*<Modal active={registrationForm} setActive={setRegistrationForm}>*/}
            {/*    <RegistrationForm />*/}
            {/*</Modal>*/}
            {registrationForm && <RegistrationForm setRegistrationForm={setRegistrationForm} />}
        </div>
    );
}

export default LoginForm;
