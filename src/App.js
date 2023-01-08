import { React, useState } from "react";
 
function Button(props) {
  return <button onClick={props.incrementFunction}>+1</button>;
}

function Display(props) {
  return <div>{props.message}</div>;
}

const App = (props) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return (
    <>
      <Button incrementFunction={increment} />
      <Display message={count}/>
    </>
  );
};

export default App;
