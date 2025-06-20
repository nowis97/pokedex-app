import type {Pokemon} from "~/types/pokemon.dto";
import type {JSX} from "react";
import styles from "./Card.module.scss"
import {Link} from "react-router";

interface Props {
    pokemon: Pokemon;
}

export default function Card ({pokemon}: Props): JSX.Element {
    return (
        <Link to={"/pokemon/" + pokemon.id}>
            <article className={styles.cCard}>
                <img loading="lazy" className={styles.image} alt="Image front sprite" src={pokemon.frontSprite} />
                <p className={styles.title}>{pokemon.name}</p>
            </article>
        </Link>
    )
}