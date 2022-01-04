import React, { useState, useEffect } from "react";
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import './App.css';
import Courses from './components/Courses';
import { XlviLoader } from "react-awesome-loaders";
import { Divider } from '@material-ui/core';

function App() {
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

            <Routes>

              <Route exact path="/" element={<Home />}>

              </Route>

              <Route exact path="/about" element={<About />}>

              </Route>
              <Route exact path="/courses" element={<Courses />}>

              </Route>


              <Route exact path="/contact" element={<Contact />}>

              </Route>



            </Routes>
            <Footer />
          </div>
      }

    </>
  );
}

export default App;
