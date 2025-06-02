import type {PokemonDTO} from "~/types/pokemon.dto";
import type {JSX} from "react";

interface Props {
    pokemon: PokemonDTO;
}

export default function Card ({pokemon}: Props): JSX.Element {
    return (
        <section>
            <article>
                <img alt="Image front sprite" src={pokemon.frontSprite} />
                <p>{pokemon.frontSprite}</p>
            </article>
        </section>
    )
}