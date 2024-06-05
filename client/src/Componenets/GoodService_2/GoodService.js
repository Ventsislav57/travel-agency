import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { animatePropsForText, animatePropsForBigCircle, animatePropsForImg, animatePropsForSmallCircle } from './animateProps.js';
import styles from './GoodService.module.css';
import '../../global/variables.css';

export const GoodService = () => {

    const [ ref, inView ] = useInView();
    const [ isInView, setIsInView ] = useState('hidden');

    useEffect(() => {

        if (inView) {
            setIsInView('visible');
        } else {
            setIsInView('hidden');
        }

    }, [inView]);
 

    return (
        <section className={styles['good_service']}>
            
            <motion.div 
                ref={ref}
                initial="hidden"
                animate={isInView}
                variants={animatePropsForText}
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

                <motion.div 
                    ref={ref}
                    initial="hidden"
                    animate={isInView}
                    variants={animatePropsForBigCircle}                   
                    className={styles['big_circle']}
                ></motion.div>

                <div className={styles['img']}>
                    <motion.img 
                        src='./good_service-modified.webp' alt='pictures' 
                        ref={ref}
                        initial="hidden"
                        animate={isInView}
                        variants={animatePropsForImg}  
                    >
                    </motion.img>
                </div>

                <motion.div 
                    ref={ref}
                    initial="hidden"
                    animate={isInView}
                    variants={animatePropsForSmallCircle}                   
                    className={styles['small_circle']}
                ></motion.div>
            </div>

        </section>
    )
}