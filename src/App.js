import React, { useReducer } from 'react';

import './App.css';
import reducer, { initialState } from './reducers';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import { addOne, applyNumber, changeOperation, clearDisplay, addToMemory, clearMemory, applyMemory } from './actions';

function App() {

  const [ state, dispatch ] = useReducer(reducer, initialState)

  // const handleClickOne = () => {
  //   if(state.operation === "+"){
  //     dispatch(addOne())
  //   }
  // }

  const handleClick = number => {
    dispatch(applyNumber(number))
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={ state.total }/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              <span id="memory"><b>Memory:</b> { state.memory }</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => dispatch(addToMemory())}/>
              <CalcButton value={"MR"} onClick={() => dispatch(applyMemory())}/>
              <CalcButton value={"MC"} onClick={() => dispatch(clearMemory())}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleClick(1)}/>
              <CalcButton value={2} onClick={() => handleClick(2)}/>
              <CalcButton value={3} onClick={() => handleClick(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleClick(4)}/>
              <CalcButton value={5} onClick={() => handleClick(5)}/>
              <CalcButton value={6} onClick={() => handleClick(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleClick(7)}/>
              <CalcButton value={8} onClick={() => handleClick(8)}/>
              <CalcButton value={9} onClick={() => handleClick(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => dispatch(changeOperation('+'))}/>
              <CalcButton value={"*"} onClick={() => dispatch(changeOperation('*'))}/>
              <CalcButton value={"-"} onClick={() => dispatch(changeOperation('-'))}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => dispatch(clearDisplay())}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
