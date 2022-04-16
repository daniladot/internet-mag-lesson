import styles from "./App.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllMenu, fetchMenu} from "./state/MenuReducer/action";
import MenuItem from "./components/MenuItem/MenuItem.js";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductItem from "./components/ProductItem/ProductItem";
import MenuPage from "./pages/MenuPage/MenuPage";
import AsideMenu from "./components/AsideMenu/AsideMenu";
import {useEffect} from "react";
import Slider from "./components/Slider/Slider";
import Busket from "./components/Busket/Busket";
import RegistrationForm from "./components/Header/RegistrationForm/RegistrationForm";
import LoginForm from "./components/Header/LoginForm/LoginForm";
import Сities from "./components/Header/Сities/Сities"
import {Route, Router, Routes} from "react-router-dom";


function App() {
    const menuItemsAll = useSelector(state => state.menuReducer.menuAll)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMenu())
        dispatch(fetchAllMenu())
    }, [])

    return (
        <div className={styles.App}>
            <Header/>
            {/*<Busket/>*/}
            <div className={styles.MainContent}>
                <Routes>
                    <Route path={"/"} element={<div>
                        <AsideMenu/>
                        <Slider/>
                    </div>}/>
                    <Route path={"/sasimi"} element={<div>
                        <AsideMenu/>
                        <MenuPage url='sasimi'/>
                    </div>}/>
                    <Route path={"/hot-rolls"} element={<div>
                        <AsideMenu/>
                        <MenuPage url='hot-rolls'/>
                    </div>}/>
                    <Route path={"/rolls"} element={<div>
                        <AsideMenu/>
                        <MenuPage url='rolls'/>
                    </div>}/>
                </Routes>

            </div>
            <Footer/>
        </div>
    );
}

export default App;
