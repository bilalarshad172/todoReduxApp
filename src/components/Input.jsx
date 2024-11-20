import React, { useState } from "react";

const Input = ({ value, onInputChange }) => {
  
  
  return (
    <div>
      <input
        type="text"
        className="border border-2 p-1 w-100 rounded"
        value={value}
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
