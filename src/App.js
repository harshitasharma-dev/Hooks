import React, {useState} from 'react';
import './App.css';

//I can never write Hooks in a class.
//Hooks allow me to create or update state value without creating a class.

function App() {

  // useState is a kind of hook === it is a function which returns a state and a function with which 
  // we can update the value of state.

  // count is a state, and setCount is a function to update the state.
  // 1 is the default or initial value of state variable. 
  const [count, setCount] = useState(1);

  //i have created this function so that i can update the value of state in a separate function
  // passing the new and update value of state in the function to update the value of state

  function handleClick(currentValue){
    var newValue = currentValue+1
    setCount(newValue);
  }

  return (
    <div className="App">
      <h1>HOOKS DEMONSTRATION</h1>
      {count===1 
      ? 
          (<p> Count value {count}</p>)
      :
          (<p> Count new value {count}</p>)  
      }
      {/* To directly update the state value using useState function */}
      {/* <button onClick= {()=>setCount(count+1)}>Click me !!</button> */}

      {/* Another way to update the state by creating a separate function */}
      <button onClick= {()=>handleClick(count)}>Click me !!</button>
    </div>
  );
}

export default App;
