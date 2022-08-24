import './App.css';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Purchase from './components/Purchase';
import About from './components/About';
import Roadmap from './components/Roadmap';


function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <Purchase />
      <About />
      <Roadmap />
    </div>
  );
}

export default App;
