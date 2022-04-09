import {CHANGE_NAME, FETCH_POKEMON_ERROR, FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS} from "./types";

export const changeName = (value) => {
    return ({type: CHANGE_NAME, payload: value})
}

export const fetchPokemonRequest = () => {
    return ({type: FETCH_POKEMON_REQUEST})
}

export const fetchPokemonSuccess = () => {
    return ({type: FETCH_POKEMON_SUCCESS})
}

export const fetchPokemonError = (err) => {
    return ({type: FETCH_POKEMON_ERROR, payload: err})
}

export const fetchPokemon = () => {
    return dispatch => {
        dispatch(fetchPokemonRequest())

        fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
            .then(res => res.json())
            .then(res => {
                dispatch(fetchPokemonSuccess())
                dispatch(changeName(res.name))
            })
            .catch(err => dispatch(fetchPokemonError(err)))
    }
}
