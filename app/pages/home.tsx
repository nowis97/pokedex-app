import type {Route} from "./+types/home";
import styles from "./home.module.scss"
import {usePokemons, usePokemonsSearch} from "~/hooks/use-pokemons";
import Card from "~/components/card/Card";
import Pagination from "~/components/pagination/Pagination";
import {useEffect, useMemo, useState} from "react";
import SearchInput from "~/components/search-input/SearchInput";
import {useDebounce} from "~/hooks/use-debounce";
import type {Pokemon} from "~/types/pokemon.dto";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Pokedex App"},
        {name: "description", content: "Pokedex App"},
    ];
}

export default function Home() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchText, setSearchText] = useState("");
    const {pokemonsResponse, loading} = usePokemons((currentPage - 1) * 20, 20);

    const debouncedSearchText = useDebounce<string>(searchText, 700);
    const [pokemonsSearched, setPokemonsSearched] = useState<Pokemon[]>([])

    const handlePageChange = (page: number) => {
        if (pokemonsResponse?.results?.length ?? 0 > 0) {
            setCurrentPage(page);
        }
    }

    const {pokemonList, loading : loadingListSearched} = usePokemonsSearch(debouncedSearchText)


    const handleSearch = (text: string) => {
        setSearchText(text);
    }

    useEffect(() => {
        if (debouncedSearchText) {
            setPokemonsSearched(pokemonList);
        } else {
            setPokemonsSearched([]);
        }
    }, [debouncedSearchText, pokemonList]);

    const totalPages = useMemo(() => Math.ceil((pokemonsResponse?.count ?? 0) / 20), [pokemonsResponse?.count]);


    return (
        !loading && !loadingListSearched ? (
                <main className={styles.cMain}>
                    <SearchInput value={searchText} onChange={handleSearch}/>
                    <section className={styles.cGrid}>
                        {
                             pokemonsSearched.length > 0 ? pokemonsSearched.map((pokemon: Pokemon) => <Card key={pokemon.id} pokemon={pokemon}/>) :
                             pokemonsResponse?.results.map((pokemon: Pokemon) => <Card key={pokemon.id} pokemon={pokemon}/>)
                        }
                    </section>
                    { pokemonsSearched.length === 0 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/> }
                </main>
            )
            :
            <h3>Cargando...</h3>

    );
}
