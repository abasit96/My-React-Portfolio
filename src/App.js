
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import Navbar from './components/Navbar';
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import Resume from './components/Resume'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {

  // let currentPage = "About"
  // state variable
  const [currentPage, setCurrentPage] = useState("About")

  function renderPage () {
    if(currentPage == "About") {
      return <About />
    }
    if(currentPage == "Contact") {
      return <Contact />
    }
    if(currentPage == "Portfolio") {
      return <Portfolio/>
    }
    if(currentPage == "Resume") {
      return <Resume />
    }
  }

  return (
    <>
      <Header setCurrentPage={setCurrentPage}/>
      <main>
       {
        renderPage()
       }
      </main>
      <Footer />
    </>
  );
}

export default App;
