import './App.css';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Purchase from './components/Purchase';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Social from './components/Social';


function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <Purchase />
      <About />
      <Roadmap />
      <Social />
    </div>
  );
}

export default App;
