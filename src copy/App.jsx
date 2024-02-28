import React, {useState} from 'react';
import TempInput from './components/TempInput'
import ShowOutput from './components/ShowOutput'
import './App.css';
// Lifting the state up
const App = () => {
  const [temp, setTemp] = useState(50);

  const inputChangeHandler = (e) => {
        setTemp(e.target.value);
  }
  // console.log(temp);

  return(
    <div className='App'>
      <h1>Temperature Calc</h1>
      <TempInput inputChangeHandler={inputChangeHandler}/>
      <ShowOutput temp={temp}/>
    </div>
  )
}

export default App;