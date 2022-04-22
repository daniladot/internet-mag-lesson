import styles from './RegistrationForm.module.scss'
import React, {useState} from 'react';
import {Link} from  'react-router-dom';
import LoginForm from "../LoginForm/LoginForm";

function RegistrationForm(props) {

    const [closeForm, setCloseForm] = useState(true)
    console.log(1)

    return (
        <div className={styles.RegistrationForm}>
            <div className={styles.Cross} onClick={() => setCloseForm(false)}>
                <span></span>
            </div>
            <form action="#" autoComplete="on">
                <h2 className={styles.Title}> Sign up </h2>
                <p>
                    <label className={styles.SignIn}>Your username</label>
                    <br/>
                    <input type="text" className={styles.SignInInput} placeholder="enter your username"/>
                </p>
                <p>
                    <label> Your email</label>
                    <br/>
                    <input  type="text" placeholder="mysupermail@mail.com"/>
                </p>
                <p  className={styles.SignInPass} >
                    <label>Your password </label>
                    <br/>
                    <input  type="password" placeholder="enter your password"/>
                </p>
                <p  className={styles.ConfSignInPass}>
                    <label >Please confirm your password </label>
                    <input  type="password" placeholder="enter your password"/>
                </p>
                <button className={styles.SignInButton}>Send</button>
                <p className={styles.Change_link}>
                    Already a member ?
                    <a href="#tologin" className={styles.To_LogIn}>Go and log in</a>
                 </p>
            </form>
            {closeForm}
        </div>
    );
}

export default RegistrationForm;