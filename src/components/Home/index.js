import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo_g.png'
import Logo from './Logo';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'

const Home =()=>{
    const [letterClass,setLetterClass]=useState('text-animate')
    const nameArray=['a','z','a','l']
    const jobArray=[
        'w',
        'e',
        'b',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
    ]

    useEffect(()=>{
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
          }, 3000);
          return () => clearTimeout(timer);
    },[])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="Web developer Name" />

                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                />
                <br />
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={jobArray}
                    idx={20}
                />
                </h1>
                <h2>Full Stack Developer /Machine Learning Enthusiast</h2>
                <Link to="/contact" className='flat-button'> Contact me</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman"/>
        </>
    );
}

export default Home
