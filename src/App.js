
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { changeName, fetchPokemon } from "./state/pokeReducer/action";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';

function App() {

    return (
        <div className="App">
            <Header />
            <Footer />
        </div>
    );
}

export default App
