import styles from './Offerings.module.css';



export const Offerings = () => {


    return (

        <section className={styles['offerings']}>

            <div className={styles['offering']}>
                <div className={styles['img_container']}>
                    <i className="fa-solid fa-suitcase"></i>
                </div>
                <h3>Traveller Toures</h3>
                <p>Sample text. Click to select the text box.</p>
            </div>

            <div className={styles['offering']}>
                <div className={styles['img_container']}>
                    <i className="fa-solid fa-earth-americas"></i>
                </div>
                <h3>Explore The World</h3>
                <p>Sample text. Click to select the text box.</p>
            </div>

            <div className={styles['offering']}>
                <div className={styles['img_container']}>
                    <i className="fa-solid fa-tents"></i>
                </div>
                <h3>Adventure Vacantions</h3>
                <p>Sample text. Click to select the text box.</p>
            </div>

            <div className={styles['offering']}>
                <div className={styles['img_container']}>
                    <i className="fa-brands fa-fort-awesome"></i>
                </div>
                <h3>Luxurious Hotels</h3>
                <p>Sample text. Click to select the text box.</p>
            </div>

        </section>
    )
}