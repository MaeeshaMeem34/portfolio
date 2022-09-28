
import './App.scss';
import Layout from './components/Layout'
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skill from './components/Skill';


function App() {
  return (
    <>
    
    
    <Routes>
   
      <Route path="/" element={ <Layout/> } />
      <Route index element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/skill' element={<Skill/>} />
    </Routes>
    
    
    </>
  );
}

export default App;
