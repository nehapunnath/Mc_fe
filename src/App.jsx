import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PreLoader from './components/PreLoader';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import NewsLetter from './pages/NewsLetter';
import OurPatroness from './pages/OurPatroness';
import OurFoundress from './pages/OurFoundress';
import History from './pages/History';
import OurPrincipal from './pages/OurPrincipal';
import OfficeDetails from './pages/OfficeDetails';

function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => setIsLoading(false), 2000);
  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <>
      {/* {isLoading ? (
        <PreLoader onFinish={() => setIsLoading(false)} /> */}
      {/* ) : ( */}
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/newsletter' element={<NewsLetter/>}/>
            <Route path='/about/our-patroness' element={<OurPatroness/>}/>
            <Route path='/about/our-foundress' element={<OurFoundress/>}/>
            <Route path='/about/history' element={<History/>}/>
            <Route path='/about/our-principal' element={<OurPrincipal/>}/>
            <Route path='/school-life/office-timings' element={<OfficeDetails/>}/>


            
          </Routes>
          <Footer/>
        </>
      {/* )} */}
    </>
  );
}

export default App;
