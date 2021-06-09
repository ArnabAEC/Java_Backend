import logo from './logo.svg';
import './App.css';
import Show from './components/show';
import Parent from './components/parent';
import Toggle from './components/toggle';
import Greet from './components/greet';

function App() {
  return (
    <div>
      <h1>Hello Beautiful World</h1>
      <h1>Hello ,Code with Zubair</h1>
      <hr/>
      <Parent />
      <Show author = "Zubair"/>
      <Toggle/>
      <Greet/>
      
     {/* // <Chow author="James"/> */}

    </div>
  );
}

export default App;
