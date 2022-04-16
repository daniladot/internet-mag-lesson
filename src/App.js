import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {changeName, fetchPokemon} from "./state/pokeReducer/action";
import Header from './components/Header/Header'
import Busket from "./components/Busket/Busket";
import Cities from "./components/Header/Сities/Сities";
import LoginForm from "./components/Header/LoginForm/LoginForm";
import RegistrationForm from "./components/Header/RegistrationForm/RegistrationForm";

function App() {

    return (
        <div className="App">
            <Header />
            <Busket />
            <RegistrationForm />
            <LoginForm />
            <Cities />
        </div>
    );
}

export default App;
