import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React,{useState,useEffect} from 'react'
import Loader from 'react-loaders'
// import ProjectItem from '../Mywork/ProjectItem.js'
// import {ProjectList} from '../Mywork/ProjectList.js'
import img1 from '../../assets/images/img1.png';
import img5 from '../../assets/images/img5.png';
import img6 from '../../assets/images/img6.png';
import img7 from '../../assets/images/img7.png';
import img10 from '../../assets/images/img10.png';
import img3 from '../../assets/images/img3.png';
import img8 from '../../assets/images/img8.png';
import img9 from '../../assets/images/img9.png';
import img4 from '../../assets/images/img4.jpg'
import img11 from '../../assets/images/img11.png'
import img12 from '../../assets/images/img12.png'
import resume from '../Mywork/Gazal_Shyam__Resume.pdf'

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
                    strArray={['W','o','r','k','s',' ','a','n','d']}
                    idx={15}/>
                    <br/>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C','e','r','t','i','f','i','c','a','t','i','o','n','s']}
                    idx={15}/>
                </h1>
                <p>Here you can find all of my certificates, projects, and internships in this section.
                  <br/>I have also included my resume for your reference. Click <a href={resume} target="_blank" alt="Resume" rel="noreferrer">Here</a>
                  <br/>Check out my blogs on <a href="https://medium.com/@gazalshyam18/" target="_blank" rel="noreferrer">Medium</a>.
                </p>
            </div>
            <div className="projects">
              <div className="ProjectList">

              <span>
                <img src={img1} alt="Summer Analytics 2023" />
                <p><a href={img1} target='_blank'rel="noreferrer">Summer Analytics 2023</a></p>
              </span>
              <span>
                <img src={img5} alt="Responsive Web Design" />
                <p><a href={img5} target='_blank'rel="noreferrer">Responsive Web Design</a></p>
              </span>
              <span>
                <img src={img4} alt="AWS DeepRacer" />
                <p><a href={img4} target='_blank'rel="noreferrer">AWS DeepRacer</a></p>
              </span>
              <span>
                <img src={img6} alt="Publicius Sapient" />
                <p><a href={img6} target='_blank' rel="noreferrer">Publicis Sapient</a></p>
              </span>

              <span>
                <img src={img12} alt="Microsoft Learn AI Skills Challenge" />
                <p><a href="https://learn.microsoft.com/en-us/users/gazalshyam/challenges" target='_blank' rel="noreferrer">Microsoft Learn AI Skills Challenge</a></p>
              </span>

              <span>
                <img src={img7} alt="Introduction to Cloud Virtual Experience" />
                <p><a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Datacom/qsuRRyXDZ7Dj2QFx4_Datacom_HvuGengBPFmAqqTWu_1692458600933_completion_certificate.pdf" target='_blank' rel="noreferrer">Introduction to Cloud Virtual Experience</a></p>
              </span>
              <span>
                <img src={img9} alt="Advanced Software Engineering Job Simulation" />
                <p><a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Walmart%20USA/oX6f9BbCL9kJDJzfg_Walmart%20USA_HvuGengBPFmAqqTWu_1692769732887_completion_certificate.pdf" target='_blank' rel="noreferrer" >Advanced Software Engineering Job Simulation</a></p>
              </span>
              <span>
                <img src={img8} alt="LetsGrowMore Internship in Web Development" />
                <p><a href={img8} target='_blank' rel="noreferrer">LetsGrowMore Internship in Web Development </a></p>
              </span>
              <span>
                <img src={img3} alt="LetsGrowMore Internship in Data Science" />
                <p><a href={img3} target='_blank' rel="noreferrer">LetsGrowMore Internship in Data Science</a></p>
              </span>
              <span>
                <img src={img10} alt="Weather Website" />
                <p><a href="https://gazalshyam.github.io/Weather/" target='_blank' rel="noreferrer">Weather Website</a></p>
              </span>
              <span>
                <img src={img11} alt="AttRe" />
                <p><a href="https://github.com/Gazalshyam/AttRe/tree/main" target='_blank' rel="noreferrer">AttRe (Attendance and Registration Portal)</a></p>
              </span>

            </div>
              {/* {
              ProjectList.map((project,idx) => {
                return (

                    <ProjectItem  className="displayitems" name={project.name} image={project.image} />
                )
              })
              } */}
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About
