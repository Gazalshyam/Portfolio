import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import 'leaflet/dist/leaflet.css'
import {MapContainer,Marker,Popup, TileLayer} from 'react-leaflet'
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const Contact = () => {
    const[letterClass,setLetterClass]=useState('text-animate')
    const refForm = useRef()
    useEffect(()=>{
      const timer = setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 3000);
      return () => clearTimeout(timer);
    },[]);

    const sendEmail=(e)=>{
        e.preventDefault()

        emailjs
            .sendForm(
                'service_hivgcgw', 'template_0mfjbpg',
                refForm.current,
                '0IsNP3bRA62vX9YUb')
                .then(()=>{alert('Email sent successfully!')
                window.location.reload(false)}
                ,()=>{alert('Email failed to send,please try again!')})
    }

    // const position = [44.36,76.36]


    return (
        <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','m','e']} idx={15} />
                </h1>
                <p>I am interested in opportunities in the field of web development and machine learning- especially
                    involving ambitious or large projects.
                    If you have any question or request,
                    don't hesitate to contact me.
                </p>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type='text' name='name' placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type='email'name='email' placeholder='Email' required/>
                            </li>
                            <li>
                                <input type='text' name='suubject' placeholder='Subject' required/>
                            </li>
                            <li>
                                <textarea name='message' placeholder='Message' required/>
                            </li>
                            <li className='half'>
                                <input type='submit' className='flat-button' value='Send' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="info">
                Gazal Shyam
                <br/>
                Nankhari, Shimla, Himachal Pradesh, India, 171213
                <br/>
                <span>gazalshyam18@gmail.com</span>
            </div>
            <div className="map-wrap" width="600px" height=" 400px">

                {/* <MapContainer center={[44.36,76.36]} zoom={13}>
                    < TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>https://tiles.stadiamaps.com/tiles/{z}/{x}/{y}{r}.png
                    <Marker position={[44.36,76.36]}>
                        <Popup>Gazal lives here!!</Popup>
                    </Marker>
                </MapContainer> */}

                <MapContainer
                  className="full-height-map"
                  center={[31.254220, 77.457930]}
                  zoom={13}
                  minZoom={6}
                  maxZoom={19}
                  maxBounds={[[-360, -180], [360, 180]]}
                  scrollWheelZoom={true}>
                  <TileLayer
                    attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {/* TODO: Add markers */}
                  <Marker  position={[31.254220, 77.457930]} size="3px">
                    <Popup>Gazal lives here!!</Popup>
                    </Marker>
                </MapContainer>


            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact
