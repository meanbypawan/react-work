import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import First from './First';
import Second from './Second';

function App() {
  let { totalItem } = useSelector(state=> state.master.value);
  return <>
    <h1>Total : {totalItem}</h1>
    <First/>
    <Second/>
  </>
}

export default App;
