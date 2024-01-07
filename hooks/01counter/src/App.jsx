import {useState} from 'react';


function App() {
  let [counter, counterHook] = useState(5);


  function increaseCounter() {
    counter += 1
    counterHook(counter)
    console.log("Increased", counter)

  }

  function decreaseCounter() {
    counter -= 1
    counterHook(counter)
    console.log("Decreased", Math.random())

  }

  return (
    <>
      <h1>Counter = {counter}</h1>
      <button onClick={increaseCounter}>Increase: {counter}</button>
      <br />
      <button onClick={decreaseCounter}>Decrease: {counter}</button>

    </>
  )
}

export default App
