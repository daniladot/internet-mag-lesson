import React from 'react';
import styles from './AsideMenu.module.scss'
import {useSelector} from "react-redux";
import MenuItem from "../MenuItem/MenuItem";

function AsideMenu(props) {

    const menuItems = useSelector(state => state.menuReducer.menu)


    return (
        <div className={styles.AsideMenu}>
            <h3>МЕНЮ ДОСТАВКИ</h3>
            {
                menuItems.map((item, index) => {
                    return (
                        <MenuItem url={item.imgUrl} categoryName={item.categoryName} itemName={item.name}/>
                    )
                })
            }
        </div>
    );
}

export default AsideMenu;
