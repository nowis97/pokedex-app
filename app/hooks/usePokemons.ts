import {useEffect, useState} from "react";
import type {PokemonDTO} from "~/types/pokemon.dto";

const usePokemons = (offset: number, limit: number) => {
    const [pokemons, setPokemons] = useState<PokemonDTO[]>([]);
    const [loading, setLoading] = useState<boolean>();
    const [error, setError] = useState<Error>();

    useEffect(() => {
        const queryParams = new URLSearchParams({offset: String(offset), limit: String(limit)});
        setLoading(true);

        fetch(import.meta.env.VITE_API_URL_POKEDEX + '/pokemon?' + queryParams.toString())
            .then(response => response.json())
            .then(data => setPokemons(data))
            .catch(error => setError(error))
            .finally(() => setLoading(false));

    }, [offset, limit]);

    return {pokemons, loading, error};
}

export { usePokemons };