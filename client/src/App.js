import { Routes } from 'react-router-dom';
import styles from './App.module.css';
import { Navigation } from "./Componenets/Navigation/Navigation";
import { Home } from './Componenets/Home/Home';
import { Offerings } from './Componenets/Offerings/Offerings';

function App() {



    return (
        <>
            <div className={styles['main_container']}>

                <Navigation />   
                <Home />
                <Offerings />
            </div>

            <Routes>


            </Routes>
        
        </>
    )
}

export default App;
