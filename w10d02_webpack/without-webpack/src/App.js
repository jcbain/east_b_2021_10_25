const App = () => {
  const links = [
    {path: '/', name: 'home'},
    {path: '/buttons', name: 'buttons'}
  ];

  return React.createElement("div", 
    {className: 'App'},
    React.createElement(Header, {links}),
    React.createElement(CounterComponent, null)
  )
};