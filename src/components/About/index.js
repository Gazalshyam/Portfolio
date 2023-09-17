import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3,  faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')


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
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}/>
                </h1>
                <p>I am an enthusiastic full-stack web developer with a profound fascination for technology and an unwavering passion for innovation and knowledge acquisition.</p>
                <p>At present, I am enrolled in a Computer Science and Engineering program at the prestigious National Institute of Technology, Hamirpur, where I aspire to expand my skill set and explore diverse opportunities.</p>
                <p>I strive to continuously better myself and am always eager to learn and grow.
                     I consider myself to be an inquisitive, self-assured, and collaborative individual.
                </p>
                <p>My ability to learn quickly and adapt to new challenges has propelled me to seek out a full-time software developer position where I can utilize my talents to their fullest potential.</p>
            </div>
            <div className="stage-cube-cont">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faNodeJs} color="#3c873a" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon className ="js" icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>

                </div>

            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About
