import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from './components/Buttons/Buttons';
import Cards from './components/Cards/Cards';
import Modals from './components/Modals/Modals';

function App() {
  return (
    <div className="App">
      <h1>Practicing React-Bootstrap</h1>
      <Buttons />
      <Cards />
      <Modals />
    </div>
  );
}

export default App;
