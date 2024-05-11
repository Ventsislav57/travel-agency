
import { useRef, useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


import styles from './SingUp.module.css';
import { register } from '../../../services/authService';
import { userContext } from '../../../context/UserContext';

export const SingUp = ({ showSingHandler, viewHandler }) => {

    const [ userData, setUserData ] = useState({ username: '', email: '', password: '', rePassword: '' });
    const [ typePassword, setTypePassword ] = useState('password');
    const [ typeRePassword, setTypeRePassword ] = useState('password');
    const [ showRules, setShowRules ] = useState(false);
    const [ error, setError] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState('');
    const [ errorField, setErrorField ] = useState('');
    const inputRefs = useRef({
        username: null,
        email: null,
        password: null,
        rePassword: null
    });

    const { addUserData } = useContext(userContext);

    const MySwal = withReactContent(Swal);


    useEffect(() => {
        // window.scrollTo(0,0);
        document.body.style.overflow = "hidden";
        return () => (document.body.style.overflow = "auto");
    },[]);

    function changeHandler(event) {
        setError(false);
        setErrorField('');
        setErrorMessage('');

        setUserData(preUserData => ({
            ...preUserData,
            [event.target.name]: event.target.value
        }))
    }


    async function submitHandler (event) {
        event.preventDefault();

        const validEmail = new RegExp(/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/);
        const validPassword = new RegExp(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{7,})\S$/);

        if (userData['username'].length < 4 || userData['username'].length > 13 ) {
            setError(true);
            setErrorField('username');
            inputRefs.current['username'].focus();


            if (userData['username'].length < 4 ) {
                setErrorMessage('Username must have at least 4 characters.');
            } else {
                setErrorMessage('Username must\'t have above 13 characters.');
            }
            
        } else if (!validEmail.test(userData['email'])){
            setError(true);
            setErrorField('email');
            setErrorMessage('Please enter a valid email address.');
            inputRefs.current['email'].focus();

        } else if (!validPassword.test(userData['password'])) {
            setError(true);
            setErrorField('password');
            setErrorMessage('Please enter a valid password.');
            inputRefs.current['password'].focus();

        } else if (userData['password'] !== userData['rePassword']) {
            setError(true);
            setErrorField('password');
            setErrorMessage('Password don\'t match.');
            inputRefs.current['rePassword'].focus();

        } else {
            setError(false);
            setErrorField('');
            setErrorMessage('');

            try {
                const result = await register(userData);

                addUserData(result);
                setUserData({username: '', email: '', password: '', rePassword: ''});

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

                const errorMessageFromRequest = error.message.split(': ');

                setError(true);
                setErrorField(errorMessageFromRequest[1]);
                setErrorMessage(errorMessageFromRequest[2]);
            }

        }
    }

    
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={styles['sing_in']}
            // onMouseLeave={showSingHandler}
        >

            <div className={styles['close']} onClick={showSingHandler}>
                <i className="fa-regular fa-circle-xmark"></i>
            </div>

            <div className={styles['title']}>
                <h1>Sing Up</h1>
            </div>


            <div className={styles['error_container']}>
                {error && <p>{ errorMessage }</p>}
            </div>

            <form className={styles['sing_in_form']} onSubmit={ submitHandler }>

                <div className={styles['input_container']}>
                    <label htmlFor='username'>Username</label>
                    <input
                        ref={ref => inputRefs.current['username'] = ref}
                        className={errorField === 'username' ? styles['error_input'] : ''}
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
                    <label htmlFor='email'>Email addres</label>
                    <input
                        ref={ref => inputRefs.current['email'] = ref}
                        className={errorField === 'email' ? styles['error_input'] : ''}
                        id='email'
                        name='email'
                        type='text'
                        placeholder='Enter your email address'
                        autoComplete='off'
                        required
                        onChange={changeHandler}
                    />
                </div>

                <div className={styles['input_container']}>
                    <label htmlFor='password'>Password</label>
                    <input
                        ref={ref => inputRefs.current['password'] = ref}
                        className={errorField === 'password' ? styles['error_input'] : ''}
                        id='password'
                        name='password'
                        type={typePassword}
                        placeholder='Enter your password'
                        autoComplete='off'
                        required
                        onChange={changeHandler}
                    />
                    <span className={styles['view_passwold']} onMouseEnter={() => setTypePassword('text')} onMouseLeave={() => setTypePassword('password')}>
                        <i className="fa-regular fa-eye"></i>
                    </span>
                    <span className={styles['password_rules']} onMouseEnter={() => setShowRules(true)} onMouseLeave={() => setShowRules(false)}>
                        <i className="fa-solid fa-info"></i>
                    </span>

                    {showRules &&
                        <div className={styles['password_rules_container']}>
                            <p>Password must have:</p>
                            <ul>
                                <li>At least 8 characters</li>
                                <li>1 Uppercase letter</li>
                                <li>1 Number</li>
                                <li>1 Symbol</li>
                            </ul>
                        </div>
                    }
                </div>

                <div className={styles['input_container']}>
                    <label htmlFor='rePassword'>Repeat Password</label>
                    <input
                        ref={ref => inputRefs.current['rePassword'] = ref}
                        className={errorField === 'password' ? styles['error_input'] : ''}
                        id='rePassword'
                        name='rePassword'
                        type={typeRePassword}
                        placeholder='Enter your password'
                        autoComplete='off'
                        required
                        onChange={changeHandler}
                    />
                    <span className={styles['view_re_passwold']} onMouseEnter={() => setTypeRePassword('text')} onMouseLeave={() => setTypeRePassword('password')}>
                        <i className="fa-regular fa-eye"></i>
                    </span>
                </div>

                <div className={styles['button_container']}>
                    <button className={styles['btn']}>
                        Sing Up
                    </button>
                </div>

            </form>
            
            <div className={styles['already_have_acount']}>
                <p>You don't have acount? <span onClick={() => viewHandler('sing-in') }>Sing Up</span></p>
            </div>

        </motion.section>
    )
}