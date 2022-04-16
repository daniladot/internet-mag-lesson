import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {changeName, fetchPokemon} from "./state/pokeReducer/action";
import Header from './components/Header/Header'
import Busket from "./components/Busket/Busket";
import Cities from "./components/Header/Сities/Сities";
import LoginForm from "./components/Header/LoginForm/LoginForm";
import RegistrationForm from "./components/Header/RegistrationForm/RegistrationForm";

function App() {
    const menuItemsAll = useSelector(state => state.menuReducer.menuAll)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMenu())
        dispatch(fetchAllMenu())
    }, [])

    return (
        <div className={styles.App}>
            {/* <Header /> */}
            <Header />
            <Busket />
            <RegistrationForm />
            <LoginForm />
            <Cities />
            <Slider />
            <div className={styles.MainContent}>
                {/* <AsideMenu /> */}
                {/*<MenuPage menuItemsAll/> */}
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
