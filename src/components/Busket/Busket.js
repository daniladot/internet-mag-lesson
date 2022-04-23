import React from "react";
import styles from "./Busket.module.scss"
import classNames from "classnames";
import {useSelector} from "react-redux";
import BasketItems from "../BasketItems/BasketItems";

function Busket(props) {
    const basketArray = useSelector((state) => state.basketReducer)

    const allPrice = () => {
        if(basketArray.length){
           return basketArray.map((item) => item.price * item.count).reduce((current, items) => current += items)
        } else {
            return 0
        }
    }

    return (
        <div className={classNames(styles.Basket, props.className)} onMouseEnter={() => props.setModalActive(true)}
             onMouseLeave={() => props.setModalActive(false)}>
            <h3 className={styles.Title}>Корзина заказа</h3>
            <div className={styles.myOrder}>
                <span className={styles.orderText}>Мой заказ</span>
                {
                    basketArray.map(item => {
                        return (
                            <BasketItems name={item.name} count={item.count} price={item.price}/>
                        )
                    })
                }
                <span className={styles.Zero}>0<span className={styles.Rub}>&#8381;</span>
                </span>
            </div>
            <div className={styles.totalOrder}>
                <span className={styles.orderText}>Всего:</span>
                <span className={styles.Zero}>{allPrice()}<span className={styles.Rub}>&#8381;</span>
                </span>
            </div>
            <div className={styles.Total}>
                <span className={styles.orderText}>Общая сумма заказа:</span>
                <span className={styles.Zero}>{allPrice()}</span>
                <span className={styles.Rub}>&#8381;</span>
                <button className={styles.Basket__Button}>Оформить заказ</button>
            </div>
        </div>
    );
}

export default Busket;
