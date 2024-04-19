
import styles from './GroupSection.module.css';


export const GroupSection = () => {


    return (
        <section className={styles['group_section']}>

            <div className={styles['title_container']}>
                <h1>Small group travel that's good all over</h1>
            </div>

            <div className={styles['comment_picture']}>

                <div className={styles['comment']}>
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
                </div>

                <div className={styles['img_container']}>
                    <img src='./girls-modified.png' alt='pictures' />
                </div>

            </div>

        </section>
    )
}