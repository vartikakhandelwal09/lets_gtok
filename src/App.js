import React from 'react';

import Navbar from './components/Navbar/NavbarMain';
import Top from "./components/Body/Top/Top";
import Middle from "./components/Body/Middle/Middle";
import Bottom from "./components/Body/Bottom/Bottom";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <React.Fragment>
      <Navbar />
      <Top />
      <Middle />
      <Bottom />
      <Footer />
    </React.Fragment>
  );
}

export default App;
