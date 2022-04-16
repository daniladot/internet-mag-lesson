import styles from './Сities.module.scss'
import React from 'react';

function Сities(props) {
    return (
        <div className={styles.ChooseRegion}>
            <div className={styles.Cross} >
                <span></span>
            </div>
            <h3>Укажите свой город</h3>
            <ul>
                <li>Москва и Московская область</li>
                <li>Воронеж</li>
                <li>Екатеринбург</li>
                <li>Пенза</li>
                <li>Тверь</li>
            </ul>
        </div>
    );
}

export default Сities;