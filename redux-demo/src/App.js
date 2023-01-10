import logo from './logo.svg';
import './App.css';
import First from './components/First';
import { useSelector } from 'react-redux';

function App() {
  let data = useSelector(state=>state.master.data);
  return <>
     <h1>App Component</h1>
     <p>{data}</p>
     <hr/>
     <First/>
  </>
}

export default App;
