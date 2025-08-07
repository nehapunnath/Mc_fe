import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PreLoader from './components/PreLoader';
import Header from './components/Header';
import Footer from './components/Footer';

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
            
          </Routes>
          <Footer/>
        </>
      {/* )} */}
    </>
  );
}

export default App;
