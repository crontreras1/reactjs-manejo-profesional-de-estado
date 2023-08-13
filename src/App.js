import { UseState } from './components/UseState'
import { ClassState } from './components/ClassState'
import './App.css';

function App() {
  return (
    <div className="App">
      <UseState name={'Nuevo nombre'}/>

      <ClassState name={'Nuevo nombre 2'}/>
    </div>
  );
}

export default App;
