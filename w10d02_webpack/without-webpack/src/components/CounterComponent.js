const CounterComponent = () => {
  const [counter, setCounter] = React.useState(0)

  return React.createElement("div", {
    className: "counter",
  },
  React.createElement('p', null, `The current value of the counter is ${counter}`),
  React.createElement('button', {
    onClick: () => setCounter(counter + 1)
  },
  "increment counter")
  )
}