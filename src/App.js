import './App.css';
import UseCallBackComponent from './Hooks/UseCallback';
import UseEffectComponent from './Hooks/UseEffect'
import UseMemoComponent from './Hooks/UseMemo';

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      {/* <UseEffectComponent></UseEffectComponent> */}
      {/* <UseMemoComponent /> */}
      <UseCallBackComponent></UseCallBackComponent>
    </div>
  );
}

export default App;
