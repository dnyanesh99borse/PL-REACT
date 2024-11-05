import React from 'react';
import Header from './components/header/header';  // Import the Header component
import SideNavbar from './components/header/sidenavbar';
import Home from './components/home/home'; 
import Footer from './components/footer/footer';
import './App.css'
import Keys from './components/sliderkeys/keys';
import Passkey from './components/passkeys/passkey';
import Whywe from './components/whywe/whywe';
import Contact from './components/contactus/contact';
import FAQ from './components/faqs/faq';
import Review from './components/reviews/review';


function App() {
  return (
    <div className="App">
      <Header />
      <SideNavbar/>
      <Home/>
      <Keys/>
      <Passkey/>
      <Review/>
      <Whywe/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
