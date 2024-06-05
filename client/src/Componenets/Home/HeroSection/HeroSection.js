import { motion } from 'framer-motion';

import styles from './HeroSection.module.css';

export const HeroSection = () => {


    function btnHandler(e) {
        e.preventDefault();
        
    }

    return (
        <div className={styles['hero_section']}>

            <div className={styles['titles_descriptions']}>
                <motion.h5
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    Travel Agency asd
                </motion.h5>

                <motion.h1
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    Wonderful tours
                </motion.h1>


                <motion.p
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    Duis aute irure dolor in reprehenderit in voluptate velit esse.
                </motion.p>
            </div>

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className={styles['btn_container']}
            >
                <button onClick={btnHandler}>
                    <span>Read More</span>
                </button>
            </motion.div>

        </div>
    )
}