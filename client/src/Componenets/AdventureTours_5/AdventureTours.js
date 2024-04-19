
import styles from './AdventureTours.module.css';


export const AdventureTours = () => {



    return (

        <section className={styles['adventure_tours']}>

            <div className={styles['title']}>
                <h1>Enjoy the perfect blend of adventure tours</h1>
            </div>

            <div className={styles['adventures_container']}>

                <div className={styles['adventure']}>
                    <div className={styles['img_container']}>
                        <img src='./forest-road-modified.png' alt='pictures' />
                    </div>

                    <h2>ROAD TRAVEL</h2>

                    <p className={styles['description']}>
                        Sample text. Click to select the text box.
                        Click again or double click to start editing the text.
                    </p>

                    <p className={styles['link']}>
                        More
                        <i className="fa-solid fa-arrow-right"></i>
                    </p>
                </div>

                <div className={styles['adventure']}>
                    <div className={styles['img_container']}>
                        <img src='./waterfall-modified.png' alt='pictures' />
                    </div>

                    <h2>Waterfalls</h2>

                    <p className={styles['description']}>
                        Sample text. Click to select the text box.
                        Click again or double click to start editing the text.
                    </p>

                    <p className={styles['link']}>
                        More
                        <i className="fa-solid fa-arrow-right"></i>
                    </p>
                </div>

                <div className={styles['adventure']}>
                    <div className={styles['img_container']}>
                        <img src='./mountain-modified.png' alt='pictures' />
                    </div>

                    <h2>MOUNTAINS</h2>

                    <p className={styles['description']}>
                        Sample text. Click to select the text box.
                        Click again or double click to start editing the text.
                    </p>

                    <p className={styles['link']}>
                        More
                        <i className="fa-solid fa-arrow-right"></i>
                    </p>
                </div>

            </div>

            <p className={styles['image_from']}>
                Images from <span>Wiop22</span>
            </p>

        </section>

    )
}