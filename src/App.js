import logo from './logo.svg';
import './App.css';
import UseRef from './hooks/useref/index';
import ContextApi from './hooks/contextApi/index';
import MemoApi from './hooks/usememo/index';
import CallBackApi from './hooks/usecallback/index';
import UseEffectFuction from './hooks/useeffect/index';

function App() {
  return (
    <div className="App">
       {/* <MemoApi /> */}
       {/* <CallBackApi /> */}
       <UseEffectFuction />
    </div>
  );
}

export default App;
