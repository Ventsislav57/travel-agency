import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';  

import { animatePropForCommet } from './animateProps.js';

import styles from './ToursNature.module.css';




export const ToursNature = () => {


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
        <section className={styles['toure_nature']}>

            <motion.div 
                ref={ref}
                initial='hidden'
                animate={isInView}
                variants={animatePropForCommet}
                className={styles['description_container']}
            >

                <h1>Toures Nature & Wildlife</h1>

                <p>
                    Fly with who you want, stay wherever you want —
                    now that's a dream holiday!
                </p>

                <div className={styles['icon_container']}>
                    <span>
                        <i className="fa-brands fa-facebook"></i>
                    </span>

                    <span>
                        <i className="fa-brands fa-instagram"></i>
                    </span>

                    <span>
                        <i className="fa-brands fa-twitter"></i>
                    </span>

                    <span>
                        <i className="fa-brands fa-tiktok"></i>
                    </span>

                </div>
                
                    <p>
                        Images from <span>Wiop22</span>
                    </p>

            </motion.div>

        </section>
    )
}