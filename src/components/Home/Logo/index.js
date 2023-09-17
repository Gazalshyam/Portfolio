import './index.scss'
import LogoGs from '../../../assets/images/gs_logo.png'
// import { useEffect, useRef } from 'react'
// import {gsap} from 'gsap'
// import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

const Logo = () => {

    // const bgRef=useRef()
    // const outlineLogoRef=useRef()
    // const solidLogoRef=useRef()

    // useEffect(()=>{
    //   gsap.registerPlugin(DrawSVGPlugin)

    //   gsap.timeline()
    //   .to(bgRef.current, {
    //     duration: 1,
    //     opacity: 1,
    //   })
    //   .from(outlineLogoRef.current, {
    //     drawSVG: 0,
    //     duration: 20,
    //   })
    //   gsap.fromTo(solidLogoRef.current, {
    //     opcaity:0,
    //   },{
    //     delay: 4,
    //     opacity:2,
    //     duration:4,
    //   })

    // },[])

    return(
        <div className="logo-container" >
          {/* ref={bgRef} */}
            <img className="solid-logo"  src={LogoGs} alt="Gs"/>
            {/* ref={solidLogoRef} */}
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" version="1.0" viewBox="140 405 788 1050 ">
                <g className="svg-container" transform="translate(0,352) scale(2,2)" fill='blackgit'>
                    <path
                d="M 253.00,215.00
                   C 259.99,211.41 269.50,203.79 276.00,198.87
                     287.58,190.10 302.75,178.04 313.00,167.99
                     316.16,164.88 328.92,151.50 329.68,148.00
                     330.43,144.50 324.96,135.73 323.45,132.00
                     318.91,120.80 318.20,113.76 317.32,102.00
                     317.09,98.86 317.67,97.05 317.92,94.00
                     319.85,69.71 332.37,47.04 355.00,36.32
                     377.46,25.68 402.66,29.47 410.56,56.00
                     411.71,59.86 412.56,66.99 412.41,71.00
                     412.27,74.50 411.29,89.07 405.06,87.26
                     401.48,86.10 404.47,78.68 405.06,76.00
                     406.06,66.67 404.41,55.61 398.39,48.09
                     390.75,38.55 382.81,43.27 375.04,49.67
                     364.03,58.72 354.09,77.67 353.09,92.00
                     350.62,127.25 391.75,156.03 397.00,190.00
                     403.12,188.25 408.51,184.57 414.00,181.42
                     428.55,173.07 437.22,167.13 450.00,156.13
                     450.00,156.13 461.28,145.62 461.28,145.62
                     462.80,144.60 464.90,144.02 466.30,145.62
                     468.08,147.66 466.09,150.36 464.77,152.00
                     461.91,155.56 453.73,163.18 450.00,166.20
                     439.63,174.58 428.56,181.95 417.00,188.58
                     414.11,190.23 402.30,196.22 401.11,198.39
                     400.15,200.13 401.99,212.47 402.00,216.00
                     402.00,216.00 402.00,231.00 402.00,231.00
                     401.96,257.12 389.63,283.23 364.00,292.77
                     358.59,294.79 352.78,295.93 347.00,296.00
                     340.61,296.07 338.18,295.94 332.00,293.97
                     328.62,292.90 324.89,291.45 322.00,289.36
                     302.75,275.46 314.80,244.50 326.80,230.01
                     329.76,226.44 332.46,224.10 336.00,221.14
                     340.62,217.28 349.55,211.48 355.00,208.89
                     357.72,207.59 362.33,206.36 362.88,202.90
                     363.32,200.08 359.13,191.77 357.75,189.00
                     357.75,189.00 336.00,154.00 336.00,154.00
                     319.62,172.87 300.97,189.15 281.00,204.13
                     281.00,204.13 261.00,218.71 261.00,218.71
                     258.00,220.85 253.07,223.80 251.51,227.09
                     251.51,227.09 247.75,247.00 247.75,247.00
                     247.75,247.00 240.00,288.00 240.00,288.00
                     232.51,325.45 220.22,376.93 206.20,412.00
                     198.09,432.27 188.97,452.83 173.91,469.00
                     162.72,481.02 150.13,492.02 134.00,496.57
                     105.14,504.72 71.09,497.54 52.24,473.00
                     44.76,463.27 41.14,453.34 41.59,441.00
                     42.37,419.75 50.38,399.25 60.85,381.00
                     81.16,345.61 117.52,312.25 150.00,287.87
                     150.00,287.87 185.00,262.34 185.00,262.34
                     189.08,259.56 202.05,251.17 204.44,247.91
                     207.28,244.05 209.30,226.68 210.25,221.00
                     210.25,221.00 216.87,177.00 216.87,177.00
                     216.87,177.00 221.00,150.00 221.00,150.00
                     216.09,154.54 209.50,165.14 205.11,171.00
                     195.88,183.30 188.87,191.15 178.00,202.00
                     172.06,207.93 166.27,213.24 159.00,217.55
                     144.97,225.87 124.77,229.59 112.09,216.91
                     109.17,213.99 107.11,210.90 105.76,207.00
                     104.57,203.54 103.16,195.66 103.04,192.00
                     102.71,181.69 106.40,166.82 109.67,157.00
                     117.98,132.06 130.02,109.56 149.00,91.01
                     158.21,82.01 174.71,70.58 188.00,70.04
                     202.24,69.47 212.26,79.22 218.69,91.00
                     218.69,91.00 226.00,107.00 226.00,107.00
                     226.00,107.00 229.91,64.00 229.91,64.00
                     230.37,57.41 230.20,47.33 234.42,42.04
                     241.69,32.91 254.45,34.54 261.48,43.04
                     271.25,54.84 271.07,67.68 271.00,82.00
                     271.00,82.00 263.15,148.00 263.15,148.00
                     263.15,148.00 256.59,194.00 256.59,194.00
                     256.59,194.00 253.00,215.00 253.00,215.00 Z
                   M 196.00,89.43
                   C 187.41,92.62 177.99,104.51 172.72,112.00
                     158.26,132.55 143.04,164.47 143.15,190.00
                     143.15,190.00 143.15,199.00 143.15,199.00
                     143.58,200.87 144.19,203.28 144.97,205.00
                     151.56,219.43 167.51,202.88 173.83,196.72
                     187.33,183.57 198.25,168.28 209.14,153.00
                     211.78,149.29 220.40,136.82 221.08,133.00
                     221.55,131.21 221.11,127.04 221.08,125.00
                     219.99,110.09 215.78,86.51 196.00,89.43 Z
                   M 366.00,213.00
                   C 360.08,214.11 354.05,217.45 349.00,220.70
                     334.04,230.32 317.80,248.87 319.32,268.00
                     319.62,271.69 320.61,276.92 322.70,279.98
                     328.94,289.12 342.32,289.71 350.99,283.89
                     359.62,278.11 364.05,265.84 365.91,256.00
                     367.45,247.78 368.09,237.38 368.00,229.00
                     367.94,223.77 366.93,218.16 366.00,213.00 Z
                   M 204.00,259.00
                   C 197.75,260.99 192.32,265.78 187.00,269.58
                     187.00,269.58 160.00,289.13 160.00,289.13
                     123.18,317.01 78.86,355.03 59.86,398.00
                     48.62,423.42 37.68,464.92 72.00,477.94
                     76.27,479.55 82.44,480.78 87.00,480.96
                     93.58,481.22 101.75,479.39 108.00,477.33
                     122.90,472.42 136.73,462.40 146.32,450.00
                     161.40,430.51 172.91,393.99 179.58,370.00
                     179.58,370.00 196.60,297.00 196.60,297.00
                     196.60,297.00 204.00,259.00 204.00,259.00 Z" />
                </g>
            </svg>
          </div>
    )
}

export default Logo
