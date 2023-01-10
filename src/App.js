import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import logo from './logo.svg';
import './App.css';
import particlesOptions from "./particles.json";
import { Alert } from 'react-bootstrap';
import BasicExample from './components/NavBar';
import TypesExample from './components/TypesExample';
import Acco from './components/Acco';

function App() {

    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <>
        <div className='topBorder'></div>
        <div className='outerMostWrapper'>
        <h1 style={{fontFamily:'AnandaBlack', color: 'cyan', fontSize: '80px'}}>Memories</h1>
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit}/>
        </div>
        {/* <BasicExample></BasicExample> */}
        <Acco />
        </div>
        </>
    );
}

export default App;