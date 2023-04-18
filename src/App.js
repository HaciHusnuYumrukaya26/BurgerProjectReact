import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import{BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Menu from './pages/Menu';
import Footer from './component/Footer';
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    
    </div>
  );
}

export default App;
