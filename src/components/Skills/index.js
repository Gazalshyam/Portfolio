import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {useState,useEffect} from 'react'
import Loader from 'react-loaders'
import TagCloud from 'TagCloud'



const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(()=>{const container=".tagcloud";

    const texts=["HTML","CSS","SASS","ReactJS","NodeJS","ExpressJS","GIT","GITHUB","Javascript","C++","Java"];

    const options = {
        radius: 300,
        initspeed:"fast",
        maxspeed: "fast",
        keep:true,
    };

    TagCloud(container,texts,options);
},[]);

    useEffect(()=>{
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
          }, 3000);
          return () => clearTimeout(timer);
    },[]);

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['S','k','i','l','l','s' ,' ','E','x','p','e','r','t','i','s','e']}
                    idx={15}/>
                </h1>
                <p>Hi, I am a full stack developer. I have experience in building web applications using ReactJS, NodeJS, ExpressJS, Python, Django, PostgreSQL, HTML, CSS, JavaScript, Git, and more.</p>
                <p>I’m not a designer but I have a good sense of aesthetics, and experience in responsive, mobile-first web design. I put special effort into optimizing my code and providing the best user
                    experience. I guarantee a commitment during work on your project.</p>
                <p>I am passionate about exploring Machine Learning and Artificial Intelligence Related fields. If you have any projects where I can contribute my skills please feel free to contact.</p>
            </div>

            <div className="text-sphere" >
                <span className="tagcloud">
                </span>
            </div>
        </div>

        <Loader type="pacman"/>
        </>
    )
}

export default About
