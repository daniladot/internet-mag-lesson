
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {changeName, fetchPokemon} from "./state/pokeReducer/action";
import Header from './components/Header/Header'

function App() {

    return (
        <div className="App">
            <Header />
        </div>
    );
}

export default App
