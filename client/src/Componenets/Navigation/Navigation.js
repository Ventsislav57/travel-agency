import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import styles from './Navigation.module.css';



export const Navigation = ({ singInHandler }) => {

    const [searchValue, setSearchValue] = useState({ search: '' });
    const [showNavigation, setShowNavigation] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);


    useEffect(() => {
        if (window.outerWidth  > 1000) {
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

    const buttonHandler = (navigate) => {

        if (navigate === 'home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else if (navigate === 'destinations') {
            window.scrollTo({
                top: 3800,
                behavior: 'smooth'
            });
        } else if (navigate === 'blog') {
            window.scrollTo({
                top: 5780,
                behavior: 'smooth'
            });
        } else if (navigate === 'sing-in') {
            singInHandler();
        }
    }

    const hamburgerHandler = () => {
        setShowNavigation((prevShowNavigation) => !prevShowNavigation);
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
                                        <button  onClick={() => buttonHandler('home')} >
                                            Home
                                        </button>
                                    </motion.li>

                                    <motion.li
                                        initial={isSmallScreen ? { x: '-600px' } : { y: '-200px' }}
                                        animate={isSmallScreen ? { x: '0' } : { y: '0px' }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                    >
                                        <button onClick={() => buttonHandler('destinations')} >
                                            Destinations
                                        </button>
                                    </motion.li>

                                    <motion.li
                                        initial={isSmallScreen ? { x: '600px'} : { y: '-200px' }}
                                        animate={isSmallScreen ? { x: '0px' } : { y: '0px' }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        <button onClick={() => buttonHandler('blog')} >
                                            Blog
                                        </button>
                                    </motion.li>

                                    <motion.li
                                        initial={isSmallScreen ? { x: '-600px' } : { y: '-200px' }}
                                        animate={isSmallScreen ? { x: '0' } : { y: '0px' }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                    >
                                        <button onClick={() => buttonHandler('sing-in')} >
                                            Sing In
                                        </button>
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