import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import styles from './Navigation.module.css';


export const Navigation = () => {

    const [searchValue, setSearchValue] = useState({ search: '' });
    const [showNavigation, setShowNavigation] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);


    useEffect(() => {
        if (window.innerWidth > 1000) {
            setShowNavigation(true);
            setIsSmallScreen(false);
        } else {
            setIsSmallScreen(true);
        }

    }, [showNavigation])

    const changeHandler = (event) => {

        setSearchValue((preSearchValue) => ({
            ...preSearchValue,
            [event.target.name]: event.target.value
        }));
    }

    const searchHandler = () => {
        
    }

    const hamburgerHandler = () => {
        setShowNavigation((prevShowNavigation) => !prevShowNavigation);
        console.log(showNavigation);
    }

    return (
        <>
            <section className={styles['header']}>

                <div className={styles['attribute_container']}>
                
                    <div className={styles['logo_and_search']}>
                        <div className={styles['logo_container']}>
                            <h3>Travel agency</h3>
                        </div>

                        <div className={styles['search_container']}>
                            <label>
                                <input 
                                    type='text' 
                                    name='search' 
                                    placeholder='search..' 
                                    value={searchValue.search} 
                                    onChange={changeHandler}
                                />

                                <span onClick={searchHandler}>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </span>
                            </label>
                        </div>

                        <div className={styles['hamburger_menu']} onClick={hamburgerHandler}>
                            <i className="fa-solid fa-bars"></i>
                        </div>

                    </div>

                    {showNavigation &&
                        <div className={styles['navigation_and_social_icons']}>

                            <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 1 }}
                                className={styles['hor_line']}
                            ></motion.div>

                            <div className={styles['navigation_container']}>
                                <ul className={styles['navigation_element']}>
                                    <motion.li
                                        initial={isSmallScreen ? { x: '600px'} : { y: '-200px' }}
                                        animate={isSmallScreen ? { x: '0px' } : { y: '0px' }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Link to='/' >
                                            Home
                                        </Link>
                                    </motion.li>

                                    <motion.li
                                        initial={isSmallScreen ? { x: '-600px' } : { y: '-200px' }}
                                        animate={isSmallScreen ? { x: '0' } : { y: '0px' }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                    >
                                        <Link to='/' >
                                            Destinations
                                        </Link>
                                    </motion.li>

                                    <motion.li
                                        initial={isSmallScreen ? { x: '600px'} : { y: '-200px' }}
                                        animate={isSmallScreen ? { x: '0px' } : { y: '0px' }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        <Link to='/' >
                                            Blog
                                        </Link>
                                    </motion.li>

                                    <motion.li
                                        initial={isSmallScreen ? { x: '-600px' } : { y: '-200px' }}
                                        animate={isSmallScreen ? { x: '0' } : { y: '0px' }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                    >
                                        <Link to='/' >
                                            Contact
                                        </Link>
                                    </motion.li>
                                </ul>
                            </div>

                            <div className={styles['social_icons']}>
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1}}
                                    transition={{ deration: 0.5, delay: 0.6 }}
                                >
                                    <i className="fa-brands fa-facebook"></i>
                                </motion.span>
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1}}
                                    transition={{ deration: 0.5, delay: 0.7 }}
                                >
                                    <i className="fa-brands fa-instagram"></i>
                                </motion.span>
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1}}
                                    transition={{ deration: 0.5, delay: 0.8 }}
                                >
                                    <i className="fa-brands fa-twitter"></i>
                                </motion.span>
                            </div>
                        </div>
                    }
                </div>
            </section>
        
        </>
    )
}