import { useContext, useEffect, useState } from 'react';

import styles from './Profile.module.css';
import { userContext } from '../../context/UserContext';
import { deleteProfile, editUserData, getUserData } from '../../services/authService';


export const Profile = ({ profileHandler }) => {

    const [ aboutOrComments, setAboutOrComments ] = useState(true);
    const [ editProfile, setEditProfile ] = useState(false);
    const [ userData, setUserData ] = useState({
        name: '',
        username: '',
        phone: '',
        email: '',
        profession: '',
        comments: []
    });
    const [ errorField, setErrorField ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');
    const [ userRating, setUserRating ] = useState(0);

    const { user, removeUserData } = useContext(userContext);

    
    useEffect(() => {
        
        if (user?.user) {

            getUserData(user.user._id)
                .then(result => {
                    console.log(result);
                    Object.entries(result.user).filter(data => {
                    setUserData((prev) => ({
                        ...prev,
                        [data[0]]: data[1]
                    }))
                })
                })
                .catch(error => {
                    console.log(error);
                })
                // window.scrollTo(0,0);
                document.body.style.overflow = "hidden";
                return () => (document.body.style.overflow = "auto");
        }
    }, [user?.user])

    function onChangeHandler(event) {

        setErrorField('');
        setErrorMessage('');

        setUserData((preValue) => ({
            ...preValue,
            [event.target.name]: event.target.value
        }))
    }

    async function saveData() {

        if ((userData.name.length > 0 && userData.name.length < 3) || userData.name.length > 20) {
            setErrorField('name');
            setErrorMessage('Please enter a valid name.');

        } else if ((userData.profession.length > 0 && userData.profession.length < 4) || userData.profession.length > 20) {
            setErrorField('profession');
            setErrorMessage('Please enter a valid profession.');

        } else {
            
            const sendData = {}
            
            Object.entries(userData).filter(data => {
                if (data[1] !== '') {
                    sendData[data[0]] = data[1];
                }
            });


            try {

                await editUserData(user.user._id, sendData);
                
                setEditProfile(prev => !prev);

            } catch (error) {
                setErrorMessage('Please enter a valid data.');
            }
            
        }

    }

    async function deleteUser() {

        try {
            await deleteProfile(user.user._id);

            profileHandler();
            removeUserData();

        } catch (error) {
            setErrorMessage('We have problem now. Try again later.');
        }
    }


    return (
        <section className={styles['profile']}>

            <div className={styles['close']} onClick={profileHandler}>
                <i className="fa-regular fa-circle-xmark"></i>
            </div>

            <div className={styles['main_info']}>

                <div className={styles['img_container']}>
                    <img src='./profile_pictures.jpg' alt='profile_image'/>
                </div>

                <div className={styles['basic_info']}>
                    <div className={styles['name_rating']}>
                        <h1>{userData.name === '' ? '...' : userData.name}</h1>
                        <p className={styles['profesion']}>{userData.profession === '' ? '...' : userData.profession}</p>
                        <p>Ratings: <b>{userRating}/10</b></p>
                    </div>

                    <div className={styles['btn_container']}>

                        {!editProfile  && 
                            <button onClick={() => setEditProfile(prev => !prev)}>
                                <span>Edit Profile</span>
                            </button>
                        }

                    </div>
                </div>
            </div>

            <div className={styles['user_data']}>
                <div className={styles['about_comments']}>

                    <span className={aboutOrComments ? styles['picked'] : ''} onClick={() => setAboutOrComments(true)}>About</span>
                    <span className={!aboutOrComments ? styles['picked'] : ''} onClick={() => setAboutOrComments(false)}>Comments - {userData.comments.length}</span>

                </div>

                <div className={styles['error_container']}>
                    {errorMessage.length > 0 && <p>{errorMessage}</p>}
                </div>

                {aboutOrComments 
                
                    ? 
                        <div className={styles['about']}>
                            <div className={styles['user_info']}>
                                <p>Name</p>
                                <p>Email</p>
                                <p>Phone</p>
                                <p>Profession</p>
                                <p>Username</p>
                            </div>

                            <div className={styles['user_record']}>
                                {/* Name */}
                                {editProfile 
                                    ? 
                                        <div className={styles['input_container']}>
                                            <input 
                                                className={errorField === 'name' ? styles['input_error'] : ''}
                                                type='text'
                                                name='name'
                                                placeholder='Enter your name...'
                                                autoComplete='off'  
                                                value={userData.name}
                                                onChange={onChangeHandler}  
                                            />
                                        </div>
                                    :
                                        <p>{userData.name === '' ? '...' : userData.name}</p>
                                }

                                {/* Email */}
                                <p>{userData.email === '' ? '...' : userData.email}</p>
                                
                                {/* Phone number */}
                                {editProfile 
                                    ? 
                                        <div className={styles['input_container']}>
                                            <div className={styles['dropdown']}>

                                                <div className={styles['selected']}>

                                                </div>

                                                <div className={styles['dropdown_menu']}>

                                                </div>

                                                <input 
                                                    type='number'
                                                    name='phone'
                                                    placeholder='Enter your phone...'    
                                                    autoComplete='off' 
                                                    value={userData.phone}
                                                    onChange={onChangeHandler}
                                                />
                                            </div>

                                        </div>
                                    :
                                        <p>{userData.phone === '' ? '...' : userData.phone}</p>
                                }

                                {/* Profession */}
                                {editProfile 
                                    ? 
                                        <div className={styles['input_container']}>
                                            <input 
                                                className={errorField === 'profession' ? styles['input_error'] : ''}
                                                type='text'
                                                name='profession'
                                                placeholder='Enter your profession...' 
                                                autoComplete='off'   
                                                value={userData.profession}
                                                onChange={onChangeHandler} 
                                            />
                                        </div>
                                    :
                                        <p>{userData.profession === '' ? '...' : userData.profession}</p>
                                }

                                {/* Username */}
                                <p>{userData.username === '' ? '...' : userData.username}</p>

                            </div>
                        </div>
                    : 
                        <div className={styles['comments']}>
                            <p>comments</p>
                        </div>

                }

            </div>

            <div className={styles['logout_btn']}>
                {editProfile 
                    ?
                        <>
                            <button onClick={saveData}>
                                <span>Save</span>
                            </button>

                            <button className={styles['delete_profile']} onClick={deleteUser}>
                                <span>Delete</span>
                            </button>
                        </>
                    :
                    <button onClick={() => {removeUserData(); profileHandler()}}>
                        <span>Logout</span>
                    </button>
                }
                
            </div>

        </section>
    )
}