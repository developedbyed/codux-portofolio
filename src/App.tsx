import styles from './App.module.scss';
import { Navbar } from './components/navbar/navbar';
import { Intro } from './components/intro/intro';
import { Portofolio } from './components/portofolio/portofolio';
import { Home } from './components/home/home';

function App() {
    return (
        <div className={styles.App}>
            <Navbar />
            <Intro />
            <Portofolio />
            <Home />
        </div>
    );
}

export default App;
