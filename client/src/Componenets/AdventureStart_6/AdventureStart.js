import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';  

import { animatePropForBigCircle, animatePropForImage } from './animateProps.js';
import styles from './AdventureStart.module.css';


export const AdventureStart = () => {

    const [ ref, inView ] = useInView();
    const [isInView, setIsInView] = useState('hidden');


    useEffect(() => {

        if (inView) {
            setIsInView('visible');
        } else {
            setIsInView('hidden');
        }

    }, [inView])

    return (
        <section className={styles['adventure_start']}>

            <div className={styles['img_circles']}>
                <div className={styles['img_container']}>
                    <motion.img 
                        ref={ref}
                        initial='hidden'
                        animate={isInView}
                        variants={animatePropForImage}
                        src='./coral_rift-modified.png' alt='pictures'
                    ></motion.img>
                </div>

                <div className={styles['small_circle']}></div>

                <motion.div 
                    initial='hidden'
                    animate={isInView}
                    variants={animatePropForBigCircle}
                    className={styles['big_circle']}
                ></motion.div>
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