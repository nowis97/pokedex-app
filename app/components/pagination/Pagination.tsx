import styles from "./Pagination.module.scss";

interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (currentPage: number) => void;
}

export default function Pagination({onPageChange, totalPages, currentPage}: Props) {
    const handlePrevious = () => {
        if (currentPage > 1){
            onPageChange(currentPage - 1);
        }
    }

    const handleNext = () => {
        if (currentPage < totalPages){
            onPageChange(currentPage + 1);
        }
    }

    return (
        <section className={styles.cPagination}>
            <button className={styles.cButton} onClick={handlePrevious}> &#8592; Anterior</button>
            <p className={styles.text}>Pagina {currentPage} de {totalPages}</p>
            <button className={styles.cButton} onClick={handleNext}>Siguiente &#8594;</button>
        </section>
    )
}