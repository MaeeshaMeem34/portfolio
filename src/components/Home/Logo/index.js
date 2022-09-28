import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/header-img.svg'
import './index.scss'

const Logo = () => {

 

  return (
    <div className="logo-container" >
      <img
       
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      
    </div>
  )
}

export default Logo