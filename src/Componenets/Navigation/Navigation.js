import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';


export const Navigation = () => {

    const [searchValue, setSearchValue] = useState({ search: '' });
    const [showNavigation, setShowNavigation] = useState(false);

    const changeHandler = (event) => {

        setSearchValue((preSearchValue) => ({
            ...preSearchValue,
            [event.target.name]: event.target.value
        }));
    }

    const searchHandler = () => {
        
    }

    const hamburgerHandler = () => {

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

                        <div className={styles['hamburger_menu']}>
                            <i className="fa-solid fa-bars"></i>
                        </div>

                    </div>
                    
                    <div className={styles['navigation_and_social_icons']}>

                        <div className={styles['navigation_container']}>
                            <ul className={styles['navigation_element']}>
                                <li>
                                    <Link to='/' >
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/' >
                                        Destinations
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/' >
                                        Blog
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/' >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className={styles['social_icons']}>
                            <span>
                                <i className="fa-brands fa-facebook"></i>
                            </span>
                            <span>
                                <i className="fa-brands fa-instagram"></i>
                            </span>
                            <span>
                                <i className="fa-brands fa-twitter"></i>
                            </span>
                        </div>
                    </div>

                </div>
            </section>
        
        </>
    )
}