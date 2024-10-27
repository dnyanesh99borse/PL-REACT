import React from 'react';
import Header from './components/header/header';  // Import the Header component
import SideNavbar from './components/header/sidenavbar';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      <Header />
      <SideNavbar/>
      <Home/>
      <div>lorem</div>  {/* Render the Header component */}
    </div>
  );
}

export default App;
