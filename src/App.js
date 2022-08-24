import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';
import BurgerMenu from './components/BurgerMenu';
import InstructionsModal from './components/InstructionsModal';
import Intro from './components/Intro';
import Purchase from './components/Purchase';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Social from './components/Social';


function App() {

  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <Nav setMenu={setMenu} setModal={setModal}/>
      <BurgerMenu menu={menu} setMenu={setMenu}/>
      <InstructionsModal modal={modal} setModal={setModal}/>
      <Intro />
      <Purchase />
      <About />
      <Roadmap />
      <Social />
    </div>
  );
}

export default App;
