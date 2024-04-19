
import styles from './AdventureStart.module.css';


export const AdventureStart = () => {



    return (
        <section className={styles['adventure_start']}>

            <div className={styles['img_circles']}>
                <div className={styles['img_container']}>
                    <img src='./coral_rift-modified.png' alt='pictures' />
                </div>
                <div className={styles['small_circle']}></div>
                <div className={styles['big_circle']}></div>
            </div>

            <div className={styles['article_container']}>
                <h1>Your adventure starts here</h1>
                <p>
                    Article evident arrived express highest men did boy.
                    Mistress sensible entirely am so. Quick can manor smart money hopes worth too.
                </p>
                <p>Image from <span>Wiop22</span></p>
                <button className={styles['btn']}>
                    <span>Read More</span>
                </button>
            </div>

        </section>
    )
}