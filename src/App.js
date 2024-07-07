import './App.css';
import UseEffectComponent from './Hooks/UseEffect'
import UseMemoComponent from './Hooks/UseMemo';

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      {/* <UseEffectComponent></UseEffectComponent> */}
      <UseMemoComponent />
    </div>
  );
}

export default App;
