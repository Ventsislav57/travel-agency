import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { animatePropForTitle, animatePropForArticle, animatePropForImage } from './animateProps.js';
import styles from './GroupSection.module.css';
import '../../global/variables.css';


export const GroupSection = () => {

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
        <section className={styles['group_section']}>

            <motion.div 
                ref={ref}
                initial='hidden'
                animate={isInView}
                variants={animatePropForTitle}
                className={styles['title_container']}
            >
                <h1>Small group travel that's good all over</h1>
            </motion.div>

            <div className={styles['comment_picture']}>

                <motion.div
                    ref={ref}
                    initial='hidden'
                    animate={isInView}
                    variants={animatePropForArticle}  
                    className={styles['comment']}
                >
                    <p>
                    Sit amet massa vitae tortor condimentum lacinia quis. Ornare arcu dui vivamus arcu felis bibendum ut.
                    Consectetur adipiscing elit duis tristique sollicitudin. Volutpat lacus laoreet non curabitur.
                    Magna fringilla urna porttitor rhoncus. Ultricies leo integer malesuada nunc vel risus commodo viverra.
                    Ipsum a arcu cursus vitae congue. Imperdiet dui accumsan sit amet nulla facilisi.
                    Tincidunt dui ut ornare lectus sit. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec.
                    Eget gravida cum sociis natoque. 
                    </p>

                    <button className={styles['btn']}>
                        <span>Read More</span>
                    </button>
                </motion.div>

                <div className={styles['img_container']}>
                    <motion.img 
                        ref={ref}
                        initial='hidden'
                        animate={isInView}
                        variants={animatePropForImage}  
                        src='./girls-modified.png' alt='pictures' 
                    ></motion.img>
                </div>

            </div>

        </section>
    )
}