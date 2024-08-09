import './App.css';
import UseCallBackComponent from './Hooks/UseCallback';
import UseEffectComponent from './Hooks/UseEffect'
import UseMemoComponent from './Hooks/UseMemo';
import UseContextComponent from './Hooks/UseContext/UseContext';
import UseRefComponent from './Hooks/UseRef';
import UseReducerComponent from './Hooks/UseReducer';
import UseImperativeHandleComponent from './Hooks/UseImperativeHandle/UseImperativeHandle';
import UseTransitionComponent from './Hooks/UseTransition/UseTransition';
import UseDeferredValueComponent from './Hooks/UseDeferredValue/UseDeferredValue';
import UseLayoutEffectComponent from './Hooks/UseLayoutEffect/UseLayoutEffect';
import PracticeUseEffect from './Practice/UseEffect/PracticeUseEffect';

function App() {
  return (
    <div className="App">
      {/* <h1>React Hooks</h1> */}
      {/* <UseEffectComponent></UseEffectComponent> */}
      {/* <UseMemoComponent /> */}
      {/* <UseCallBackComponent></UseCallBackComponent> */}
      {/* <UseContextComponent /> */}
      {/* <UseRefComponent /> */}
      {/* <UseReducerComponent></UseReducerComponent> */}
      {/* <UseImperativeHandleComponent /> */}
      {/* <UseTransitionComponent></UseTransitionComponent> */}
      {/* <UseDeferredValueComponent/> */}
      {/* <UseLayoutEffectComponent/> */}


      {/* ----------Practice React-------------- */}
      <PracticeUseEffect/>
    </div>
  );
}

export default App;
