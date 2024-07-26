import { useEffect } from 'react';
import Header from './components/Header/Header.jsx';
import Button from './components/Button/Button.jsx';
import './App.css';

function App() {
    const tg = window.Telegram.WebApp;

    useEffect(() => {
        tg.ready()
    })

    const onClose = ( ) => {
        tg.close()
    }

    return (
        <>
            <Header/>
            <Button onClick={onClose} text={'close'}/>
        </>
    );
}

export default App;
