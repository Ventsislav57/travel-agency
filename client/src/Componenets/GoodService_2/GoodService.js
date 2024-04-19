import { motion } from 'framer-motion';

import styles from './GoodService.module.css';

export const GoodService = () => {



    return (
        <section className={styles['good_service']}>
            
            <motion.div 
                initial={{ x: '-500px' }}
                animate={{ x: '0' }}
                transition={{ duration: 1 }}
                className={styles['title_subtitle_btn']}
            >
                <h1>Good Trips Only</h1>
                <p>
                    Sample text. Click to select the text box.
                    Click again or double click to start editing the text. 
                </p>
                <button className={styles['btn']}>
                    <span>
                        Learn More
                    </span>
                </button>
            </motion.div>

            <div className={styles['img_container']}>

                <div className={styles['big_circle']}></div>
                <div className={styles['img']}>
                    <img src='./good_service-modified.png' alt='pictures' />
                </div>
                <div className={styles['small_circle']}></div>
                
            </div>

        </section>
    )
}