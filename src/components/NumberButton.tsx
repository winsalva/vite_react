import React from "react";

const NumberButton = ({ value, onClick }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => onClick(value)}>{ value }</button>
  );
}

export default NumberButton;