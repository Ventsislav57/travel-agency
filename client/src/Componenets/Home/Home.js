

import styles from './Home.module.css';


export const Home = () => {


    function btnHandler (e) {
        e.preventDefault();

        
    }

    return (
        <>
            <section className={styles['home_section']}>

                <div className={styles['titles_descriptions']}>
                    <h5>Travel Agency</h5>
                    <h1>Wonderful tours</h1>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                </div>

                <div className={styles['btn_container']}>
                    <button onClick={btnHandler}>
                        <span>Read More</span>
                    </button>
                </div>

            </section>
        
        </>
    )
}