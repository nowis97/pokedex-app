import type {Pokemon} from "~/types/pokemon.dto";
import type {JSX} from "react";
import styles from "./Card.module.scss"

interface Props {
    pokemon: Pokemon;
}

export default function Card ({pokemon}: Props): JSX.Element {
    return (
        <article className={styles.cCard}>
            <img loading="lazy" className={styles.image} alt="Image front sprite" src={pokemon.frontSprite} />
            <p className={styles.title}>{pokemon.name}</p>
        </article>
    )
}