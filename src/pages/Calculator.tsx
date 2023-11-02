import React, { useState, useEffect } from "react";

import NumberButton from "../components/NumberButton";

export function Calculator() {
  const [result, setResult] = useState("0");
 
  const handleButtonClick = (value) => {
    let current;
    if(result === "0") {
      current = value;
    }
    else {
      current = result + value;
    }
    
    setResult(current);
  }
  const handleResult = () => {
    setResult((currentValue) => eval(currentValue));
  }
  const handleClear = () => {
    setResult("0");
  }

  return (
    <>
      <body className="w-full bg-blue-100 m-0 p-0 border-box">
      <div className="items-center border-black text-center">
        <h1 className="text-center font-bold text-xl">BASIC CALCULATOR</h1>
	<input type="text" className="text-right" value={result} readOnly/>
      </div>
	<br />
	<div className="text-center space-x-3">
	  <NumberButton value="1" onClick={handleButtonClick} />
	  <NumberButton value="2" onClick={handleButtonClick} />
	  <NumberButton value="3" onClick={handleButtonClick} />
	  <NumberButton value="/" onClick={handleButtonClick} />
	</div>
	<div className="text-center space-x-3">
	  <NumberButton value="4" onClick={handleButtonClick} />
          <NumberButton value="5" onClick={handleButtonClick} />
          <NumberButton value="6" onClick={handleButtonClick} />
          <NumberButton value="*" onClick={handleButtonClick} />
	</div>
	<div className="text-center space-x-3">
          <NumberButton value="7" onClick={handleButtonClick} />
	  <NumberButton value="8" onClick={handleButtonClick} />
	  <NumberButton value="9" onClick={handleButtonClick} />
          <NumberButton value="+" onClick={handleButtonClick} />
	</div>
	<div className="text-center space-x-3">
          <NumberButton value="C" onClick={handleClear} />
          <NumberButton value="0" onClick={handleButtonClick} />
          <NumberButton value="." onClick={handleButtonClick} />
	  <NumberButton value="=" onClick={handleResult} />
	</div>
      </body>
    </>
  );
}

