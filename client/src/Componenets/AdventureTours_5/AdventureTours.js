import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { animatePropForTitle, animatePropForArticle, animatePropForImageFrom } from './animateProps.js';

import styles from './AdventureTours.module.css';

export const AdventureTours = () => {

    const [ ref, inView ] = useInView();
    const [ isInView, setIsInView ] = useState('hidden');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY >= 3200 && scrollY <= 4600) {
                setIsInView('visible');
            } else {
                setIsInView('hidden');
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [inView]);

    return (

        <section className={styles['adventure_tours']}>

            <motion.div 
                ref={ref}
                initial='hidden'
                animate={isInView}
                variants={animatePropForTitle}
                className={styles['title']}
            >
                <h1>Enjoy the perfect blend of adventure tours</h1>
            </motion.div>

            <div className={styles['adventures_container']}>

                <motion.div 
                    ref={ref}
                    initial='hidden'
                    animate={isInView}
                    variants={animatePropForArticle}
                    className={styles['adventure']}
                >
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
                </motion.div>

                <motion.div 
                    ref={ref}
                    initial='hidden'
                    animate={isInView}
                    variants={animatePropForArticle}
                    className={styles['adventure']}
                >
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
                </motion.div>

                <motion.div 
                    ref={ref}
                    initial='hidden'
                    animate={isInView}
                    variants={animatePropForArticle}
                    className={styles['adventure']}
                >
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
                </motion.div>

            </div>

            <motion.p 
                ref={ref}
                initial='hidden'
                animate={isInView}
                variants={animatePropForImageFrom}
                className={styles['image_from']}
            >
                Images from <span>Wiop22</span>
            </motion.p>

        </section>

    )
}