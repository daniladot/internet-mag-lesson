import React, {useEffect} from "react";
import styles from './MenuPage.module.scss'
import {useDispatch, useSelector} from "react-redux";
import ProductItem from "../../components/ProductItem/ProductItem";
import {fetchItemsMenu} from "../../state/MenuReducer/action";

function MenuPage(props) {

    const dispatch = useDispatch()

    const ProducItem = useSelector(state => state.menuReducer.menuCurrent)

    useEffect(() => {
        dispatch(fetchItemsMenu(props.url))
    }, [ProducItem])

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
