import React from 'react';

const NumberContext = React.createContext();

const Display = () => {
  const value = React.useContext(NumberContext);
  return <div>The answer is {value}.</div>;
}

const UseContextExample = () => {
  return (
    <NumberContext.Provider value={42}>
      <Display />
    </NumberContext.Provider>
  );
}

export default UseContextExample;
