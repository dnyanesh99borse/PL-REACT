
import React from "react";
import { Route, Routes } from 'react-router-dom';
import './Display.css';
import Display from "./Display";
import Login from "./components/loginsignup/login";
import Signup from "./components/loginsignup/signup";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Display />} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </div>
    );
}

export default App;












// import React from 'react';
// import Header from './components/header/header';
// import SideNavbar from './components/header/sidenavbar';
// import Home from './components/home/home';
// import Keys from './components/sliderkeys/keys';
// import Passkey from './components/passkeys/passkey';
// import Review from './components/reviews/review';
// import Whywe from './components/whywe/whywe';
// import FAQ from './components/faqs/faq';
// import Contact from './components/contactus/contact';
// import Footer from './components/footer/footer';
// import './App.css'


// function App() {
//   return (

//     <div className="App">
     
//       <Header />
//       <SideNavbar />
//       <Home />
//       <Keys />
//       <Passkey />
//       <Whywe />
//       <Review />
//       <FAQ />
//       <Contact />
//       <Footer />
//     </div>

//   );
// }

// export default App;
