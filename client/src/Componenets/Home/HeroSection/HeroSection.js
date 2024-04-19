
import styles from './HeroSection.module.css';

export const HeroSection = () => {


    function btnHandler(e) {
        e.preventDefault();
        
    }

    return (
        <div className={styles['hero_section']}>

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

        </div>
    )
}