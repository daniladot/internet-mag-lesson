import styles from './LoginForm.module.scss'

import React from 'react';

function LoginForm(props) {
    return (
        <div className={styles.LoginForm}>
            <div className={styles.Cross} >
                <span></span>
            </div>
            <form action="mysuperscript.php" autoComplete="on">
                <h2>Log in</h2>
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
                    <a href="#tosubscribe" className={styles.To_subscribe}>Join us</a>
                </p>
            </form>
        </div>
    );
}

export default LoginForm;