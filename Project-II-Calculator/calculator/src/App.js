import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {

  return (
    <div className="calculator-box">
      <CalculatorDisplay />
      <div className="btn-row">
        <ActionButton className="btn-clear" text="clear" />
        <NumberButton buttonStyle="btn-red" text="/" />
      </div>
      <div className="btn-row">
        <NumberButton buttonStyle="btn-number" text="7" />
        <NumberButton buttonStyle="btn-number" text="8" />
        <NumberButton buttonStyle="btn-number" text="9" />
        <NumberButton buttonStyle="btn-red" text="X" />
      </div>
      <div className="btn-row">
        <NumberButton buttonStyle="btn-number" text="4" />
        <NumberButton buttonStyle="btn-number" text="5" />
        <NumberButton buttonStyle="btn-number" text="6" />
        <NumberButton buttonStyle="btn-red" text="-" />
      </div>
      <div className="btn-row">
        <NumberButton buttonStyle="btn-number" text="1" />
        <NumberButton buttonStyle="btn-number" text="2" />
        <NumberButton buttonStyle="btn-number" text="3" />
        <NumberButton buttonStyle="btn-red" text="+" />
      </div>
      <div className="btn-row">
        <ActionButton buttonStyle="btn-zero" text="0" />
        <NumberButton buttonStyle="btn-red" text="=" />
      </div>
    </div>
  )


};

export default App;
