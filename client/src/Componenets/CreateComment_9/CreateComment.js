import { useState } from 'react';

import styles from './CreateComment.module.css';


export const CreateComment = () => {

    const [userData, setUserData] = useState({
        nameLastname: '',
        email: '',
        comment: ''
    });
    
    const [error, setError] = useState(false);
    const [errorFields, setErrorFields] = useState('');
    const [errorMessage, setErrorMessage] = useState('');



    function submitCommet(e) {
        e.preventDefault();

        const validNames = new RegExp(/^\w{3,10}\s+\w{3,10}$/);
        const validEmail = new RegExp(/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/);

        if (!validNames.test(userData['nameLastname'])) {
            setError(true);
            setErrorFields('names');
            setErrorMessage('Please enter a valid name and last name.');

        } else if (!validEmail.test(userData['email'])) {
            setError(true);
            setErrorFields('email');
            setErrorMessage('Please enter a valid email address.');

        } else if (userData['comment']?.length === 0) {
            setError(true);
            setErrorFields('comment');
            setErrorMessage('Please enter a comment.');

        } else {
            setError(false);
            setErrorMessage('');
            setErrorFields('');


        }
    }


    function changeHandler(e) {

        setError(false);
        setErrorMessage('');
        setErrorFields('');

        if ([e.target.name][0] === 'comment' && e.target.value?.length > 100) {
            
            return

        } else {

            setUserData(oldUserData => ({
                ...oldUserData,
                [e.target.name]: e.target.value
            }))
        }
    }

    function handleKeyDown(e) {
        const { value } = e.target;

        const isTextareaFull = value.length >= 100;

        if (isTextareaFull && e.key !== 'Backspace' && e.key !== 'Delete') {
            e.preventDefault();
        }
    }

    return (
        <section className={styles['create_comment']}>

            <div className={styles['title_form']}>

                <div className={styles['title']}>
                    <h1>Create comment</h1>

                    <div className={styles['error_message_container']}>
                        {error && 
                            <p className={styles['error_message']}>
                                { errorMessage }
                            </p>
                        }
                    </div>
                </div>

                <form id='create_comment' className={styles['comment_form']} onSubmit={submitCommet}>

                    <div className={styles['name_email']}>

                        <div className={styles['name_lastname']}>
                            <label htmlFor='name_lastname'></label>
                            <input 
                                className={error && errorFields === 'names' ? styles['error_input'] : ''}
                                id='name_lastname'
                                name='nameLastname'
                                type='text'
                                placeholder='Enter name and las tname'
                                onChange={changeHandler}
                                autoComplete='off'
                            />
                            </div>

                        <div className={styles['email']}>
                            <label htmlFor='email'></label>
                            <input 
                                className={error && errorFields === 'email' ? styles['error_input'] : ''}
                                id='email'
                                name='email'
                                type='text'
                                placeholder='Enter a valid email address'
                                onChange={changeHandler}
                                autoComplete='off'
                            />
                        </div>
                    </div>

                    <div className={styles['comment']}>
                        <label htmlFor='comment'>{userData['comment']?.length} / 100</label>
                        <textarea
                            className={error && errorFields === 'comment' ? styles['error_input'] : ''}
                            id='comment'
                            name='comment'
                            type='text'
                            placeholder='Enter your comment'
                            onChange={changeHandler}
                            onKeyDown={handleKeyDown}
                        />
                    </div>

                    <div className={styles['submit_btn']}>

                        <button className={styles['btn']}>
                            <span>Submit</span>
                        </button>

                    </div>
                </form>
            </div>

            <div className={styles['footer']}>
                <p>Web Design created by <span>Ventsislav Ivanov</span></p>
            </div>

        </section>
    )
}