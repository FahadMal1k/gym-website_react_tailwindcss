import './App.css';
import Navbar from './Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Trainer from './pages/Trainer';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Service from './pages/Service';
// import MembershipCard from './pages/Membership';
// import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    
    <div className='app'>       
    {/* <Routes>
    <Route path='/' element={<Hero />} />
    <Route path='/hero' element={<Hero />} />
    <Route path='/about' element={<About />} />
    <Route path='/service'  element={<Service />} />
    <Route path='/blog' element={<Blog />} />
    <Route path='/contact' element={<Contact />} />
    </Routes> */}
    <Navbar />
    <Hero />
    <About />
    <Trainer />
    <Service />
    {/* <MembershipCard /> */}

    <Blog />
    <Contact />
    </div>
    </>
  );
}

export default App;
