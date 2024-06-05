import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { animatePropsForSmallerPictures, animatePropsForMediumPictures, animatePropsForBiggerPictures, animatePropsForSmallerCircle, animatePropsForBiggerCircle } from './animateProps.js';
import styles from './PicturesSection.module.css';


export const PicturesSection = () => {

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

        <section className={styles['pictures_section']}>

            <div className={styles['smaller_pictures']}>
                <motion.img 
                    ref={ref}
                    initial='hidden'
                    animate={isInView}
                    variants={animatePropsForSmallerPictures}
                    src='./mountain_vilage-modified.webp' alt="pictures" 
                ></motion.img>
            </div>

            <div className={styles['medium_pictures']}>
                <motion.img 
                    ref={ref}
                    initial='hidden'
                    animate={isInView}
                    variants={animatePropsForMediumPictures}
                    src='./sea_beach-modified.webp' alt="pictures" 
                ></motion.img>
            </div>

            <div className={styles['bigger_pictures']}>
                <motion.img 
                    ref={ref}
                    initial='hidden'
                    animate={isInView}
                    variants={animatePropsForBiggerPictures}
                    src='./forest-modified.png' alt='pictures' 
                ></motion.img>
            </div>

            <motion.div 
                ref={ref}
                initial='hidden'
                animate={isInView}
                variants={animatePropsForSmallerCircle}
                className={styles['smaller_circle']}
            ></motion.div>

            <motion.div 
                ref={ref}
                initial='hidden'
                animate={isInView}
                variants={animatePropsForBiggerCircle}
                className={styles['bigger_circle']}
            ></motion.div>

        </section>

    )
}