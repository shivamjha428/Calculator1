import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [calc, setCalc]=useState("");
  const [result, setResult]=useState("");
  const ops=["/","*","+","-","."];
  const updateValue=value=>{
    if(ops.includes(value) && calc==='' || ops.includes(value) && ops.includes(calc.slice(-1))){
      return;
    }
    setCalc(calc+value);
    if(!ops.includes(value)){
      setResult(eval(calc+value).toString());
    }
  }
  const Digits=()=>{
    const digi=[];
    for(let i=0;i<10;i++){
      digi.push(
        <button onClick={()=> updateValue(i.toString())} key={i}>{i}</button>
      )
    }
    return digi;
  }
  const Calculate=()=>{
    setCalc(eval(calc).toString());
  }
  const DeltLast=()=>{
    if(calc==''){
      return;
    }
    const value=calc.slice(0, -1);
    setCalc(value);
  }
  return (
    <div className="App">
      <div className="calci">
        <div className="disp">
          {/* {result ? <span>{result}</span> : ''}; */}
          {calc || "0"}
        <div> 
          {result ? <span>{result}</span> : ''}
          </div>
        </div>
        <div className="operators">
          <button onClick={()=> updateValue('/')}>/</button>
          <button onClick={()=> updateValue('*')}>*</button>
          <button onClick={()=> updateValue('+')}>+</button>
          <button onClick={()=> updateValue('-')}>-</button>
          <button onClick={DeltLast}>C</button>
          {/* <button onClick={Calculate}>=</button> */}
        </div>
        <div className="nums">
          {Digits()}
          <button onClick={()=> updateValue('0')}>0</button>
          <button onClick={()=> updateValue('.')}>.</button>
          <button onClick={Calculate}>=</button>
        </div>
      </div>

    </div>
  );
}

export default App;
