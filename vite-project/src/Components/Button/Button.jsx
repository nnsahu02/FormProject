import React, { useState } from 'react';
import ButtonDataTable from './ButtonTable';

function ButtonTracker() {
  const [buttonData, setButtonData] = useState([]);

  const handleClick = (buttonName) => {
    const currentTime = new Date().toLocaleTimeString();
    setButtonData((prevState) => [...prevState, { buttonName, currentTime }]);
  };

  return (
    <div>
      <button onClick={() => handleClick('Button A')}>Button A</button>
      <button onClick={() => handleClick('Button B')}>Button B</button>
      <button onClick={() => handleClick('Button C')}>Button C</button>
      <button onClick={() => handleClick('Button D')}>Button D</button>
      <ButtonDataTable buttonData={buttonData} />
    </div>
  );
}

export default ButtonTracker;
