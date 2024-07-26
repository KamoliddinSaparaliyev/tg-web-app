import { useEffect } from 'react';
import Header from './components/Header/Header.jsx';

import './App.css';
import { useTelegram } from './hooks/useTelegram.js';

function App() {
const { tg, onToggleButton} = useTelegram()
    useEffect(() => {
        tg.ready()
    })

    return (
        <div>
            <button onClick={onToggleButton}>Toggle</button>
        </div>
    )
}

export default App;
