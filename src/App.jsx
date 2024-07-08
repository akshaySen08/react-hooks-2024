import './App.css';
import UseCallBackComponent from './Hooks/UseCallback';
import UseEffectComponent from './Hooks/UseEffect'
import UseMemoComponent from './Hooks/UseMemo';
import UseContextComponent from './Hooks/UseContext/UseContext';
import UseRefComponent from './Hooks/UseRef';

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      {/* <UseEffectComponent></UseEffectComponent> */}
      {/* <UseMemoComponent /> */}
      {/* <UseCallBackComponent></UseCallBackComponent> */}
      {/* <UseContextComponent /> */}
      <UseRefComponent />
    </div>
  );
}

export default App;
