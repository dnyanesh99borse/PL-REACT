import React from 'react';
import Header from './components/header/header';  // Import the Header component
import SideNavbar from './components/header/sidenavbar';

function App() {
  return (
    <div className="App">
      <Header />
      <SideNavbar/>
      <div>hbillionaire</div>  {/* Render the Header component */}
    </div>
  );
}

export default App;
