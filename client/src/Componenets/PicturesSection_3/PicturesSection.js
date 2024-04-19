
import styles from './PicturesSection.module.css';


export const PicturesSection = () => {



    return (

        <section className={styles['pictures_section']}>

            <div className={styles['smaller_pictures']}>
                <img src='./mountain_vilage-modified.png' alt="pictures" />
            </div>

            <div className={styles['medium_pictures']}>
                <img src='./sea_beach-modified.png' alt="pictures" />
            </div>

            <div className={styles['bigger_pictures']}>
                <img src='./forest-modified.png' alt='pictures' />
            </div>

            <div className={styles['smaller_circle']}></div>

            <div className={styles['bigger_circle']}></div>

        </section>

    )
}