import React, { useReducer } from 'react';
import reducer, { initialState } from '../reducers/index';
import {applyNumber, changeOperator, clearDisplay, applyMemory, MEMORY_ADD, MEMORY_READ, MEMORY_CLEAR} from '../actions/index';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = (number) => {
    dispatch(applyNumber(number));
  }

  const handleOperationClick = (operation) => {
    dispatch(changeOperator(operation));
  }

  const handleClearClick = () => {
    dispatch(clearDisplay());
  }

  const handleMemoryClick = (memory) => {
    dispatch(applyMemory(memory));
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => {handleMemoryClick(MEMORY_ADD)}}/>
              <CalcButton value={"MR"} onClick={() => {handleMemoryClick(MEMORY_READ)}}/>
              <CalcButton value={"MC"} onClick={() => {handleMemoryClick(MEMORY_CLEAR)}}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => {handleClick(1)}}/>
              <CalcButton value={2} onClick={() => {handleClick(2)}}/>
              <CalcButton value={3} onClick={() => {handleClick(3)}}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => {handleClick(4)}}/>
              <CalcButton value={5} onClick={() => {handleClick(5)}}/>
              <CalcButton value={6} onClick={() => {handleClick(6)}}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => {handleClick(7)}}/>
              <CalcButton value={8} onClick={() => {handleClick(8)}}/>
              <CalcButton value={9} onClick={() => {handleClick(9)}}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => {handleOperationClick("+")}}/>
              <CalcButton value={"*"} onClick={() => {handleOperationClick("*")}}/>
              <CalcButton value={"-"} onClick={() => {handleOperationClick("-")}}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => {handleClearClick()}}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
