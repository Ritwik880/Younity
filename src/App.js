import React, { useState, useEffect } from "react";
import LoadingBar from 'react-top-loading-bar'
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Frm from "./components/Frm";
import Cfa from "./components/Cfa";
import Ncfm from "./components/Ncfm";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Courses from './components/Courses';
import { XlviLoader } from "react-awesome-loaders";
// import { Divider } from '@material-ui/core';
import ScrollToTop from "./components/ScrollToTop";
function App() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000) //3 secs
  }, [])

  return (

    <>
      {
        loading ?
          <div className="preLoader">


            <XlviLoader
              boxColors={["#EF4444", "#F59E0B", "#6366F1"]}
              desktopSize={"50px"}
              mobileSize={"50px"}

            />
          </div>
          :

          <div>


            <Header />

            <ScrollToTop />


            <LoadingBar height={3} color='#f11946' progress={progress} />
            <Routes>

              <Route exact path="/" element={<Home setProgress={setProgress} />}>

              </Route>

              <Route exact path="/about" element={<About setProgress={setProgress} />}>

              </Route>
              <Route exact path="/courses" element={<Courses setProgress={setProgress} />}>

              </Route>
              <Route exact path="/frm" element={<Frm setProgress={setProgress} />}>

              </Route>
              <Route exact path="/cfa" element={<Cfa setProgress={setProgress} />}>

              </Route>
              <Route exact path="/ncfm" element={<Ncfm setProgress={setProgress} />}>

              </Route>


              <Route exact path="/contact" element={<Contact setProgress={setProgress} />}>

              </Route>



            </Routes>
            <Footer />
          </div>
      }

    </>
  );
}

export default App;
