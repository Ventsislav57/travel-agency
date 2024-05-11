import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';  

import { animatePropForCommets } from './animateProps.js';

import styles from './CommentsSection.module.css';


export const CommentsSection = () => {

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
        <section className={styles['comments']}>

            <motion.div  
                ref={ref}
                initial='hidden'
                animate={isInView}
                variants={animatePropForCommets}   
                className={styles['commet']}
            >
                <span>,,</span>
                <p>
                    Proin sed libero enim sed faucibus turpis.
                    At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.
                    Ut sem nulla pharetra diam sit amet nisl. Enim nunc
                </p>
                <h2>CELIA ALMEDA</h2>
            </motion.div>

            <motion.div 
                ref={ref}
                initial='hidden'
                animate={isInView}
                variants={animatePropForCommets}  
                className={styles['commet']}
            >
                <span>,,</span>
                <p>
                    Proin sed libero enim sed faucibus turpis.
                    At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.
                    Ut sem nulla pharetra diam sit amet nisl. Enim nunc
                </p>
                <h2>MONICA POULI</h2>
            </motion.div>

            <motion.div 
                ref={ref}
                initial='hidden'
                animate={isInView}
                variants={animatePropForCommets}  
                className={styles['commet']}
            >
                <span>,,</span>
                <p>
                    Proin sed libero enim sed faucibus turpis.
                    At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.
                    Ut sem nulla pharetra diam sit amet nisl. Enim nunc
                </p>
                <h2>PETER HOWARD</h2>
            </motion.div>

            <motion.div 
                ref={ref}
                initial='hidden'
                animate={isInView}
                variants={animatePropForCommets}  
                className={styles['commet']}
            >
                <span>,,</span>
                <p>
                    Proin sed libero enim sed faucibus turpis.
                    At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.
                    Ut sem nulla pharetra diam sit amet nisl. Enim nunc
                </p>
                <h2>PHOEBE NELSON</h2>
            </motion.div>

            <motion.div 
                ref={ref}
                initial='hidden'
                animate={isInView}
                variants={animatePropForCommets}  
                className={styles['commet']}
            >
                <span>,,</span>
                <p>
                    Proin sed libero enim sed faucibus turpis.
                    At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.
                    Ut sem nulla pharetra diam sit amet nisl. Enim nunc
                </p>
                <h2>SASHA PAYNE</h2>
            </motion.div>

            <motion.div 
                ref={ref}
                initial='hidden'
                animate={isInView}
                variants={animatePropForCommets}  
                className={styles['commet']}
            >
                <span>,,</span>
                <p>
                    Proin sed libero enim sed faucibus turpis.
                    At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.
                    Ut sem nulla pharetra diam sit amet nisl. Enim nunc
                </p>
                <h2>ANN RICHMOND</h2>
            </motion.div>

        </section>
    )
}