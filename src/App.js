import styles from './App.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {changeName, fetchMenu, fetchPokemon} from "./state/MenuReducer/action";
import MenuItem from './components/MenuItem/MenuItem.js';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductItem from "./components/ProductItem/ProductItem";
import MenuPage from "./pages/MenuPage/MenuPage";
import AsideMenu from "./components/AsideMenu/AsideMenu";
import {useEffect} from "react";

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMenu())
    }, [])

    return (
        <div className={styles.App}>
            <Header/>
            <div className={styles.MainContent}>
                <AsideMenu/>
                <MenuPage/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
