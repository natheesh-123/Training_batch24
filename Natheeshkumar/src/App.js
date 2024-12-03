//import logo from './logo.svg';
import './App.css';
import ClassComp from './components/ClassComp';
import ConditionalRenComp from './components/ConditionalRenComp';
import CssComp from './components/CssComp';
import Eventcomp from './components/EventComp';
import FuncComp from './components/FuncComp';
import MyStateComp from './components/MyStateComp';
import NatheeshFuncComp from './task/NatheeshFuncComp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
<h1> welcome all</h1>
{/* <FuncComp></FuncComp>
<NatheeshFuncComp></NatheeshFuncComp>
<ClassComp></ClassComp>
<FuncComp fname="Natheeshkumar" post="java developer"></FuncComp>
<ClassComp fname="kavin" post="full stack developer"></ClassComp>
<NatheeshFuncComp name="Natheesh" salary={50000} post="developer" gender="male" address="dindigul"></NatheeshFuncComp>
<Eventcomp></Eventcomp>
<MyStateComp></MyStateComp> */}
<ConditionalRenComp></ConditionalRenComp>
<CssComp></CssComp>

    </div>
  );
}

export default App;
