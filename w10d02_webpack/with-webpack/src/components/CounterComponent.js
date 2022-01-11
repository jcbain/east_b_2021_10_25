import React, { useState } from "react";

// const CounterComponent = () => {
//   const [counter, setCounter] = React.useState(0)

//   return React.createElement("div", {
//     className: "counter",
//   },
//   React.createElement('p', null, `The current value of the counter is ${counter}`),
//   React.createElement('button', {
//     onClick: () => setCounter(counter + 1)
//   },
//   "increment counter")
//   )
// };

const CounterComponent = () => {
  console.log('this is the counter component')
  const [counter, setCounter] = useState(0)
  return (
    <div className="counter">
      <p>The current value of the counter is {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>increment counter</button>
    </div>
  )
}

export default CounterComponent;