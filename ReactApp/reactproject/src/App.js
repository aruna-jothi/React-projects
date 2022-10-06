import React, { useState } from 'react';
import './App.css';
function App() {
    const [counter, setcounter] = useState(0);
    const increase = () => {
        setcounter(counter + 1)
    }
    const decrease = () => {
        if (counter > 0) {
            setcounter(counter- 1)
        }
    }

    return (
        <div className="App" >
            <h1> React Counter App </h1>
            <div> {counter} </div>
            <button onClick={increase} > Increment </button>
            <button onClick={decrease} > Decrement </button>
        </div>
    );
}

export default App;