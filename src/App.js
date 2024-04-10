import { Routes } from 'react-router-dom';
import styles from './App.module.css';
import { Navigation } from "./Componenets/Navigation/Navigation";

function App() {



    return (
        <>
            <div className={styles['main_container']}>
                <Navigation />   
            </div>

            <Routes>


            </Routes>
        
        </>
    )
}

export default App;
