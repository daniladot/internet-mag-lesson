import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {changeName, fetchPokemon} from "./state/pokeReducer/action";
import MenuItem from './components/MenuItem/MenuItem.jsx';

function App() {

    return (
        <div className="App">
            <MenuItem url ='https://static.yakitoriya.ru/media/cache/87/12/87122f83c1c16aba22de3f3f99e144e6.png' itemName='Роллы'/>
            <MenuItem url ='https://static.yakitoriya.ru/media/cache/d6/e0/d6e06ffa4e49c2409af2ba5162d725aa.png' itemName='Горячие роллы'/>
        </div>
    );
}

export default App;
