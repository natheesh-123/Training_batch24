import logo from './logo.svg';
import './App.css';
import ClassComp from './components/ClassComp';
import MyStateComp from './components/MyStateComp';
import Counttask from './task/Counttask';
import ClickCounterComp from './components/ClickCounterComp';
import HoverCounterComp from './components/HoveCounterComp';
import MyHocComp from './components/MyHocComp';
import MyImageComp from './components/MyImagesComp';
import UserComp from './components/UserComp';
import ErrorBoundaryComp from './components/ErrorBoundaryComp';
import VirtualDom from './components/VirtualDom';
import EmployeeDetails from './task/TableTask';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      {/* <ClassComp></ClassComp>
      <MyStateComp></MyStateComp> */}
      {/* <ClickCounterComp></ClickCounterComp> */}
      {/* <Counttask></Counttask> */}
  {/* <HoverCounterComp></HoverCounterComp>
  <MyHocComp></MyHocComp> */}
{/* <MyImageComp></MyImageComp> */}
{/* <UserComp user="natheesh"></UserComp>
<UserComp user="kavin"></UserComp>
<UserComp user="ravi"></UserComp> */}
{/* 
<ErrorBoundaryComp ><UserComp user="natheesh"/>
</ErrorBoundaryComp>
<ErrorBoundaryComp><UserComp user="ravi"/>
</ErrorBoundaryComp> */}
{/* <VirtualDom></VirtualDom> */}
{/* 
<EmployeeDetails></EmployeeDetails> */}

    </div>
  );
}

export default App;
