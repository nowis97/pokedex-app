import type { Route } from "./+types/home";
import styles from "./home.module.scss"
import {usePokemons} from "~/hooks/usePokemons";
import Card from "~/components/card/Card";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pokedex App" },
    { name: "description", content: "Pokedex App" },
  ];
}

export default function Home() {
  const {pokemons, loading} = usePokemons(0, 20);

  return (
      !loading ? (
          <section className={styles.cGrid}>
            {pokemons.map((pokemon) => <Card pokemon={pokemon}/>)}
          </section>
          )
          :
          <h2>Cargando...</h2>

  );
}
