import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Routes, Route } from 'react-router-dom';
// import Buttons from './components/Buttons/Buttons';
// import Cards from './components/Cards/Cards';
// import Modals from './components/Modals/Modals';
import NavTabs from './components/NavTabs/NavTabs';
// import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <h1>Practicing React-Bootstrap</h1>
      <NavTabs />
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/modals" element={<Modals />} />
      </Routes> */}
    </div>
  );
}

export default App;
