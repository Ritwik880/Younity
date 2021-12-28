import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Header />

      <Routes>

        <Route exact path="/" element={<Home />}>

        </Route>

        <Route exact path="/about" element={<About />}>

        </Route>
        <Route exact path="/services" element={<Services />}>

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
