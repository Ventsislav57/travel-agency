import { useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import styles from './SingIn.module.css';
import { login } from '../../../services/authService';
import { userContext } from '../../../context/UserContext';

export const SingIn = ({ showSingHandler, viewHandler }) => {

    const [ userData, setUserData ] = useState({ username: '', password: '' });
    const [ type, setType ] = useState('password');
    const [ error, setError] = useState(false);

    const { addUserData } = useContext(userContext);

    const MySwal = withReactContent(Swal);

    useEffect(() => {
        // window.scrollTo(0,0);
        document.body.style.overflow = "hidden";
        return () => (document.body.style.overflow = "auto");
    },[]);

    function changeHandler(event) {
        setError(false);

        setUserData(preUserData => ({
            ...preUserData,
            [event.target.name]: event.target.value
        }))
    }

    async function submitHandler (event) {
        event.preventDefault();

        if (userData['username'].length < 4 || userData['username'].length > 13 ) {
            setError(true);
            
        } else if (userData['password'].length < 7 || userData['password'] > 20 ) {
            setError(true);

        } else {
            try {
                const result = await login(userData);
                setUserData({ username: '', password: '' });

                addUserData(result);

                MySwal.fire({
                    title: 'Successful register',
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonText: 'Super!',
                })
        
                setTimeout(() => {
                    MySwal.close();
                    showSingHandler();
                }, 2000);

            } catch (error) {
                console.log(error);
                setError(true);
            }

        }
    }

    
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={styles['sing_in']}
        >
            <div className={styles['close']} onClick={showSingHandler}>
                <i className="fa-regular fa-circle-xmark"></i>
            </div>

            <div className={styles['title']}>
                <h1>Sing In</h1>
            </div>

            <div className={styles['error_container']}>
                {error && 
                    <p>Username or password in invalid</p>
                }
            </div>

            <form className={styles['sing_in_form']} onSubmit={ submitHandler }>

                <div className={styles['input_container']}>
                    <label htmlFor='username'>Username</label>
                    <input
                        id='username'
                        name='username'
                        type='text'
                        placeholder='Enter your username'
                        autoComplete='off'
                        required
                        onChange={changeHandler}
                    />
                </div>

                <div className={styles['input_container']}>
                    <label htmlFor='password'>Password</label>
                    <input
                        id='password'
                        name='password'
                        type={type}
                        placeholder='Enter your password'
                        autoComplete='off'
                        required
                        onChange={changeHandler}
                    />
                    <span onMouseEnter={() => setType('text')} onMouseLeave={() => setType('password')}>
                        <i className="fa-regular fa-eye"></i>
                    </span>
                </div>

                <div className={styles['button_container']}>
                    <button className={styles['btn']}>
                        Sing In
                    </button>
                </div>

            </form>
            
            <div className={styles['already_have_acount']}>
                <p>You don't have acount? <span onClick={() => viewHandler('sing-up')}>Sing Up</span></p>
            </div>

            <div className={styles['socials_login']}>
                <div className={styles['google']}>
                    <i className="fa-brands fa-google"></i>
                    Google
                </div>

                <div className={styles['facebook']}>
                    <i className="fa-brands fa-facebook"></i>
                    Facebook
                </div>
            </div>

        </motion.section>
    )
}