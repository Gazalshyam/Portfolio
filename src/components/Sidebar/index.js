//src/components/Sidebar/index.js
import {Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/gs_logo.png'
import LogoSubtitle from '../../assets/images/logo-namegs.png'
import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome'
import {faEnvelope, faHome,faNavicon,faSuitcase,faUser} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin,faGithub,faMedium} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const SideBar = () => {
    const [showNav, setShowNav] = useState(false);

    return(
    <div className="nav-bar">
        <Link className='logo' to ="/" onClick={() => setShowNav(false)}>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="Gazal Shyam" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact="true" activeclassname="active" to="/portfolio" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink activeclassname="active" className ="skills-link" to="/skills" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faSuitcase}  color="#4d4d4e"/>
            </NavLink>
            <NavLink activeclassname="active" className ="mywork-link" to="/mywork" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faNavicon}  color="#4d4d4e"/>
            </NavLink>
            <NavLink activeclassname="active" className ="contact-link" to="/contact" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope}  color="#4d4d4e"/>
            </NavLink>
        </nav>
            <ul>
                <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/Gazalshyam/'>
                        <FontAwesomeIcon icon={faGithub}  color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/gazal-shyam/'>
                        <FontAwesomeIcon icon={faLinkedin}  color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://medium.com/@gazalshyam18/'>
                        <FontAwesomeIcon icon={faMedium}  color="#4d4d4e"/>
                    </a>
                </li>

            </ul>
        </div>
    )
}

export default SideBar
