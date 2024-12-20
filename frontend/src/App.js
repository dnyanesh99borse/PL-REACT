
import React from "react";
import { Route, Routes } from 'react-router-dom';
import './Display.css';
import Display from "./Display";
import Login from "./components/loginsignup/login";
import Signup from "./components/loginsignup/signup";
import CourseAndSem from "./components/engineering/courseandsem";
import IT1STSEM from "./components/engineering/IT/IT1STSEM/IT1stsem";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Display />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/courseandsem" element={<CourseAndSem/>} />
                <Route path="/IT1STSEM" element={<IT1STSEM/>}/>
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
