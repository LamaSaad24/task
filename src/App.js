import './App.css';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar'
import PageNotFound from './components/PageNotFound/PageNotFound'
import {Routes, Route} from 'react-router-dom'
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/order" element={<Contact/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
      <Footer/>
    </>
  );
}

export default App;
