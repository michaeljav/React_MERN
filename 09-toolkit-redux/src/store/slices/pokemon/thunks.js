import { pokemonApi } from '../../../api/pockemonApi';
import { setPokemon, startLoadingPokemon } from './pokemonSlice';

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemon());

    //TODO: realizar peticion http
    // const resp = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    // );
    // const data = await resp.json();

    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );

    dispatch(setPokemon({ pokemons: data.results, page: page + 1 }));
  };
};
