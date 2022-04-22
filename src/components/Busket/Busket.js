import React from 'react';
import styles from './Busket.module.scss'

function Busket(props) {
    return (
        <div className={styles.Basket}>
            <h3 className={styles.Title}>Корзина заказа</h3>
            <div className={styles.myOrder}>
                <span className={styles.orderText}>Мой заказ</span>
                <span className={styles.Zero}>0<span className={styles.Rub}>&#8381;</span>
                </span>
            </div>
            <div className={styles.totalOrder}>
                <span className={styles.orderText}>Всего:</span>
                <span className={styles.Zero}>0<span className={styles.Rub}>&#8381;</span>
                </span>
            </div>
            <div className={styles.Total}>
                <span className={styles.orderText}>Общая сумма заказа:</span>
                <span className={styles.Zero}>0</span>
                <span className={styles.Rub}>&#8381;</span>
                <button className={styles.Basket__Button}>Оформить заказ</button>
            </div>
        </div>
    );
}

export default Busket;
