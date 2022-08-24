import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';
import BurgerMenu from './components/BurgerMenu';
import Intro from './components/Intro';
import Purchase from './components/Purchase';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Social from './components/Social';


function App() {

  const [menu, setMenu] = useState(false);

  return (
    <div className="App">
      <Nav setMenu={setMenu}/>
      <BurgerMenu menu={menu} setMenu={setMenu}/>
      <Intro />
      <Purchase />
      <About />
      <Roadmap />
      <Social />
    </div>
  );
}

export default App;
