export interface PokemonListDTO {
  count: number
  results: Pokemon[];
}

export interface Pokemon {
  id: number;
  name: string;
  frontSprite: string;
}