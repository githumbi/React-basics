import { React, useState } from "react";

function Button(props) {
  const handleClick = () => props.incrementFunction(props.increment);
  return <button onClick={handleClick}>{`+ ${props.increment}`}</button>;
}

function Display(props) {
  return <div>{props.message}</div>;
}

const App = (props) => {
  const [count, setCount] = useState(0);
  const incrementCounter = (incrementValue) => setCount(count + incrementValue);
  return (
    <>
      <Button incrementFunction={incrementCounter} increment={1} />
      <Button incrementFunction={incrementCounter} increment={5} />
      <Button incrementFunction={incrementCounter} increment={10} />
      <Button incrementFunction={incrementCounter} increment={15} />

      <Display message={count} />
    </>
  );
};

export default App;
