interface Type {
    slot: number;
    type: {name: string};
}

interface Other {
    'official-artwork': {
        front_default: string;
    };
    showdown: {
        back_default: string;
        front_default: string;
    };
}

interface Stats {
    base_stat: number;
    effort: number;
    stat: { name: string };
}

interface Sprites {
    other: Other;
}

export interface PokemonDetails {
    id: number;
    name: string;
    sprites: Sprites;
    height: number;
    weight: number;
    types: Type[]
    stats: Stats[];
}