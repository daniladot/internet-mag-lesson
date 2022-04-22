import styles from './Сities.module.scss'
import React from 'react';

function Сities(props) {
    return (
        <div className={styles.ChooseRegion}>
                <h2 className={styles.Title}>Укажите свой город</h2>
                <ul className={styles.ChooseRegion__List}>
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