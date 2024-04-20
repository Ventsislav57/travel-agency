import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import styles from './Offerings.module.css';



export const Offerings = () => {

    const [ref, inView] = useInView();
    const [isInView, setIsInView] = useState('hidden');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            
            if (inView & scrollY >= 50 && scrollY <= 800) {
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


    const animateProp = {
        visible: { scale: 1, transition: { duration: 1 } },
        hidden: { scale: 0 }
    }

    return (

        <section className={styles['offerings']}>

            <motion.div 
                ref={ref}
                initial="hidden"
                animate={isInView}
                variants={animateProp}
                
                className={styles['offering']}
            >
                <div className={styles['img_container']}>
                    <i className="fa-solid fa-suitcase"></i>
                </div>
                <h3>Traveller Toures</h3>
                <p>Sample text. Click to select the text box.</p>
            </motion.div>

            <motion.div 
                ref={ref}
                initial="hidden"
                animate={isInView}
                variants={animateProp}
                className={styles['offering']}
            >
                <div className={styles['img_container']}>
                    <i className="fa-solid fa-earth-americas"></i>
                </div>
                <h3>Explore The World</h3>
                <p>Sample text. Click to select the text box.</p>
            </motion.div>

            <motion.div 
                ref={ref}
                initial="hidden"
                animate={isInView}
                variants={animateProp}
                className={styles['offering']}
            >
                <div className={styles['img_container']}>
                    <i className="fa-solid fa-tents"></i>
                </div>
                <h3>Adventure Vacantions</h3>
                <p>Sample text. Click to select the text box.</p>
            </motion.div>

            <motion.div 
                ref={ref}
                initial="hidden"
                animate={isInView}
                variants={animateProp}
                className={styles['offering']}
            >
                <div className={styles['img_container']}>
                    <i className="fa-brands fa-fort-awesome"></i>
                </div>
                <h3>Luxurious Hotels</h3>
                <p>Sample text. Click to select the text box.</p>
            </motion.div>

        </section>
    )
}