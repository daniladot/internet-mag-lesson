import React from 'react';
import styles from './MenuPage.module.scss'
import {useSelector} from "react-redux";
import ProductItem from "../../components/ProductItem/ProductItem";

function MenuPage(props) {

    const ProducItem = useSelector(state => state.menuReducer.menuAll)

    console.log(ProducItem)
    return (
        <div className={styles.MenuPage}>
            {ProducItem?.map((item,index) => {
                return(
                    <ProductItem url={item.imgUrl}/>
                )
            })}
        </div>
    );
}

export default MenuPage;
