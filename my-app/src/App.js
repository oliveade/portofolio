import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header'
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/project/Projects';
import Skill from './components/skill/Skill';


function App() {
  return (
    <>
    <NavBar/>
    <main className='main'>
     
      <Header/>
      <About/>
      <Projects/>
      <Skill/>
      <Footer/>
    </main>
    </>
  );
}

export default App;
