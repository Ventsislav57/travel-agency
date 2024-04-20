import { HeroSection } from './HeroSection/HeroSection';

import styles from './Home.module.css';

export const Home = () => {

    return (
        <section className={styles['home_section']}>

            <HeroSection />
            
        </section>
    )
}