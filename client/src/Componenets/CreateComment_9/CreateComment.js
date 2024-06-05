import { useContext, useEffect, useState } from 'react';

import { userContext } from '../../context/UserContext';

import styles from './CreateComment.module.css';
import { createComment } from '../../services/commentService';


export const CreateComment = () => {

    const [commentData, setCommentData] = useState({
        username: '',
        email: '',
        comment: ''
    });
    
    const [error, setError] = useState(false);
    const [errorFields, setErrorFields] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const { user } = useContext(userContext);

    
    useEffect(() => {
        if (user?.user) {
            setCommentData(prev =>  ({
                ...prev,
                username: user.user.username,
                email: user.user.email
            }))
        }
    },[user?.user])

    async function submitCommet(e) {
        e.preventDefault();

        const validEmail = new RegExp(/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/);

        if (commentData.username.length < 4 || commentData.username.length > 13) {
            setError(true);
            setErrorFields('username');
            if (commentData.username.length < 5) {
                setErrorMessage('Username must have at least 4 characters.');
            } else {
                setErrorMessage('Username must\'t have above 13 characters.');
            }

        } else if (!validEmail.test(commentData['email'])) {
            setError(true);
            setErrorFields('email');
            setErrorMessage('Please enter a valid email address.');

        } else if (commentData['comment'].length === 0) {
            setError(true);
            setErrorFields('comment');
            setErrorMessage('Please enter a comment.');

        } else {
            setError(false);
            setErrorMessage('');
            setErrorFields('');

            try {

                const ratingAndOwner = {
                    ratings: [0],
                    owner: user.user._id
                }
                
                const result = await createComment({ ...commentData, ...ratingAndOwner });

                if (user.user.email) {
                    setCommentData(() => ({
                        username: '',
                        email: '',
                        comment: ''
                    }));
                } else {
                    setCommentData(() => ({
                        comment: ''
                    }));
                }

            } catch (error) {
                setError(true);
                setErrorMessage('We have problem.');
            }

        }
    }


    function changeHandler(e) {

        setError(false);
        setErrorMessage('');
        setErrorFields('');

        if ([e.target.name][0] === 'comment' && e.target.value?.length > 100) {
            
            return

        } else {

            setCommentData(oldCommentData => ({
                ...oldCommentData,
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

                        <div className={styles['username']}>
                            <label htmlFor='username'></label>
                            <input 
                                className={error && errorFields === 'names' ? styles['error_input'] : ''}
                                id='username'
                                name='username'
                                type='text'
                                placeholder='Enter your username'
                                value={commentData.username}
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
                                value={commentData.email}
                                onChange={changeHandler}
                                autoComplete='off'
                            />
                        </div>
                    </div>

                    <div className={styles['comment']}>
                        <label htmlFor='comment'>{commentData['comment']?.length} / 100</label>
                        <textarea
                            className={error && errorFields === 'comment' ? styles['error_input'] : ''}
                            id='comment'
                            name='comment'
                            type='text'
                            placeholder='Enter your comment'
                            value={commentData.comment}
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