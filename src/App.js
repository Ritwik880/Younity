import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import './App.css';
import Courses from './components/Courses';

function App() {
  return (
    <>
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

        {/* <Route exact path="/signup" element={<Signup />}>

        </Route>

        <Route exact path="/login" element={<Login />}>

        </Route> */}

      </Routes>
      <Footer />

    </>
  );
}

export default App;
