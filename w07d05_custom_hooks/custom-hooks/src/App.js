import './App.css';
// import Title from './components/Title';
// import Mouse from './components/Mouse';
// import Inputs from './components/Inputs';
// import Location from './components/Location';
// import useApi from './hooks/useApi';
// import Bored from './components/Bored'
import Sprite from './components/Sprite'

function App() {
  // const { error, data, loading } = useApi('https://www.boredapi.com/api/activity')
  // console.log(data)


  return (
    <div className="App">
      <h1>Custom Hooks</h1>
      {/* {loading &&  <p>loading...</p>}
      {(!error && !loading) && <Bored activity={data.activity} participants={data.participants} />} */}
      {/* <Title /> */}
      {/* <Mouse /> */}
      {/* <Inputs /> */}
      {/* <Location /> */}
      <div style={{display: 'flex'}}>

        <Sprite animal={'dog_2'}/>
        <Sprite animal={'dog_1'}/>
        <Sprite animal={'cat_2'}/>
        <Sprite animal={'cat_1'}/>

      </div>
     </div>
  );
}

export default App;
