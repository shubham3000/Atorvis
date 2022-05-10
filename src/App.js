import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

import Home from './MyComponents/Home';
import Services from './MyComponents/Services';
import Aboutus from './MyComponents/Aboutus';
import Career from './MyComponents/Career';
import Ourwork from './MyComponents/Ourwork';
import Blog from './MyComponents/Blog';
import './Styles/global.css'

import Header from './MyComponents/Header';
import Bloghighlights from './MyComponents/Bloghighlights';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/bloghighlights" element={<Bloghighlights/>} />
        <Route path="/career" element={<Career/>}/>
        <Route path="/ourwork" element={<Ourwork/>}/>
        <Route path="/Blog" element={<Blog/>}/>
      </Routes>
    </Router>
  );
}

export default App;
