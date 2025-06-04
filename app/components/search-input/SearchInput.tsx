import type {ChangeEvent, JSX} from "react";
import styles from './SearchInput.module.scss';

interface Props {
    value: string;
    onChange: (value: string) => void;
}

export default function SearchInput({value, onChange}: Props): JSX.Element {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }

    return (
        <search className={styles.cContainerSearch}>
            &#128270;
            <input className={styles.searchInput} placeholder="Buscar Pokémon..." onChange={handleChange} value={value} />
        </search>

    );
}