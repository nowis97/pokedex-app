import type {Route} from "../+types/home";
import {usePokemon} from "~/hooks/use-pokemons";
import styles from "./PokemonDetailsPage.module.scss"

export default function PokemonDetailsPage({params}: Route.ComponentProps) {
    const {id_or_name} = params as { id_or_name: string };
    const {pokemon} = usePokemon(id_or_name);


    return (
        <main className={styles.containerPage}>
            <h1 className={styles.textCenteredCapitalized}>{pokemon?.name}</h1>
            <section className={styles.cPokemonDetailsPage}>
                <article className={styles.cSprites}>
                    <h3 className={styles.textCenteredCapitalized}>Imagenes</h3>
                    <img className={styles.mainImage} alt="Sprite official artwork"
                         src={pokemon?.sprites.other["official-artwork"].front_default}/>
                    <section className={styles.cSpritesBackFront}>
                        <section className={styles.cSprite}>
                            <img alt="Front sprite" className={styles.imageSprite} src={pokemon?.sprites.other.showdown.front_default}/>
                            <p>Frente</p>
                        </section>
                        <section className={styles.cSprite}>
                            <img alt="Back sprite" className={styles.imageSprite} src={pokemon?.sprites.other.showdown.back_default}/>
                            <p>Atrás</p>
                        </section>
                    </section>
                </article>
                <article className={styles.cAttributes}>
                    <h3 className={styles.textCenteredCapitalized}>Atributos</h3>
                    <ul>
                        <li>
                            <span>Tipo(s): </span>
                            {pokemon?.types.map(_type => <span className={styles.badgeType}>{_type.type.name} </span>)}
                        </li>
                        <li>Altura: {pokemon?.height} m</li>
                        <li>Peso: {pokemon?.weight} Kg</li>
                    </ul>
                </article>
                <article className={styles.cBaseStats}>
                    <h3 className={styles.textCenteredCapitalized}>Estadisticas base</h3>
                    <ul>
                        {pokemon?.stats.map(_stat =>
                            <li>
                                <span style={{textTransform: 'capitalize'}}>{_stat.stat.name.split('-').join(' ')}</span>:
                                <span style={{float: 'right', marginRight: '1rem'}}>{_stat.base_stat}</span>
                            </li>)}
                    </ul>
                </article>
            </section>
        </main>
    )
}