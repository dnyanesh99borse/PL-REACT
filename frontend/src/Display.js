import React from 'react';
import Header from './components/header/header';
import SideNavbar from './components/header/sidenavbar';
import Home from './components/home/home';
import Keys from './components/sliderkeys/keys';
import Passkey from './components/passkeys/passkey';
import Review from './components/reviews/review';
import Whywe from './components/whywe/whywe';
import FAQ from './components/faqs/faq';
import Contact from './components/contactus/contact';
import Footer from './components/footer/footer';




function Display() {
    return (
  
      <div className="Display">
        <Header />
        <SideNavbar />
        <Home />
        <Keys />
        <Passkey />
        <Whywe />
        <Review />
        <FAQ />
        <Contact />
        <Footer />
      </div>
  
    );
  }
  
  export default Display;
  








// import React from "react";
// import { Route, Routes } from 'react-router-dom';

// import Display from "./components/display/display";
// import LoginSignup from "./components/loginsignup/loginsignup";

// function Screen() {
//     return (
//         <div className="screen">
//             <Routes>
//                 <Route path="/" element={<Display />} />
//                 <Route path="/login" element={<LoginSignup />} />
//                 <Route path="/signup" element={<LoginSignup />} />
//             </Routes>
//         </div>
//     );
// }

// export default Screen;
