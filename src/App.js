import React from 'react'
import { HashRouter as Router , Routes ,Route} from 'react-router-dom';
import "./style/style.css"
import HomePage from "./Components/Home.jsx";
import Navbar from './Components/Navbar.jsx';
import Certificate from './Components/Certificate.jsx';
import Contact from './Components/Contact.jsx';
import Video from './Components/Video.jsx';
const App = () => {
  return (
   <Router>
   <Navbar/>
    <Routes>
      <Route path="/" element={<Video/>} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="/cerrtificates" element={<Certificate/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
   </Router>
  )
}

export default App


