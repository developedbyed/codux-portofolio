import styles from './App.module.scss';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { ContactForm } from './components/contact-form/contact-form';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className={styles.App}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<ContactForm />} />
            </Routes>
        </div>
    );
}

export default App;
