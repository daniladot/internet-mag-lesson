import React, {useEffect, useReducer} from "react"
import styles from "./MenuPage.module.scss"
import {useDispatch, useSelector} from "react-redux"
import ProductItem from "../../components/ProductItem/ProductItem"
import {fetchItemsMenu, setActualUrl} from "../../state/MenuReducer/action"
import {addBasket, removeBasket} from "../../state/BasketReducer/action";
import {useLocation} from "react-router-dom";

function MenuPage(props) {
    const dispatch = useDispatch()
    const history = useLocation()

    const ProducItem = useSelector((state) => state.menuReducer.menuCurrent)
    const BasketItem = useSelector((state) => state.basketReducer)

    const addItemInBasket = (value) => {
        dispatch(addBasket(value))
    }

    const countBasket = (name) => {
        return BasketItem.find((elem, index) => elem.name === name)
    }

    const deleteBasket = (name) => {
        dispatch(removeBasket(name))
    }

    useEffect(() => {
        dispatch(fetchItemsMenu(props.url))
    }, [history.pathname])


    return (
        <div className={styles.MenuPage}>
            {ProducItem?.map((item, index) => {
                return (
                    <ProductItem
                        url={item.imgUrl}
                        name={item.name}
                        desc={item.desc}
                        price={item.price}
                        addItemInBasket={addItemInBasket}
                        count={countBasket(item.name)?.count || 0}
                        deleteBasket={deleteBasket}
                    />
                )
            })}
        </div>
    )
}

export default MenuPage
