import {useEffect, useState} from "react";
import type {Pokemon, PokemonListDTO} from "~/types/pokemon.dto";

const usePokemons = (offset: number, limit: number) => {
    const [pokemonsResponse, setPokemonsResponse] = useState<PokemonListDTO | null>(null);
    const [loading, setLoading] = useState<boolean>();
    const [error, setError] = useState<Error>();

    useEffect(() => {
        const queryParams = new URLSearchParams({offset: String(offset), limit: String(limit)});
        setLoading(true);

        fetch(import.meta.env.VITE_API_URL_POKEDEX + '/pokemon?' + queryParams.toString())
            .then(response => response.json())
            .then(data => setPokemonsResponse(data))
            .catch(error => setError(error))
            .finally(() => setLoading(false));

    }, [offset, limit]);

    return {pokemonsResponse, loading, error};
}

const usePokemonsSearch = (searchText: string) => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>();
    const [error, setError] = useState<Error>();
    useEffect(() => {
        if (!searchText){
            return;
        }
        const queryParams = new URLSearchParams({q: searchText});

        setLoading(true);
        fetch(import.meta.env.VITE_API_URL_POKEDEX + '/pokemon/search?' + queryParams.toString())
            .then(response => response.json())
            .then(data => setPokemonList(data))
            .catch(error => setError(error))
            .finally(() => setLoading(false));

    }, [searchText]);

    return {pokemonList, loading, error};
}

export { usePokemons, usePokemonsSearch };