import { useEffect, useState } from 'react'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import Sidebar from '../Sidebar'
import logo1 from '../../assets/images/logo1.png'
import logo2 from '../../assets/images/logo2.png'
import logo3 from '../../assets/images/logo3.png'


const Skill = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  

  return (
    <>
    <Sidebar />
    
    <div className="container skill-page about-page">
        <div className="text-zone">
        <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', '', 'S', 'k', 'i ', 'l', 'l', 's']}
              idx={15}
            />
            </h1>
          </div>
          <div className='images-container'> 

          <div className='image-box'>

            <img className='skill-image' src={logo1} alt="logo" />
          </div>
          <div className='image-box'>

<img className='skill-image' src={logo2} alt="logo" />
</div>
<div className='image-box'>

<img className='skill-image' src={logo3} alt="logo" />
</div>
          </div>
          
          </div>
          <Loader type="pacman" />

     
    </>
  )
}

export default Skill