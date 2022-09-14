import { useEffect, useState } from "react"
import LogoTitle from "../../assets/images/logo-s.png"
import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"
import {Link} from 'react-router-dom'
import Sidebar from "../Sidebar"
import Logo from "./Logo"

const Home=()=>{

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray=['m','a','e','e','s','h','a']
    const jobArray= [ 'w',
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
    '.',]

useEffect(()=>{
    setTimeout(()=>{
        setLetterClass('text-animate-hover')
    }, 4000)

}, [])



    return( 
        <> 
         <Sidebar/>
         

    <div className="container home-page">
    

        <div className="text-zone">
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>                                      
                 <br/> 
                 <span className={`${letterClass} _13`}>I</span>    
                 <span className={`${letterClass} _14`}>'m</span> 
            <img src={LogoTitle} alt="developer" />
           <AnimatedLetters letterClass={letterClass} strArray={nameArray}  idx={15}/>

            <br/>
            <AnimatedLetters letterClass={letterClass} strArray={jobArray}  idx={22}/>
             </h1>
             <h2> Frontend Devloper / Javascript Expert/ Lecturer </h2>
             <Link to='/contact' className="flat-button"> Contact ME</Link>
        </div>
        <Logo/>

    </div>
    </>
    );
}

export default Home