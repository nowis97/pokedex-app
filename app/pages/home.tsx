import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pokedex App" },
    { name: "description", content: "Pokedex App" },
  ];
}

export default function Home() {
  return <h1>hola</h1>;
}
