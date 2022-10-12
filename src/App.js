import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import Qualification from './Components/Qualification/Qualification';
import ScrollUp from './Components/Scrollup/ScrollUp';
import Services from './Components/Services/Services';
import Skills from './Components/Skills/Skills';
function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Qualification />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
