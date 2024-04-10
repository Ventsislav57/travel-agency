
import styles from './Navigation.module.css';


export const Navigation = () => {


    return (
        <>
            <section className={styles['header']}>
                <div className={styles['logo_container']}>
                    <h3>Travel agency</h3>
                </div>

                <div className={styles['search_navigation']}>
                    <div className={styles['search_container']}>
                        
                    </div>
                </div>
            </section>
        
        </>
    )
}