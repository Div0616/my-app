import './App.css';
import About from './components/about.js';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import { useState } from 'react';
import Alert from './Alert.js';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const[mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');}
    else{
      setMode('light');
    }
  }
  return (
    <>
    {/* <Router> */}

<Navbar title="Textutils" mode={mode} toggleMode = {toggleMode} />
<Alert alert="This is an alert message"/>
<div className="container">
  {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          </Route>
          </Switch> */}
{/* <About /> */}
          <TextForm heading="Enter text to analyze"/>
</div>
    {/* </Router> */}
    </>
  );
}

export default App;
