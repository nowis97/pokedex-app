import type { Route } from "./+types/home";
import styles from "./home.module.scss"
import {usePokemons} from "~/hooks/usePokemons";
import Card from "~/components/card/Card";
import Pagination from "~/components/pagination/Pagination";
import {useState} from "react";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pokedex App" },
    { name: "description", content: "Pokedex App" },
  ];
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const {pokemons, loading} = usePokemons(currentPage * 20, 20);


  const handlePageChange = (page: number) => {
      if (pokemons.length > 0) {
          setCurrentPage(page);
      }
  }


  return (
      !loading ? (
              <main>
                  <section className={styles.cGrid}>
                      {pokemons.map((pokemon) => <Card pokemon={pokemon}/>)}
                  </section>
                  <Pagination currentPage={currentPage} totalPages={currentPage + 1} onPageChange={handlePageChange}/>
              </main>
          )
          :
          <h2>Cargando...</h2>

  );
}
